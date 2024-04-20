export interface Effect{
    name: string;
    health: number;
    mana: number;
    note: string;
}

export interface Usable{
    name: string;
    note: string;
    img: string;
    distraction: boolean;
}

export interface Item {
    id: number;
    name: string;
    img: string;
    description: string;
    color: string;
    usable: Usable[];
    note: string;
    effects: Effect[];
    position: string;
}
