import { Item } from "./item";

export interface Girl {
    id: number;
    name: string;
    img: string;
    img_after: string;
    distracted: boolean;
    panties_id: number;
    items: Item[];
    note: string;
}
