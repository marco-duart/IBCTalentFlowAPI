import { NextFunction, Request, Response } from "express";

export function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    const { body } = req

    if(!body.email) {
        return res.status(400).send("Email is missing!")
    }
    if(!body.password) {
        return res.status(400).send("Password is missing!")
    }

    console.log("All required fields are present!")

    next()
}