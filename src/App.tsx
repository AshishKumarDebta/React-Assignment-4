"use client";

import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { Feedback } from "./actions/feedback";
import "./index.css";

function App() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const addFeedback = (data: Feedback) => {
    setFeedback((prev) => [...prev, data]);
  };

  return (
    <div className="app-container">
      <h1>Feedback System</h1>

      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;