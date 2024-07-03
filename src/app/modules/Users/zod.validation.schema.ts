import { z } from "zod";

export const userSchemaZod = z.object({
    id: z.string(),
    password: z.string({
        invalid_type_error: "password must be a string"
    })
        .max(20, { message: "maxium password limt is 20 chareters" })
        .optional(),
    needsPasswordChange: z.boolean(),
    role: z.enum(["admin", "student", "faculty"]),
    status: z.enum(["in-progress", "blocked"]),
    isDeleted: z.boolean()
});