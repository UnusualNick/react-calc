import {Parser} from "expr-eval";
import {SetterOrUpdater} from "recoil";

const parser = new Parser()



export function expressionChangeHandler (expression: string, setter: (value: string) => void, isValid: boolean, setIsValid: SetterOrUpdater<boolean> ):void {

    let fullExpression = expression
    let symbol = expression[expression.length-1];
    expression = expression.slice(0,-1)
    let newExpression;
    let temp;

    const solution = (expression: string) => {
        return parser.parse(expression.slice(0, expression.length-1).toString()).evaluate()
    }

    // console.log("fullExpression : ", fullExpression)

    try {
        // console.log("expression : ", expression)
        temp = solution(fullExpression)
        setIsValid(true)
    }
    catch (error) {
        // console.log("error : ", error)
        newExpression = expression;
        setIsValid(false)
    }

    switch (symbol) {
        case "C":
            newExpression = "0";
            break;
        case "⌫":
            newExpression = expression.slice(0,-1)
            break;
        case "=":
            if(isValid) {
                if(temp + symbol !== "undefined") {
                    newExpression = temp;
                }
                else {
                    newExpression = "0"
                }
            }
            else {

            }

            break;
        default:
            newExpression = fullExpression;
    }
    setter(newExpression)



}

export default expressionChangeHandler;