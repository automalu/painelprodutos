import style from "./style.module.css"
import Button from "..";

export class PrimaryButton extends Button {
    constructor(text: string) {
        super(text)
        this.class(style.primary)
    }
}
