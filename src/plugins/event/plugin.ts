import { ZeyoAppConstructor } from "../lib";
interface eventsTypes {
    "click": ["product", "details"]
}
export default function EventPlugin<Base extends ZeyoAppConstructor>(base: Base) {
    return class extends base {
        event(data: any, type: string, ...topics: string[]){
            
        }
    }
}