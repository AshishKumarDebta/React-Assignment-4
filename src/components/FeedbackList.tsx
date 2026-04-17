import { Feedback } from "../actions/feedback";

interface Props {
  feedback: Feedback[];
}

function FeedbackList({ feedback }: Props) {
  return (
    <div className="feedback-list">
      <h2>Feedback List</h2>

      {feedback.length === 0 && <p>No feedback yet</p>}

      {feedback.map((item) => (
        <div key={item.id} className="feedback-card">
          <h4>{item.name}</h4>
          <p>{item.message}</p>
          <p>Rating: {item.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;