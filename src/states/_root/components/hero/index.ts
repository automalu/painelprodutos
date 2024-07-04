import Z, { ZeyoAs } from "zeyo";
import LayoutContainerSection from "../../../../componentes/layoutContainer/section";
import App from "../../../../app";
import style from "./style.module.css"

export default class Hero extends LayoutContainerSection {
    constructor(app: App){
        super()
        this.class(style.hero).children(
            Z("h1").text("Every thing is working greate 😀👍")
        )
    }
}