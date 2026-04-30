import { IdentityFormValues } from "../../validations/identity";
import { IdentityResponse } from "./type";

export async function synthesizeIdentity(
  payload: IdentityFormValues,
): Promise<IdentityResponse> {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Synthesis failed");

  const data = await response.json();

  return data;
}
