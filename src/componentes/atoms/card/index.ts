import { ZeyoAs } from "zeyo";
import App from "../../../app";
import style from "./style.module.css";
import { BasicStyleTypes } from "../../StyleTypes";
interface styleTypes extends BasicStyleTypes {
    "primary": string
    "inside": string
}
export default class Card extends ZeyoAs<"div">{
    constructor() {
        super("div");
        this.class(style.card)
    }

    style(type: keyof styleTypes): Card {
        return this.class(style[type]);
    }

}