import Z, { ZeyoAs } from "zeyo";
import LayoutContainerSection from "../../../../componentes/layoutContainer/section";
import App from "../../../../app";
import style from "./style.module.css"

export default class Hero extends LayoutContainerSection {
    constructor(app: App){
        super()
        this.class(style.hero).children(
            Z("h1").text("Every thing is working greate 😀👍"),
            Z("h2").text("Every thing is working greate 😀👍"),
            Z("h3").text("Every thing is working greate 😀👍"),
            Z("h4").text("Every thing is working greate 😀👍"),
            Z("p").text("Every thing is working greate 😀👍"),
            Z("b").text("Every thing is working greate 😀👍"),
            Z("i").text("Every thing is working greate 😀👍"),
        )
    }
}