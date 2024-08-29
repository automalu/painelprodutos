import Z, { ZeyoAs } from "zeyo";
import style from "./style.module.css";
import Button from "../../atoms/buttons";
import Card from "../../atoms/card";
import { BasicStyleTypes } from "../../StyleTypes";
import App from "../../../app";
import Modal from "../../molecules/modal";

export default class Product extends Card {
    button = new Button("Ver Detalhes");
    name = Z("b");
    img = Z("img").class(style["product-img"]);
    constructor(private app: App) {
        super();
        this.class("d-grid", "gap-m").children(
            Z("div").class("d-grid", style["product-card"]).children(
                this.name,
                this.img
            ),
            this.button.style("accent")
        );
    }

    setInfo(info: { name?: string, img?: string, buttonText?: string }) {
        this.name.text(info.name || "Name");
        this.img.set("src", info.img || "").set("alt", "Image");
        this.button.text(info.buttonText || "Ver Detalhes").click(() => {
            //this.app.event("click/product/details", info);
            //this.app.modal.show()
            const modal = new Modal(
                Z("h1").text(info.name || ""),
            ).style("primary")
            document.body.appendChild(modal.element);
        });
        return this;
    }


}
