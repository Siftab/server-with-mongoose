import config from "../../config";
import { Student } from "../student/student.interface";
import { newUser } from "./user.interface";
import { User } from "./user.model";




const createStudentIntoDb = async (password: string, studentData: Student) => {

    const user: newUser = {};

    user.password = password || config.default_password as string


    const result = await User.create()
    return result
}





export const userServices = {
    createStudentIntoDb
}