import Button from "..";
import Icon from "../../icons";
import { SVGmap } from "../../icons/svgs/_list";
import style from "../style.module.css"

export default class ButtonIcon extends Button {
    constructor(icon: keyof SVGmap) {
        super("")
        this.class(style['icon']).set("type", "button").children(new Icon(icon))
    }
}
