import { KundliInput, KundliResult } from "../types/types";

export async function generateKundli(
  input: KundliInput
): Promise<KundliResult> {
  const response = await fetch("http://localhost:8080/api/kundli", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Failed to generate kundli");
  }

  return response.json();
}