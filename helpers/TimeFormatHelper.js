import UnimplementedError from "../errors/UnimplementedError";
import ValidationError from "../errors/ValidationError";

export default class TimeFormatHelper {
    static validate = (time) => {
        if (!time) {
            throw new ValidationError()
        }
        throw new UnimplementedError()
    }

    static getRange = () => {

    }
}
