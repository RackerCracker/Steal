import { Item } from "./item";

export interface Location {
    id: number;
    name: string;
    img: string;
    items: Item[];
}
