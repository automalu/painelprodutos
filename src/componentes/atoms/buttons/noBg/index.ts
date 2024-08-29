import Button from "..";
import style from "../style.module.css"

export default class ButtonNoBG extends Button {
    style = style
    constructor(text: string) {
        super(text)
        this.text(text).class(style['no-bg']).set("type", "button")
    }
}