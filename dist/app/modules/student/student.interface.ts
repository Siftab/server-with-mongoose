import { Schema, model, connect } from 'mongoose';
interface Guardian {
    fatherName: string;
    fatherOcupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOcupation: string;
    motherContactNo: string;
}

export type Student = {
    name: {
        firstName: string;
        lastName: string;

    }
    gender: "male" | "female";
    email: string;
    conactNo: string;
    emergencyContactNo: string;
    bloodGroup?: `${'A' | 'B' | 'AB' | 'O'}${'+' | '-'}`;
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian

}
