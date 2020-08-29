import UnimplementedError from "../errors/UnimplementedError";

export default class StoreHelper {
    static addOne = (date : String, webhook : String) => {
        throw new UnimplementedError()
    }

    static removeOne = () => {
        throw new UnimplementedError()
    }

    static getAllInRange = () => {
        throw new UnimplementedError()
    }
}
