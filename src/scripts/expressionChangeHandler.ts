import {Parser} from "expr-eval";
const parser = new Parser()

export function expressionChangeHandler (expression: string, setter: (value: string) => void):void {
    let symbol = expression[expression.length-1];
    let newExpression;

    const solution = (expression: string) => {
        return parser.parse(expression.slice(0, expression.length-1).toString()).evaluate()
    }

    switch (symbol) {
        case "C":
            newExpression = "0";
            break;
        case "⌫":
            newExpression = expression.slice(0,-2)
            break;
        case "=":
            newExpression = solution(expression).toString();
            break;
        default:
            newExpression = expression;
    }
    setter(newExpression)



}

export default expressionChangeHandler;