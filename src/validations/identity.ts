import * as z from "zod";

export const identitySchema = z.object({
  projectName: z.string().min(1, "Project identifier is required"),
  stack: z.array(z.string()).min(1, "Select at least one technology"),
  problem: z.string().min(10, "Problem statement must be at least 10 characters"),
  tone: z.enum(["Surgical", "Brutal", "Minimal"]),
});

export type IdentityFormValues = z.infer<typeof identitySchema>;
