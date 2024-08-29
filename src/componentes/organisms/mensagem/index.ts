import style from "./style.module.css";
import Card from "../../atoms/card";
import App from "../../../app";
import Product from "../product";

export default class Mensagem extends Card {
    constructor(private app: App) {
        super();
        this.class(style.msg, "d-flex", "gap-g", "ac-start").style("primary");
    }

    setInfo(data: any, products: any[]) {
        this.children(
            ...products.map((sku) => {
                const product = (data["products"] as any[]).find(({ sku }) => sku === sku);
                return new Product(this.app).setInfo(data, product).style("inside")
            })
        )
        return this;
    }
}
