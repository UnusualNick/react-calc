import {atom} from "recoil";

const themeState = atom({
    key: "themeState",
    default: {
        "commonButtonColor": "common-calc-button",
        "specialButtonColor": "special-calc-button",
        "hoveredColor": "hovered-calc-button",
        "highlightedText": "highlighted-text"
    }
})

export default themeState