import { Request, Response } from "express";
import { StudentServices } from "./student.service";
<<<<<<< HEAD
import Joi from 'joi';
import StudentJoiSchema from "./student.validation";
import { json } from "stream/consumers";
=======
import { z } from  "zod"
>>>>>>> origin/main



const createStudent = async (req: Request, res: Response) => {
    try {



        const student = req.body.student
        const { error, value } = StudentJoiSchema.validate(student)

        console.log(error?.details[0])
        // const errorMassage =


        const result = await StudentServices.createStudentIntoDB(student)

        if (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                data: error.details
            })
        }
        res.status(200).json({
            success: true,
            message: 'student added Succesfully',
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })

    }
}


export const StudentController = {
    createStudent
}