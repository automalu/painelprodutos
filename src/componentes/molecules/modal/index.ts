import { ZeyoAs } from "zeyo";
import style from "./style.module.css";
import { BasicStyleTypes } from "../../StyleTypes";
import Card from "../../atoms/card";
interface styleTypes extends BasicStyleTypes {
    "primary": string
    "botton": string
}
export default class Modal extends ZeyoAs<"div">{
    modal = new Card().class(style.modal);
    constructor(...child: Array<ZeyoAs<keyof HTMLElementTagNameMap> | string>) {
        super("div");
        this.class(style.container).children(
            this.modal.children(...child),
        ).click(e => {
            if (e.target === this.element)
                this.element.remove()
        })
    }

    style(type: keyof styleTypes){
        this.modal.style(type as any);
        return this;
    }

}