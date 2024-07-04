import App from "../../app";
import LayoutContainer from "../../componentes/layoutContainer";
import Header from "./components/hearder";
import Hero from "./components/hero";

export default class RootPage extends LayoutContainer {
    constructor(app: App){
        super()
        this.children(
            new Header(app),
            new Hero(app)
        )
    }
}