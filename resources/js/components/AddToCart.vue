

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
const { add } =useProduct();

const productId = defineProps(['productId']);

var emitter = require('tiny-emitter/instance');
//var emitter = new Emitter();

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
