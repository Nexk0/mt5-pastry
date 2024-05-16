<template>
  <div class="">
    <p  class="voslance">Vos lancés</p>
    <div class="">
      <p v-if="customer?.launchs.length === 0">Vous n'avez encore aucun lancé</p>
      <PreviousRoll v-else v-for="launch, index in customer.launchs" :launch="launch" :index="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useCustomerStore()
const { customer } = storeToRefs(store)
</script>

<style lang="postcss" scoped>
.voslance p{
  text-align: center;
}

.voslance{
  text-align: center;
  font-weight: bold;
}
</style>