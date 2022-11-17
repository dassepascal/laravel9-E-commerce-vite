

<template>
  <div>
    <button
     class="bg-indigo-500 text-white p-2"
     v-on:click.prevent="addToCart">
     Ajouter au panier
    </button>
  </div>
</template>

<script setup>

import useProduct from '../composables/products';
import emitter from '../eventbus';
const { add } =useProduct();

const productId = defineProps(['productId']);


const addToCart = async() => {
    await axios.get('/sanctum/csrf-cookie');// récupération du token csrf
    await axios.get('/api/user')
    .then(async(res) => {
       let cartCount = await add(productId);
       emitter.emit('cartCountUpdated', cartCount);
    })
    .catch(err => console.log(err));

}


</script>
