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

    setInfo(data: any, product: { sku: string, name?: string, img?: string, buttonText?: string }) {
        this.name.text(product.name || "Name");
        this.img.set("src", product.img || "").set("alt", "Image");
        this.button.text(product.buttonText || "Ver Detalhes").click(() => {
            const headline = (data["headlines"] as any[]).find(({sku}) => sku === product["sku"]);
            const modal = new Modal(
                Z("h1").text(product.name || ""),
                Z("div").children(
                    ...headline.headline.map((h: string) => Z("p").text(h)),
                ),
                Z("div").children(
                    ...headline.post_text_paragraphs.map((h: string) => Z("p").text(h)),
                ),
            ).style("primary")
            document.body.appendChild(modal.element);
        });
        return this;
    }


}
