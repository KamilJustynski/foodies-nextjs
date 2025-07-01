"use client";
import { useFormStatus } from "react-dom";

const MealFormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Sharing..." : "Share Meal"}</button>
  );
};
export default MealFormSubmit;
