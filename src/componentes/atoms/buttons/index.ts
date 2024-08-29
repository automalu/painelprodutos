import { ZeyoAs } from "zeyo";
import style from "./style.module.css"
import { BasicStyleTypes } from "../../StyleTypes";

export default class Button extends ZeyoAs<"button"> {
    constructor(text: string) {
        super("button")
        this.text(text).class(style.button)
    }

    style(type: keyof BasicStyleTypes): Button {
        return this.class(style[type]);
    }
}