import { transformMongoId } from "@studybuddy/backend/utils/validator";
import { z } from "zod";

export const createSchema = z.object({
  name: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
  logoId: z.string().transform(transformMongoId),
  accountDetailsId: z.string().transform(transformMongoId),
})

export const filterSchema = z.object({
  text: z.string().optional()
})

export const depositSchema = z.object({
  amount: z.number()
})

export const updateSchema = createSchema.partial()
