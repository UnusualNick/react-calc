import CalcButton from "./CalcButton";
import React from "react";
import {useRecoilValue} from "recoil";
import themeState from "../utils/atoms/themeAtom";

export function SpecialButtonsPanel() {
    const {hoveredColor, specialButtonColor} = useRecoilValue(themeState)
    return(
        <div className={"special-buttons-wrapper grid grid-cols-2 gap-x-[3vw]"}>
            <div>
                <CalcButton
                    buttonValue={"C"}
                    color={specialButtonColor}
                    hoveredColor={hoveredColor}
                />
            </div>

            <div>
                <CalcButton
                    buttonValue={"⌫"}
                    color={specialButtonColor}
                    hoveredColor={hoveredColor}
                />
            </div>
        </div>
    );
}

export default SpecialButtonsPanel