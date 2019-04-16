import { Expression } from "./types";
import { assertNever } from "../utils";
// import Availability from "../../../qs-web-platform/packages/model/src/Availability"

export function evaluate(expr: Expression): number {
    // const testModel = new Availability();
    // console.warn(testModel.getGroup())
    console.warn('TEST')
    switch (expr.type) {
        case "literal": {
            return expr.value;
        }
        case "binary": {
            switch (expr.operator) {
                case "+":
                    return evaluate(expr.left) + evaluate(expr.right);
                case "-":
                    return evaluate(expr.left) - evaluate(expr.right);
                case "*":
                    return evaluate(expr.left) * evaluate(expr.right);
                case "/":
                    return evaluate(expr.left) / evaluate(expr.right);
                /* istanbul ignore next */
                default: {
                    return assertNever("Unexpected binary operator", expr.operator);
                }
            }
        }
        /* istanbul ignore next */
        default: {
            return assertNever("Unexpected expression type", expr);
        }
    }
}
