import { ZeyoAs } from "zeyo";
import style from "./style.module.css"

export default class LayoutContainer extends ZeyoAs<"main"> {
    constructor(){
        super("main")
        this.class(style.grid)
    }
}