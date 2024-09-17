<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { i18nApplication, changeLanguage, type AvailableLanguages } from '@/i18n/i18n';

const language: Ref<AvailableLanguages> = ref('br');
const change = ()=> {
    if(i18nApplication.global.locale.value == 'br'){
        language.value = 'en';
        changeLanguage('en');
    }
    else{
        language.value = 'br';
        changeLanguage('br');
    }
}
</script>

<template>
    <header class="flex flex-row align-items-center justify-content-start">
        <img src="/build-a-bot-logo.png" alt="robot logo">
        <nav class="ml-5">
            <RouterLink class="m-4" to="/">Home</RouterLink>
            <RouterLink class="m-4" to="/build">Build</RouterLink>
            <RouterLink class="m-4" to="/cart">Cart</RouterLink>  
            <img id="flag" :src="`/${language}.png`" @click="change">
        </nav>
    </header>
</template>

<style scoped lang="scss">

#flag{
    height: 2.5rem;
    width: 3.5rem;
    cursor: pointer;
}

header{
    height: 5rem;
    width: 40rem;
    max-width: 100%;

    img{
        margin-left: 4rem;
        height: 4rem;
    }
    a{
        text-decoration: none;
        font-size: 1.5rem;
        color: var(--app-dark-text-color);
    }
    .router-link-exact-active{
        font-weight: bold;
    }
}

</style>