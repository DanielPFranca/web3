import { Part } from "./Parts";

export const calculateTotalCost = (itemCart: ItemCart): number => {    
    return itemCart.base.cost + 
           itemCart.head.cost +
           itemCart.leftArm.cost +
           itemCart.rightArm.cost +
           itemCart.torso.cost;
}

export class ItemCart {
    head: Part = new Part();
    leftArm: Part = new Part();
    rightArm: Part = new Part();
    base: Part = new Part();
    torso: Part = new Part();
    cost: number = 0.0;

    constructor(){
        this.cost = calculateTotalCost(this);
    }
    updateCost(){
        this.cost = calculateTotalCost(this);
    }
}

export class Cart {
    robots: Array<ItemCart> = [];
    cost: number = 0.0;
}

