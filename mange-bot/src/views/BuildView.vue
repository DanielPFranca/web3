<script setup lang="ts">
  import { PartsResponse, type PartsResponseType, Part } from '@/models/Parts';
  import { getParts } from '@/services/part.service';
  import { type Ref, ref, reactive } from 'vue';
  import PartSelector from '@/components/PartSelector.vue';
  import { ItemCart } from '@/models/Cart';
  import { useCart } from '@/stores/cart';

  const cart = useCart();
  
//   try{
//       const parts = await getParts();
//   }
//   catch(error){
//     console.error(error)
//   }

  const availableParts: Ref<PartsResponse> = ref(new PartsResponse());

  const itemCart = new ItemCart();  
  const selectedParts = reactive<ItemCart>(itemCart);
  
  //opção criando variáveis individualmente
  /*const selectedHead: Ref<Part|null> = ref(null);
  const selectedLeftArm: Ref<Part|null> = ref(null);
  const selectedRightArm: Ref<Part|null> = ref(null);
  const selectedTorso: Ref<Part|null> = ref(null);
  const selectedBase: Ref<Part|null> = ref(null);*/

getParts()
    .then(parts=>{
      availableParts.value = parts;
      const { heads, arms, torsos, bases } = parts;

      selectedParts.base = bases[0];
      selectedParts.head = heads[0];
      selectedParts.leftArm = arms[0];
      selectedParts.rightArm = arms[0];
      selectedParts.torso = torsos[0];

    })
    .catch(error=>console.error(error));
  
const addCart = ()=> {
  console.log("Adicionado no carrinho os seguintes itens:");
  console.log("Parts: ", selectedParts); 

  selectedParts.updateCost();
  cart.addCart(selectedParts);
} 

</script>

<template>
    <div>
        <h1 class="text-center mb-2">{{ $t('BUILD.TITLE') }}</h1>        
        <section class="top-row">
          <PartSelector
          :parts="availableParts.heads"
          position="top"
          v-model="selectedParts.head"          
          />
        </section>
        <section class="middle-row">
          <PartSelector
          :parts="availableParts.arms"
          position="left"
          v-model="selectedParts.leftArm"
          />
          <PartSelector
          :parts="availableParts.torsos"
          position="center"
          v-model="selectedParts.torso"
          />
          <PartSelector
          :parts="availableParts.arms"
          position="right"
          v-model="selectedParts.rightArm"
          />
        </section>
        <section class="bottom-row">
          <PartSelector
          :parts="availableParts.bases"
          position="bottom"
          v-model="selectedParts.base"
          />
        </section> 
        <div class="flex flex-row align-items-center justify-content-center">
          <button @click="addCart" id="add-cart" class="mt-4 app-dark-button">
            {{ $t('BUILD.ADD_CART') }}
          </button>
        </div>       
      </div>
      
</template>

<style scoped lang="scss">

#add-cart{
  padding: 0.5rem 1rem;
}

.top-row{
  display: flex;
  justify-content: space-around;
}

.middle-row{
  display: flex;
  justify-content: center;
}

.bottom-row{
  display: flex;
  justify-content: space-around;
}


</style>