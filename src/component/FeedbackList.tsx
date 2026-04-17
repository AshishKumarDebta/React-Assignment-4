import { Feedback } from "../action/feedback";

interface Props {
  feedback: Feedback[];
}

function FeedbackList({ feedback }: Props) {
  return (
    <div className="feedback-list">
      <h2>Feedback List</h2>

      {feedback.length === 0 && (
        <p className="empty-message">No feedback available</p>
      )}

      {feedback.map((item) => (
        <div className="feedback-card" key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.message}</p>
          <p className="rating">Rating: {item.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;