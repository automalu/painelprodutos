import Z from "zeyo";
import App from "../../../../app";
import LayoutContainerFullWidth from "../../../../componentes/layoutContainer/fullWidth";
import style from "./style.module.css"
import LayoutContainerBreakout from "../../../../componentes/layoutContainer/breakout";

export default class Services extends LayoutContainerFullWidth<"section"> {
    constructor(app: App) {
        super("section")
        this.class(style.services, "animated-gradient").children(
            Z("div").class(style.header).children(
                Z("h2").text("O que faremos por você:"),
            ),
            new LayoutContainerBreakout("div").class("d-flex", "jc-between").children(
                Z("div").class("d-flex", "gap-m", style.card).children(
                    Z("img").set("src", "/_img/Star-struck.png"),
                    Z("div").class("d-grid", "gap-m").children(
                        Z("h3").text("Conteúdos aprimorados"),
                        Z("p").text("Conteúdos completos de fácil utilização para você divulgar em suas redes sociais."),
                        Z("a").set("href", "#").text("Ver mais")
                    )
                ),
                Z("div").class("d-flex", "gap-m", style.card).children(
                    Z("img").set("src", "/_img/Sunglasses-face.png"),
                    Z("div").class("d-grid", "gap-m").children(
                        Z("h3").text("Posts Automatizados"),
                        Z("p").text("Deixe de perder tempo com: fazer artes, headlines, abrir app para postar."),
                        Z("a").set("href", "#").text("Ver mais")
                    )
                ),
                Z("div").class("d-flex", "gap-m", style.card).children(
                    Z("img").set("src", "/_img/Kissing-heart.png"),
                    Z("div").class("d-grid", "gap-m").children(
                        Z("h3").text("Respostas automaticas"),
                        Z("p").text("Responde tanto a conversas como a comentários"),
                        Z("a").set("href", "#").text("Ver mais")
                    )
                ),
            )
        )
    }
}