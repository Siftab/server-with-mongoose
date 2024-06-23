// defining a joi schema 

import Joi from "joi";


const UserNameJoiSchema = Joi.object({
    firstName: Joi.string()
        .max(20)
        .trim()
        .regex(/^[A-Z][a-z]*$/, 'proper case')
        .messages({
            'string.max': 'make it short',
            'string.pattern.name': '{#value} is not appropriate'
        })
        .required(),
    lastName: Joi.string().required()
});

const GuardianJoiSchema = Joi.object({
    fatherName: Joi.string().optional(),
    fatherOccupation: Joi.string().optional(),
    fatherContactNo: Joi.string().optional(),
    motherName: Joi.string().optional(),
    motherOccupation: Joi.string().optional(),
    motherContactNo: Joi.string().optional()
});

const LocalGuardianJoiSchema = Joi.object({
    name: Joi.string().optional(),
    contactNo: Joi.string().optional(),
    occupation: Joi.string().optional(),
    address: Joi.string().optional()
});

const StudentJoiSchema = Joi.object({
    id: Joi.string().optional(),
    name: UserNameJoiSchema.required().messages({
        'any.required': 'tomar ki nam nai!!abnormal'
    }),
    gender: Joi.string()
        .valid('female', 'male')
        .required(),
    email: Joi.string()
        .email()
        .messages({
            'string.email': '{#value} is not a proper email'
        })
        .optional(),
    contactNo: Joi.string().optional(),
    emergencyContactNo: Joi.string().optional(),
    bloodGroup: Joi.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .required()
        .messages({
            'any.only': '{#value} is not applicable'
        }),
    presentAddress: Joi.string().optional(),
    permanentAddress: Joi.string().optional(),
    guardian: GuardianJoiSchema.optional(),
    localGuardian: LocalGuardianJoiSchema.optional(),
    profileImage: Joi.string().optional(),
    isActive: Joi.string()
        .valid('active', 'inActive')
        .default('active')
        .required()
});

export default StudentJoiSchema;








