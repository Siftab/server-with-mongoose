import config from "../../config";
import { Student } from "../student/student.interface";
import StudentModel from "../student/student.model";
import { newUser, TUser } from "./user.interface";
import { User } from "./user.model";




const createStudentIntoDb = async (password: string, studentData: Student) => {

    const user: Partial<TUser> = {};

    user.password = password || config.default_password as string
    user.role = 'student'
    user.id = "202410001"


    const result = await User.create(user)
    // return result
    if (Object.keys(result).length) {
        studentData.id = result.id,
            studentData.user = result._id


        const newStudent = await StudentModel.create(studentData)
        return newStudent


    }
}





export const userServices = {
    createStudentIntoDb
}