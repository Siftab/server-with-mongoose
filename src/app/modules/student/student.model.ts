import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';

const StudentSchema = new Schema<Student>({
    id: { type: String },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }

    }
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
    guardian: {
        fatherName: { type: String },
        fatherOcupation: { type: String },
        fatherContactNo: { type: String },
        motherName: { type: String },
        motherOcupation: { type: String },
        motherContactNo: { type: String },
    },
    localGuardian: {
        name: { type: String },
        contactNo: { type: String },
        ocupation: { type: String },
        adress: { type: String }

    },
    profileImage: { type: String },
    isActive: ["active", "inActive"]


})