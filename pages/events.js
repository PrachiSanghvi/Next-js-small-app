import { useRouter } from "next/router";
import { useState } from "react";

// Pre rendering and client side data fetching
// https://www.youtube.com/watch?v=cBWzJlVWuR0&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=39
// Above link for summary of Pre-rendering and data fetching
// https://stackoverflow.com/questions/61948237/next-js-shallow-routing-with-dynamic-routes
function EventList({ eventList }) {
  const router = useRouter();
  const [events, setEvents] = useState(eventList)

  const fetchSportsEvent = async () => {
    const response = await fetch(`http://localhost:4000/events?category=sports`);
    const data = await response.json();
    setEvents(data)
    router.push('events?category=sports', undefined, {shallow : true})
    // Shallow routing allows you to change the URL without running data fetching methods again,
    //  that includes getServerSideProps, getStaticProps, and getInitialProps.
  }

  return (
    <>
      <button onClick={fetchSportsEvent}>Sports Event</button>
      <h1>Events</h1>
      {events.map((events) => (
        <div key={events.id}>
          <p>{events.title} - {events.description} - {events.category} - {events.date}</p>
        </div>
      ))
      }
    </>
  )
}
export default EventList;
export async function getServerSideProps(context) {
  // Will not come to server side function if shallow : true
  console.log('Coming here...')
  const { query } = context;
  const {category} = query;
  const queryString = category ? 'category=sports' : ''
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data
    }
  }
}