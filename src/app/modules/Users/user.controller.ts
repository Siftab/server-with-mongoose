import { Request, Response } from "express";
import { userServices } from "./user.services";
import { User } from "./user.model";




const createStudent = async (req: Request, res: Response) => {
    try {



        const { password, student: studentData } = req.body







        const result = await userServices.createStudentIntoDb(password, studentData)

        // if (error) {
        //     res.status(500).json({
        //         success: false,
        //         message: 'Something went wrong',
        //         data: error.details
        //     })
        // }
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




export const UserControllers = {
    createStudent
}