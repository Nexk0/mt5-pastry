<script setup lang="ts">
const store = useCustomerStore()
const { customer } = storeToRefs(store)

</script>

<template>
  <div class="pastry">
    <UserPrices class="UserPrices" v-if="customer?.launchs.length === 3"/>
      <div class="pastry__container">
        <h1>Tentez votre chance et gagnez des patisseries</h1>
        <DiceRoll />
        <PreviousDiceRollContainer />
        <PastriesList />
      </div>
  </div>
</template>

<style lang="postcss">
.pastry{
  color: white;
  width: 100vw;
  height: 100vh;
  background-color: #453E65;
  &__container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1{
      font-weight: bold;
      font-size: 2.4rem;
      margin-bottom: 24px;
    }
  }
}

.UserPrices{
  position: relative;
  z-index: 50;
}
</style>
