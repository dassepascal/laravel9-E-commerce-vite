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
const addToCart = () => {
  console.log('added')
}
</script>
