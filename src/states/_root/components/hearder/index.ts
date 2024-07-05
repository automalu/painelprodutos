import Z from "zeyo";
import App from "../../../../app";
import LayoutContainerBreakout from "../../../../componentes/layoutContainer/breakout";
import style from "./style.module.css"
const flex = {
    jcBetween: ["d-flex", "jc-between"]
}
export default class Header extends LayoutContainerBreakout<"header"> {
    constructor(app: App) {
        super("header")
        
        this.class(...flex.jcBetween).children(
            Z("div").class(style.logo).children(
                Z("img").set("src", "/_img/logo.png"),
                Z("span").children(
                    Z("h4").text("Automalu"),
                )
            ),
            Z("nav").class(...flex.jcBetween, style.nav).children(
                Z("h4").text("Home"),
                Z("h4").text("Sobre nós"),
                Z("h4").text("Dicas"),
                Z("button").text("Entrar")
            )
        )
    }
}