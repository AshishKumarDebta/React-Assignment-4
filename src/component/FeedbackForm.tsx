import { Feedback } from "../action/feedback";

interface Props {
  addFeedback: (data: Feedback) => void;
}

function FeedbackForm({ addFeedback }: Props) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newFeedback: Feedback = {
      id: Date.now(),
      name: formData.get("name") as string,
      message: formData.get("message") as string,
      rating: Number(formData.get("rating"))
    };

    addFeedback(newFeedback);

    e.currentTarget.reset();
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>

      <input type="text" name="name" placeholder="Enter Name" required />

      <textarea name="message" placeholder="Write Feedback" required />

      <label>Rating:</label>
      <select name="rating">
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐⭐</option>
        <option value="3">3 ⭐⭐⭐</option>
        <option value="4">4 ⭐⭐⭐⭐</option>
        <option value="5">5 ⭐⭐⭐⭐⭐</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default FeedbackForm;