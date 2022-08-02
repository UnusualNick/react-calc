import React from 'react';
import expressionChangeHandler from "./scripts/expressionChangeHandler";
import CommonButtonsPanel from "./components/CommonButtonsPanel";
import SpecialButtonsPanel from "./components/SpecialButtonsPanel";
import { useRecoilState } from 'recoil';
import expressionState from "./utils/atoms/expressionAtom";





function App() {
    const [expression, setExpression] = useRecoilState(expressionState)

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
                            "text-white text-[8vh] "}
                        type={"text"}
                        value={expression}
                        readOnly={false}
                        onChange={
                            (event) => {
                                expressionChangeHandler(event.target.value, (value: string) => {setExpression(value)});
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
