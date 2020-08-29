import UnimplementedError from "../errors/UnimplementedError";
import ValidationError from "../errors/ValidationError";

export const validate = function (time) {
    if (!time) {
        throw new ValidationError()
    }
    throw new UnimplementedError()
}

export const getRange = function () {

}