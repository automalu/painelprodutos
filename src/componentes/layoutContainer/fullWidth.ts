import { ZeyoAs } from "zeyo";
import style from "./style.module.css"

export default class LayoutContainerFullWidth<T extends keyof HTMLElementTagNameMap> extends ZeyoAs<T> {
    constructor(tagName: T){
        super(tagName)
        this.class(style["full-width"])
    }
}