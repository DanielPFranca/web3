<script setup lang="ts">
import { useRouter } from 'vue-router';
//import router from '@/router';

const router = useRouter();

//const goToBuild = ()=> router.push('/build');
</script>

<template>
 <div class="flex flex-row align-items-center justify-content-evenly ">
  <section class="flex flex-column align-items-center">
    <h1>{{ $t('HOME.TITLE') }}</h1>
    <button id="order" @click="router.push('/build')" 
    class="mt-4 app-dark-button">{{ $t('HOME.ORDER') }}</button>
  </section>

  <section>
    <img src="/big-bot.png" alt="robot">
  </section>
 </div>
</template>

<style scoped lang="scss">
    h1{
        font-size: 5rem;
        width: 25rem;
        text-align: center;
    }
    #order{
        height: 3.2rem;
        width: 20rem;    
        border-radius: 2.5rem;    
    }
</style>