import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Student, Student, UserName } from './student.interface';
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
    name: UserNameSchema
    , gender: ["female", "male"],
    email: { type: String },
    conactNo: { type: String },
    emergencyContactNo: { type: String },
    bloodGroup: [
        'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
    ],
    presentAddress: { type: String },
    permanentAddress: { type: String }
    ,
    guardian: GuardianSchema,
    localGuardian: localGuardianShcema,
    profileImage: { type: String },
    isActive: ["active", "inActive"]


})

const Student = model<Student>('Student', StudentSchema)