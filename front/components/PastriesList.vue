<template>
  <div class="pastrylist">
    <h2 class="down">Patisseries restantes à gagner</h2>
    <div class="pastrylist__container">
      <div class="" v-for="pastrie in pastries">
        <p class="">{{ pastrie.name }}</p>
        <p class="">{{ pastrie.quantityLeft }} restants sur {{ pastrie.stock }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: pastries } = await useApi().listPastries()
</script>

<style lang="postcss" scoped>
.pastrylist{
  color: white;
  &__container{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 2%;
    grid-row-gap: 30px;
  }
}

.down{
  margin-bottom: 12px;
}
</style>