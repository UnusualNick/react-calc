import CalcButton from "./CalcButton";
import React from "react";
import {useRecoilValue} from "recoil";
import symbolsState from "../utils/atoms/symbolsAtom";
import themeState from "../utils/atoms/themeAtom";

function CommonButtonsPanel () {
    const {symbols} = useRecoilValue(symbolsState)
    const {commonButtonColor, hoveredColor} = useRecoilValue(themeState)
    return(
        <div className={"buttons flex items-start justify-centre "}>
            <div className={"number-buttons p-[0px] m-[0px] grid grid-cols-5 gap-x-[3vw] gap-y-[1vh]"}>

                {symbols.map((symbol: string, index: number) =>
                    <CalcButton
                        key={symbol}
                        buttonValue={symbol}
                        color={commonButtonColor}
                        hoveredColor={hoveredColor}
                    />
                )}
            </div>
        </div>
    )
}

export default CommonButtonsPanel;