import { Request, Response } from "express";
import { StudentServices } from "./student.service";



const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body.student
        // send resopnse 

        const result = await StudentServices.createStudentIntoDB(student)
        res.status(200).json({
            success: true,
            message: 'student added Succesfully',
            data: result
        })

    } catch (error) {
        console.log(`error in student ${error}`)

    }
}


export const StudentController = {
    createStudent
}