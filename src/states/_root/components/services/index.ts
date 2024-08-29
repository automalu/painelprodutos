import Z from "zeyo";
import App from "../../../../app";
import LayoutContainerFullWidth from "../../../../componentes/layoutContainer/fullWidth";
import style from "./style.module.css"
import LayoutContainerBreakout from "../../../../componentes/layoutContainer/breakout";
import Mensagem from "../../../../componentes/organisms/mensagem";
import Stream from "../../../../componentes/organisms/stream";


export default class Services extends LayoutContainerFullWidth<"section"> {
    constructor(app: App) {
        super("section")
        
        this.class(style.services, "animated-gradient").children(
            Z("div").class(style.header).children(
                Z("h2").text("Use Nosso Stream de Promoções Aprimoradas"),
            ),
            new Stream(app)
        )
    }
    
}