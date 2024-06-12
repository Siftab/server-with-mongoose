import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';
// import validator from "validator"
// import isEmail from 'validator/lib/isEmail';
import validator from 'validator';

const UserNameSchema = new Schema<UserName>({
    firstName: {
        type: String, required: true, maxlength: [20, "make it short"],
        trim: true,
        validate: {
            validator: function (value: string) {
                const firstName = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                return value === firstName
            },
            message: "{VALUE} is not appropiate"
        }
    },
    lastName: { type: String, required: true }

})
const GuardianSchema = new Schema<Guardian>({
    fatherName: { type: String },
    fatherOcupation: { type: String },
    fatherContactNo: { type: String },
    motherName: { type: String },
    motherOcupation: { type: String },
    motherContactNo: { type: String },
})
const localGuardianShcema = new Schema<LocalGuardian>({
    name: { type: String },
    contactNo: { type: String },
    ocupation: { type: String },
    adress: { type: String }

})

const StudentSchema = new Schema<Student>({
    id: { type: String },
    name: {
        type: UserNameSchema,
        required: [true, "tomar ki nam nai!!abnormal"]
    }
    , gender: {
        type: String,
        enum: ["female", "male"],
        default: "male",
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: (value: string) => {
                return validator.isEmail(value)

            },
            message: "{VALUE}is not a proper email "
        }
    },
    conactNo: { type: String },
    emergencyContactNo: { type: String },
    bloodGroup: {
        type: String,
        enum: {
            values: [
                'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
            ],
            message: '{VALUE} is no applicable'
        },
        required: true
    },
    presentAddress: { type: String },
    permanentAddress: { type: String }
    ,
    guardian: GuardianSchema,
    localGuardian: localGuardianShcema,
    profileImage: { type: String },
    isActive: {
        type: String,
        enum: ["active", "inActive"],
        default: "active",
        required: true
    }

})

const StudentModel = model<Student>('Student', StudentSchema)

export default StudentModel;