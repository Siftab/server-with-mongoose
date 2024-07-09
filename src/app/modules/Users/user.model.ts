import { required } from "joi";
import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";



export const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "student", "faculty "],
        required: true
    }
    , status: {
        type: String,
        enum: ["in-progress", "blocked"],
        required: true,
        default: "in-progress"
    },
    isDeleted: {
        type: Boolean,
        required: true
    }


}, {
    timestamps: true
})


export const User = model<TUser>("User", userSchema)
