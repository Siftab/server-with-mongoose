import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';
const UserNameSchema = new Schema<UserName>({
    firstName: { type: String, required: true },
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
    email: { type: String, unique: true },
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