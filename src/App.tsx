import { useState } from "react";
import { Button } from "antd";
import CustomModal from "./components/Modal";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <h1>Events</h1>
        <Button onClick={() => setIsModalOpen(true)}>Create Event</Button>
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
