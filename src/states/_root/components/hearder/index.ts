import Z from "zeyo";
import App from "../../../../app";
import LayoutContainerBreakout from "../../../../componentes/layoutContainer/breakout";
import style from "./style.module.css"
export default class Header extends LayoutContainerBreakout<"header"> {
    constructor(app: App) {
        super("header")
        
        this.children(
            Z("div").class(style.logo).children(
                Z("img").set("src", "/_img/logo.png"),
                Z("p").children(
                    Z("b").text("Zeyo"),
                    Z("br"),
                    Z("i").text("Framework")
                )
            ),
        )
    }
}