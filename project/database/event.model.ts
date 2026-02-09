import mongoose, { Document, Model, Schema } from 'mongoose';

/**
 * TypeScript interface for Event document
 */
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string; // Stored in ISO format (YYYY-MM-DD)
  time: string; // Stored in 24-hour format (HH:MM)
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Event Schema Definition
 */
const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    overview: {
      type: String,
      required: [true, 'Overview is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
      trim: true,
    },
    venue: {
      type: String,
      required: [true, 'Venue is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
      trim: true,
    },
    time: {
      type: String,
      required: [true, 'Time is required'],
      trim: true,
    },
    mode: {
      type: String,
      required: [true, 'Mode is required'],
      enum: ['online', 'offline', 'hybrid'],
      lowercase: true,
    },
    audience: {
      type: String,
      required: [true, 'Audience is required'],
      trim: true,
    },
    agenda: {
      type: [String],
      required: [true, 'Agenda is required'],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: 'Agenda must contain at least one item',
      },
    },
    organizer: {
      type: String,
      required: [true, 'Organizer is required'],
      trim: true,
    },
    tags: {
      type: [String],
      required: [true, 'Tags are required'],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: 'At least one tag is required',
      },
    },
  },
  {
    timestamps: true, // Auto-generate createdAt and updatedAt
  }
);

/**
 * Pre-save hook: Generate slug from title, normalize date and time
 * Only regenerates slug if title is modified
 */
EventSchema.pre('save', function (next) {
  const event = this as IEvent;

  // Generate slug only if title is modified or new document
  if (event.isModified('title')) {
    event.slug = event.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Remove consecutive hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  }

  // Normalize and validate date to ISO format (YYYY-MM-DD)
  if (event.isModified('date')) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    
    // If date is not in ISO format, try to parse and convert
    if (!dateRegex.test(event.date)) {
      const parsedDate = new Date(event.date);
      
      if (isNaN(parsedDate.getTime())) {
        return next(new Error('Invalid date format. Use YYYY-MM-DD'));
      }
      
      // Convert to ISO date string (YYYY-MM-DD)
      event.date = parsedDate.toISOString().split('T')[0];
    }
  }

  // Normalize time to 24-hour format (HH:MM)
  if (event.isModified('time')) {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    
    if (!timeRegex.test(event.time)) {
      // Try to parse common time formats (e.g., "2:30 PM", "14:30")
      const time12HourRegex = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i;
      const match = event.time.match(time12HourRegex);
      
      if (match) {
        let hours = parseInt(match[1]);
        const minutes = match[2];
        const period = match[3].toUpperCase();
        
        // Convert to 24-hour format
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        
        event.time = `${hours.toString().padStart(2, '0')}:${minutes}`;
      } else {
        return next(new Error('Invalid time format. Use HH:MM (24-hour format)'));
      }
    }
  }

  next();
});

/**
 * Add unique index on slug for faster queries and uniqueness enforcement
 */
EventSchema.index({ slug: 1 });

/**
 * Add indexes for common query patterns
 */
EventSchema.index({ date: 1 });
EventSchema.index({ tags: 1 });

/**
 * Export Event model
 * Prevents model recompilation during hot reloads in development
 */
const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;