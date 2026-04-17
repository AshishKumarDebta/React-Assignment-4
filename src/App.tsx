import { useState } from "react";
import FeedbackForm from "./component/FeedbackForm";
import FeedbackList from "./component/FeedbackList";
import { Feedback } from "./action/feedback";
import "./index.css";

function App() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const handleAddFeedback = (data: Feedback) => {
    setFeedback((prev) => [...prev, data]);
  };

  return (
    <div className="app-container">
      <h1>Feedback System</h1>

      <FeedbackForm addFeedback={handleAddFeedback} />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;