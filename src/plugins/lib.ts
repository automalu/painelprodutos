export class Root {
    root: HTMLElement
    constructor(){
        this.root = document.querySelector("#root")!
    }
}
export type ZeyoAppConstructor<T = Root> = new (...args: any[]) => T;