import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Event } from '@/database';

/**
 * Type for route params
 */
interface RouteParams {
  params: {
    slug: string;
  };
}

/**
 * GET /api/events/[slug]
 * Fetch a single event by its slug
 * 
 * @param request - Next.js request object
 * @param params - Route parameters containing the slug
 * @returns JSON response with event data or error
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    // Connect to database
    await connectDB();

    // Validate slug parameter
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: 'Slug parameter is required',
        },
        { status: 400 }
      );
    }

    // Validate slug format (URL-friendly alphanumeric with hyphens)
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (!slugRegex.test(slug)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid slug format. Slug must contain only lowercase letters, numbers, and hyphens',
        },
        { status: 400 }
      );
    }

    // Query event by slug
    const event = await Event.findOne({ slug }).lean();

    // Handle event not found
    if (!event) {
      return NextResponse.json(
        {
          success: false,
          message: `Event with slug "${slug}" not found`,
        },
        { status: 404 }
      );
    }

    // Return successful response
    return NextResponse.json(
      {
        success: true,
        data: event,
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging (in production, use a proper logging service)
    console.error('Error fetching event by slug:', error);

    // Handle unexpected errors
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while fetching the event',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}