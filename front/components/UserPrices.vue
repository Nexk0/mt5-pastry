<template>
  <div class="userprices">
    <div class="userprices__container">
      <div v-if="wonPrizes.length > 0">
        <h1>{{ customer.firstName }}, Voici tes prix :</h1>
        <h2>Prend une capture d'écran et montre le à la boulangerie où tu as gagné !</h2>
        <ul>
          <li v-for="(prize, index) in wonPrizes" :key="index">
            {{ prize }}
          </li>
        </ul>
      </div>
      <h1 v-else-if="customer.launchs.length > 0 && lostAllTimes">
        Dommage ! Retente ta chance dans quelques heures.
      </h1>
      <h1 v-else>
        Dommage ! Retente ta chance dans quelques heures.
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomerStore } from '@/stores/customer'
import { computed } from 'vue'

const { customer } = useCustomerStore()

const wonPrizes = computed(() => {
  return customer.launchs.reduce((prizes, launch) => {
    if (launch.gain.length > 0) {
      prizes.push(...launch.gain)
    }
    return prizes
  }, [])
})

const lostAllTimes = computed(() => {
  return customer.launchs.every(launch => launch.pastries === 0)
})
</script>

<style scoped lang="postcss">
.userprices{
  background-color: rgba(0, 0, 0, 0.59);
  width: 100vw;
  height: 100vh;
  &__container{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #5f00c2;
    padding: 24px 48px;
    border-radius: 24px;

    & h1{
      font-size: 2.4rem;
      font-weight: bold;
      margin-bottom: 12px;
    }

    & h2{
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 24px;
    }

    & li{
      font-size:1.6rem
    }
  }
}
</style>