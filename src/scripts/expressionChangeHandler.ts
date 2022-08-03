import {Parser} from "expr-eval";
import {SetterOrUpdater} from "recoil";

const parser = new Parser()



export function expressionChangeHandler (expression: string, setter: (value: string) => void, isValid: boolean, setIsValid: SetterOrUpdater<boolean> ):void {

    let symbol = expression[expression.length-1];
    expression = expression.slice(0,-1)
    let newExpression;
    let temp;

    const solution = (expression: string) => {
        return parser.parse(expression.slice(0, expression.length-1).toString()).evaluate()
    }

    try {
        console.log(expression)
        temp = solution(expression)
        setIsValid(true)
    }
    catch (error) {
        console.log(error)
        newExpression = expression.slice(0, -1);
        setIsValid(false)
    }

    switch (symbol) {
        case "C":
            newExpression = "0";
            break;
        case "⌫":
            newExpression = expression.slice(0,-2)
            break;
        case "=":
            if(isValid) newExpression = temp;

            break;
        default:
            newExpression = expression;
    }
    setter(newExpression)



}

export default expressionChangeHandler;