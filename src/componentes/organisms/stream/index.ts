import App from "../../../app";
import LayoutContainerBreakout from "../../layoutContainer/breakout";
import Mensagem from "../mensagem";
import style from "./style.module.css";

const mensagens = [
    {
        products: [
            {
                img: "https://i.imgur.com/7y0v8rV.png",
                name: "Promoção 1",
            },
            {
                img: "https://i.imgur.com/7y0v8rV.png",
                name: "Promoção 2",
            },
            {
                img: "https://i.imgur.com/7y0v8rV.png",
                name: "Promoção 3",
            }
        ]
    },
    {
        products: [
            {
                img: "https://i.imgur.com/7y0v8rV.png",
                name: "Promoção 1",
            },
            {
                img: "https://i.imgur.com/7y0v8rV.png",
                name: "Promoção 2",
            },
            {
                img: "https://i.imgur.com/7y0v8rV.png",
                name: "Promoção 3",
            }
        ]
    }
]
export default class Stream extends LayoutContainerBreakout<"div"> {
    constructor(private app: App) {
        super("div");
        const config = { childList: true };
        const callback: MutationCallback = this.callbackMutationObserver.bind(this);
        const observer = new MutationObserver(callback);
        observer.observe(this.element, config);
        this.class("d-grid", "jc-between").class(style.stream).children(
            ...mensagens.map(({ products }) => new Mensagem(app).setInfo(products))
        )
    }
    callbackMutationObserver(mutationsList: MutationRecord[], observer: MutationObserver) {
        for (let mutation of mutationsList) {
            if (mutation.type === "childList") {
                this.element.parentElement?.scrollTo(0, this.element.scrollHeight);
            }
        }
    };
}

