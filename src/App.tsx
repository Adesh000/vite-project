import { useState } from "react";
import { Button, Card } from "antd";
import CustomModal from "./components/Modal";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [events, setEvents] = useState<any>([]);
  console.log(events);
  return (
    <>
      <div>
        <h1>Events</h1>
        <Button onClick={() => setIsModalOpen(true)}>Create Event</Button>
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          events={events}
          setEvents={setEvents}
        />
      </div>
      {events.map((event: any) => {
          return (
            <Card title="Event 1" style={{ width: 300 }}>
              <p>{event.eventName}</p>
              <p>{event.date}</p>
            </Card>
          );
        })}
    </>
  );
}

export default App;
