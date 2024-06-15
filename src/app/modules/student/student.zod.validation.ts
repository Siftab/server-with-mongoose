import { z } from "zod";


const UserNameSchema = z.object({
    firstName: z.string().max(20).refine(value => {
        const firstName = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return value === firstName;
    }, { message: "First name should start with an uppercase letter followed by lowercase letters" }),
    lastName: z.string(),
});

// Define zod schema for Guardian
const GuardianSchema = z.object({
    fatherName: z.string().optional(),
    fatherOccupation: z.string().optional(),
    fatherContactNo: z.string().optional(),
    motherName: z.string().optional(),
    motherOccupation: z.string().optional(),
    motherContactNo: z.string().optional(),
});

// Define zod schema for LocalGuardian
const LocalGuardianSchema = z.object({
    name: z.string().optional(),
    contactNo: z.string().optional(),
    occupation: z.string().optional(),
    address: z.string().optional(),
});

// Define zod schema for Student
const StudentSchema = z.object({
    id: z.string().optional(),
    name: UserNameSchema,
    gender: z.enum(["female", "male"]).default("male"),
    email: z.string().email({ message: "Invalid email format" }).optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    guardian: GuardianSchema.optional(),
    localGuardian: LocalGuardianSchema.optional(),
    profileImage: z.string().optional(),
    isActive: z.enum(["active", "inActive"]).default("active"),
});

export const StudentZodSchema = StudentSchema;