import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Tech Webinar: Future of AI",
      date: "October 15, 2023",
      time: "3:00 PM - 5:00 PM",
      description: "Explore the latest advancements in Artificial Intelligence.",
    },
    {
      id: 2,
      title: "Gaming Tournament: Battle Royale",
      date: "October 22, 2023",
      time: "7:00 PM - 10:00 PM",
      description: "Compete with gamers worldwide in an epic Battle Royale.",
    },
    {
      id: 3,
      title: "Startup Showcase: Innovative Ideas",
      date: "November 5, 2023",
      time: "2:00 PM - 4:00 PM",
      description: "Discover groundbreaking startup ideas and innovations.",
    },
    {
      id: 4,
      title: "Web Development Workshop: React Basics",
      date: "November 12, 2023",
      time: "10:00 AM - 12:00 PM",
      description: "Learn the fundamentals of React.js in this hands-on workshop.",
    },
    {
      id: 5,
      title: "Digital Marketing Summit",
      date: "November 18, 2023",
      time: "1:00 PM - 3:00 PM",
      description: "Get insights from industry experts on the latest trends in digital marketing.",
    },
    // Add more events as needed
  ];

  return (
    <section>
     <h2 className="text-center mt-20 my-10 text-4xl md:text-6xl font-bold">Upcoming Events</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 mx-10 lg:mx-20 " >
        {events.map((event) => (
          <li key={event.id} className="my-5">
            <h3 className="font-bold">{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEvents;
