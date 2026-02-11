import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const request = await fetch(`${BASE_URL}/api/events/${slug}`);

  if (!request.ok) {
    return notFound();
  }

  const response = await request.json();

  // Check if the request was successful and data exists
  if (!response.success || !response.data) {
    return notFound();
  }

  // Destructure from response.data (not response.event)
  const {
    description,
    image,
    overview,
    date,
    time,
    location,
    mode,
    agenda,
    audience,
    tags,
  } = response.data;

  return (
    <section id="event">
      <div className="header">
        <h1>Event Description</h1>
        <p>{description}</p>
      </div>
      {/* Add more fields as needed */}
    </section>
  );
};

export default EventDetailsPage;
