import { Feedback } from "../action/feedback";

interface Props {
  feedback: Feedback[];
}

function FeedbackList({ feedback }: Props) {
  return (
    <div>
      <h2>List</h2>

  {feedback.map((item, index) => (
    <div className="feedback-card" key={index}>
      <h4>{item.name}</h4>
      <p>{item.message}</p>
      <p className="rating">
        Rating: {item.rating} 
      </p>
    </div>
  ))}
</div>
  );
}