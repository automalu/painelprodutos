import App from "../../../app";
import LayoutContainerBreakout from "../../layoutContainer/breakout";
import Mensagem from "../mensagem";
import style from "./style.module.css";

const data = {
    products: [
        {
            sku: "hhc6d486hd",
            img: "https://i.imgur.com/7y0v8rV.png",
            name: "Promoção 1",
        },
    ],
    messages: [
        {
            products: ["hhc6d486hd"],
        },
    ],
    headlines: [
        {
            "sku": "hhc6d486hd",
            "headline": [
              "🔥 Kit Omegafor Plus: Desbloqueie o Poder dos Ácidos Graxos Ómega 3 💪🏽!"
            ],
            "post_text_paragraphs": [
              "E você sabia que o consumo de ácidos graxos ômega 3 pode ser a chave para uma vida mais saudável? 🔓 Com o Kit Omegafor Plus, você tem à disposição 240 Capsulas de alta concentração de EPA e DHA, substâncias essenciais para manter níveis saudáveis de triglicerídeos!",
              "Associado a uma alimentação equilibrada e hábitos de vida saudáveis, o Omegafor Plus Ômega 3 pode ajudar a:",
              "- Reduzir os níveis de triglicerídeos",
              "- Aliviar sintomas de doenças cardíacas e cerebrais",
              "- Melhorar a saúde do coração e dos vasos sanguíneos",
              "- Apoiar o bem-estar mental e emocional",
              "Nossa recomendação é que você faça uso regular do Kit Omegafor Plus para aproveitar ao máximo os benefícios desses ácidos graxos essenciais!"
            ],
            "hashtags": [
              "#OmegaforPlus",
              "#KitDeSaúde",
              "#BenefíciosDaSaúde",
              "#Triglicerídeos",
              "#SaúdeCardiovascular",
              "#MentalHealth",
              "#Wellness"
            ]
          }
    ]
}
export default class Stream extends LayoutContainerBreakout<"div"> {
    constructor(private app: App) {
        super("div");
        const config = { childList: true };
        const callback: MutationCallback = this.callbackMutationObserver.bind(this);
        const observer = new MutationObserver(callback);
        observer.observe(this.element, config);
        this.class("d-grid", "jc-between").class(style.stream).children(
            ...data.messages.map(({ products }) => new Mensagem(app).setInfo(data, products))
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

