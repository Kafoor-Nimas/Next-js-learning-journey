import EventCart from "@/components/EventCart";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
// import events from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  "use cache";
  cacheLife("hours");
  // Ensure BASE_URL has https:// protocol
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_BASE_URL
    : `https://${process.env.NEXT_PUBLIC_BASE_URL || "dev-events-navy-omega.vercel.app"}`;

  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />

      <div>
        <h3>Featured Events</h3>

        <ul className="events list-none">
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
              <li key={event.title}>
                <EventCart {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
