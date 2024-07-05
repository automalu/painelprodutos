import Z, { ZeyoAs } from "zeyo";
import LayoutContainerSection from "../../../../componentes/layoutContainer/section";
import App from "../../../../app";
import style from "./style.module.css"

export default class Hero extends LayoutContainerSection {
    constructor(app: App) {
        super()
        this.class(style.hero).children(
            Z("div").class(style.text).children(
                Z("div").children(
                    Z("h1").text("Perdida nunca mais, automatize seu faturamento"),
                    Z("h4").text("Deixe de perder vendas, aqui vamos te ajudar a conquistar desde sua primeira venda até automatizar suas tarefas."),
                ),
                Z("div").children(
                    Z("button").class("calltoaction").text("Comece agora"),
                    Z("div").class("d-flex", "gap-m", style.socialproof).children(
                        Z("div").class("d-flex", style.profiles).children(
                            Z("img").set("src", "/_img/perfil.jpg"),
                            Z("img").set("src", "/_img/perfil.jpg"),
                            Z("img").set("src", "/_img/perfil.jpg"),
                        ),
                        Z("a").set("href", "#socialproof").text("+ 1 mil influenciadores estão usando todos os dias"),
                    )
                )
            ),
            Z("div").class(style.image).children(
                Z("div").class(style.esfera).HTML(
                    `<svg height="100%" width="100%">
                        <defs>
                          <linearGradient id="grad1" gradientTransform="rotate(90)">
                            <stop offset="0%" stop-color="#950094"></stop>
                            <stop offset="100%" stop-color="#5E1CC8"></stop>
                          </linearGradient>
                        </defs>
                        <circle cx="50%" cy="60%" r="40%" fill="url(#grad1)"></circle>
                        Sorry, your browser does not support inline SVG.
                    </svg>`
                ),
                Z("img").set("src", "/_img/guria_empolgada_celular.png").set("alt", "garota feliz com celular na mão, comemorando sua venda"),
            )
            /* Z("h2").text("Every thing is working greate 😀👍"),
            Z("h3").text("Every thing is working greate 😀👍"),
            Z("b").text("Every thing is working greate 😀👍"),
            Z("i").text("Every thing is working greate 😀👍"), */
        )
    }
}