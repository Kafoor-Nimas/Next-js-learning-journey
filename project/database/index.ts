/**
 * Database Models Export
 * 
 * Centralized export for all Mongoose models
 * Import models from this file: import { Event, Booking } from '@/database'
 */

export { default as Event } from './event.model';
export { default as Booking } from './booking.model';

// Export types for TypeScript consumers
export type { IEvent } from './event.model';
export type { IBooking } from './booking.model';