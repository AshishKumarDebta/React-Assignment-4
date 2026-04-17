"use server";

export interface Feedback {
  id: number;
  name: string;
  message: string;
  rating: number;
}

export async function submitFeedback(
  prevState: Feedback | null,
  formData: FormData
): Promise<Feedback> {

  const data: Feedback = {
    id: Date.now(),
    name: formData.get("name") as string,
    message: formData.get("message") as string,
    rating: Number(formData.get("rating"))
  };

  return data;
}