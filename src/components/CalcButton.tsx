import React from "react";
import expressionChangeHandler from "../scripts/expressionChangeHandler";
import {useRecoilState} from "recoil";
import expressionState from "../utils/atoms/expressionAtom";

function CalcButton (
    {buttonValue, color, hoveredColor}: {
        buttonValue: string,
        color: string,
        hoveredColor: string,
    }) {
    const [expression, setExpression] = useRecoilState(expressionState)
    return (
        <button
            className={"calc-button " +
                `${hoveredColor} ${color}`}
            onClick={
                () => {
                    expressionChangeHandler((expression + buttonValue), setExpression)
                }
            }
        >
            {buttonValue}
        </button>
    );
}

export default CalcButton;