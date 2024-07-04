import { Childrens, Options, StateBase, StateOptions } from "../../plugins/navigation/state"
import ComponenteGenerico from "../propriedades/componente"
import ParametrosGenerico from "../propriedades/parametrosGenerico"
import RootPage from "./page"

export default class Root extends ComponenteGenerico(ParametrosGenerico(StateBase)){
    childrens: Childrens
    options: Options = {}
    static path = ""
    previous = undefined
    title = "Root"
    name = "root"
    icons: StateOptions = [{
        title: "Conta",
        type: "route",
        route: "/account",
        param: {}
    }]
    page = RootPage
    constructor(childrens: Childrens, page?: any) {
        super()
        this.childrens = childrens
    }

    async setup() {
        
    }
    setParametros(route: string[]): string[] {
        return []
    }
    parametros: {[key: string]: string} = {}
}