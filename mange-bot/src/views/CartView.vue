<script setup lang="ts">
import { useCart } from '@/stores/cart';

const cart = useCart();

</script>

<template>
    <div>
        <h1>Cart Page!</h1>
        <table>
            <thead>
                <th>Item</th>
                <th>Head</th>
                <th>Torso</th>
                <th>Base</th>
                <th>Left Arm</th>
                <th>Right Arm</th>
                <th>Ação</th>    
                <th>Custo</th>    
            </thead>
            <tbody>
                <tr v-for="(robot,index) in cart.robots" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ robot.head.id }} - {{ robot.head.title }}</td>
                    <td>{{ robot.torso.id }} - {{ robot.torso.title }}</td>
                    <td>{{ robot.base.id }} - {{ robot.base.title }}</td>                    <td>2 - Grabber</td>
                    <td>{{ robot.leftArm.id }} - {{ robot.leftArm.title }}</td> 
                    <td>{{ robot.rightArm.id }} - {{ robot.rightArm.title }}</td> 
                    <td>{{ robot.cost }}</td> 
                    <td><button @click="cart.removeRobot(index)">Excluir</button></td>
                </tr>
                <tr>
                    <td colspan="5"><strong>Valor total:</strong></td>
                    <td><strong>{{ cart.cost }}</strong></td>
                </tr>
            </tbody>

        </table>
    </div>
</template>