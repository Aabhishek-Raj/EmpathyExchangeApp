import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('Something went wrong !!!!')

    res.status(400).send({
        message: 'something went wrong'
    })
} 