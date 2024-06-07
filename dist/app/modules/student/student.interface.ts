import { Schema, model, connect } from 'mongoose';
export interface Guardian {
    fatherName: string;
    fatherOcupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOcupation: string;
    motherContactNo: string;
}
export interface UserName {
    firstName: string;
    lastName: string;

}
export interface LocalGuardian {
    name: string;
    contactNo: string;
    ocupation: string;
    adress: string
}

export type Student = {
    name: UserName;
    gender: "male" | "female";
    email: string;
    conactNo: string;
    emergencyContactNo: string;
    bloodGroup?: `${'A' | 'B' | 'AB' | 'O'}${'+' | '-'}`;
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImage?: string;
    isActive: "active" | "inActive"

}
