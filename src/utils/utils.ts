// Importing necessary libraries
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

// cn function: This function takes an array of class values, merges them into a single string using clsx,
// and then further optimizes the class string using tailwind-merge (twMerge).
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
