import React from 'react';
import expressionChangeHandler from "./scripts/expressionChangeHandler";
import CommonButtonsPanel from "./components/CommonButtonsPanel";
import SpecialButtonsPanel from "./components/SpecialButtonsPanel";
import {useRecoilState, useRecoilValue} from 'recoil';
import expressionState from "./utils/atoms/expressionAtom";
import themeAtom from "./utils/atoms/themeAtom";
import validityAtom from "./utils/atoms/validityAtom";





function App() {
    const [expression, setExpression] = useRecoilState(expressionState)
    const [isValid, setIsValid] = useRecoilState(validityAtom)
    const theme = useRecoilValue(themeAtom)
    return (
        <div className="App bg-gray-600 flex justify-center items-center min-h-screen min-w-screen overflow-y ">
            <div className={"min-w-screen px-[10vw] py-[10vh]"}>
                <div className={"flex mb-[1.5vh] bg-transparent"}>
                    <input
                        className={"bg-gray-300 " +
                            "px-[1vw] mr-[0.5vw] " +
                            "max-w-[49.25vw] min-w-[49.25vw] " +
                            "max-h-[16vh] min-h-[16vh] " +
                            "rounded-lg " +
                            " text-[8vh] " +
                            `${!isValid ? theme.highlightedText : "text-white"}`}
                        type={"text"}
                        value={expression}
                        readOnly={false}
                        onChange={
                            (event) => {
                                expressionChangeHandler(event.target.value, (value: string) => {setExpression(value)}, isValid, setIsValid);
                            }
                        }/>
                    <SpecialButtonsPanel/>
                </div>
                <CommonButtonsPanel/>
            </div>
        </div>
    );
}

export default App;
