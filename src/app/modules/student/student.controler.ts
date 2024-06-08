import { Request, Response } from "express";
import { StudentServices } from "./student.service";



const createStudent = async (req: Request, res: Response) => {
    const student = req.body
    // send resopnse 

    const result = await StudentServices.createStudentIntoDB(student)
    res.status(200).json({
        success: true,
        message: 'student added Succesfully',
        data: result
    })
}


export const StudentController = {
    createStudent
}