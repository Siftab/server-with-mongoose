import express from 'express'
import { StudentController } from './student.controler'

const Router = express.Router()

//will call controller funtions 

Router.post('/create-student', StudentController.createStudent)