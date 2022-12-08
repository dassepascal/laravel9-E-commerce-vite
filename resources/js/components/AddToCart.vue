

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
import { inject } from 'vue';
import useProduct from '../composables/products';
import emitter from '../eventbus';
const { add } =useProduct();

const productId = defineProps(['productId']);
const toast = inject('toast');
 //const { getProducts}= useProduct();

const addToCart = async() => {
    
    // await getProducts();
    await axios.get('/sanctum/csrf-cookie');// récupération du token csrf
    await axios.get('/api/user')
    .then(async(res) => {
       let cartCount = await add(productId);
       console.log(cartCount);
       console.log('mis a jour quantite produit navbar');
       emitter.emit('cartCountUpdated', cartCount);
       console.log('majemitter',emitter.emit('cartCountUpdated', cartCount));
     console.log('ajout product');
       toast.success('Produit ajouté au panier.')
    })
    .catch(() => {
        toast.error('Merci de vous connecter pour ajouter un produit.')
    });

}


</script>
