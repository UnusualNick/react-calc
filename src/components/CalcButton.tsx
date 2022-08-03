import React from "react";
import expressionChangeHandler from "../scripts/expressionChangeHandler";
import {useRecoilState} from "recoil";
import expressionState from "../utils/atoms/expressionAtom";
import validityAtom from "../utils/atoms/validityAtom";

function CalcButton (
    {buttonValue, color, hoveredColor}: {
        buttonValue: string,
        color: string,
        hoveredColor: string,
    }) {
    const [expression, setExpression] = useRecoilState(expressionState)
    const [isValid, setIsValid] = useRecoilState(validityAtom)
    return (
        <button
            className={"calc-button " +
                `${hoveredColor} ${color} `}
            onClick={
                () => {
                    expressionChangeHandler((expression + buttonValue), setExpression, isValid, setIsValid)
                }
            }
        >
            {buttonValue}
        </button>
    );
}

export default CalcButton;