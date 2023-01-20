import Move from "./Move";

export default class MoveFatory {
    static create (options) {
        return new Move(options)
    }
}