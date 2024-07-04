import { Childrens, Options, StateBaseConstructor } from "../../plugins/navigation/state";

export default function Childrens<Base extends StateBaseConstructor>(base: Base) {
    return class extends base {
        childrens: Childrens = {
        }
        options: Options = {}
    }
}