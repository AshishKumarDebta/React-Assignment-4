"use client";

import { submitFeedback } from "../actions/feedback";
import { useFormState, useFormStatus } from "react-dom";
import { Feedback } from "../actions/feedback";

interface Props {
  addFeedback: (data: Feedback) => void;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return <button type="submit">{pending ? "Submitting..." : "Submit"}</button>;
}

function FeedbackForm({ addFeedback }: Props) {
  const [state, formAction] = useFormState(submitFeedback, null);
  if (state) {
    addFeedback(state);
  }

  return (
    <form action={formAction} className="feedback-form">
      <h2>Submit Feedback</h2>

      <input name="name" placeholder="Enter Name" required />
      <textarea name="message" placeholder="Write Feedback" required />

      <select name="rating">
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐⭐</option>
        <option value="3">3 ⭐⭐⭐</option>
        <option value="4">4 ⭐⭐⭐⭐</option>
        <option value="5">5 ⭐⭐⭐⭐⭐</option>
      </select>

      <SubmitButton />
    </form>
  );
}

export default FeedbackForm;