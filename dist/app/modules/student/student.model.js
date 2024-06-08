"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});
const GuardianSchema = new mongoose_1.Schema({
    fatherName: { type: String },
    fatherOcupation: { type: String },
    fatherContactNo: { type: String },
    motherName: { type: String },
    motherOcupation: { type: String },
    motherContactNo: { type: String },
});
const localGuardianShcema = new mongoose_1.Schema({
    name: { type: String },
    contactNo: { type: String },
    ocupation: { type: String },
    adress: { type: String }
});
const StudentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: UserNameSchema,
    gender: ["female", "male"],
    email: { type: String },
    conactNo: { type: String },
    emergencyContactNo: { type: String },
    bloodGroup: [
        'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
    ],
    presentAddress: { type: String },
    permanentAddress: { type: String },
    guardian: GuardianSchema,
    localGuardian: localGuardianShcema,
    profileImage: { type: String },
    isActive: ["active", "inActive"]
});
const StudentModel = (0, mongoose_1.model)('Student', StudentSchema);
exports.default = StudentModel;
