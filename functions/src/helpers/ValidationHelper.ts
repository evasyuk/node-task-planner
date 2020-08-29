import { Request } from "express";
import ValidationError from "../errors/ValidationError";

export default class ValidationHelper {
    static validateBody(expectedArgs : any, request : Request) {
        if (!expectedArgs) {
            throw new ValidationError()
        }
        if (!request) {
            throw new ValidationError()
        }

        // Object.keys(expectedArgs).forEach((key : String) => {
        //     // @ts-ignore
        //     if (!request.body[key] || typeof request.body[key] !== expectedArgs[key]) {
        //         throw new ValidationError()
        //     }
        // })
    }
}