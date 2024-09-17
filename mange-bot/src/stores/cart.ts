import { defineStore, storeToRefs } from "pinia";
import { ItemCart, Cart } from "@/models/Cart";
import { type Ref } from "vue";

export const useCart = defineStore("robot-cart",{
    state: (): Cart => ({
        robots: [],
        cost: 0.0,
    }),
    persist: true,
    actions: {
        addCart(robot: ItemCart){     
            this.robots = [
                ...this.robots,
                robot
            ] 
            //this.robots.push(robot);
            this.updateCost();
        },
        updateCost(){
            let value = 0;
            this.robots.forEach(i=>{
                value = i.cost
            })            
            this.cost = value;
        },
        removeRobot(index:number){
            this.robots.splice(index, 1);
            this.updateCost();
        }
    },
    getters: {}
})