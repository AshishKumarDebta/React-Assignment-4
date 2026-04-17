export default FeedbackList;

import { useState } from "react";
import FeedbackForm from "./component/FeedbackForm";
import FeedbackList from "./component/FeedbackList";
import { Feedback } from "./action/feedback";
import "./index.css";

function App() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const addNewFeedback = (data: Feedback) => {
    setFeedback([...feedback, data]);
  };

  return (
    <div className="app-container">
      <h1>Smart Feedback</h1>

  <FeedbackForm addFeedback={addNewFeedback} />
  <FeedbackList feedback={feedback} />
</div>
  );
}