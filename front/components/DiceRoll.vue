<template>
  <div class="dicelaunch" v-if="customer">
    <button
        :disabled="customer.launchs.length > 2"
        :class="{ '': customer.launchs.length > 2,  }"
        class="" @click="handleLaunchDices">
      Lancer les dés !
    </button>
    <p class="" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
const errorMessage: Ref<string | undefined> = ref(undefined)

const store = useCustomerStore()
const { customer } = storeToRefs(store)

const currentDices: Ref<{
  dices: number[]
  pastries: string,
  gain: Array<string>
} | undefined > = ref(undefined)

const handleLaunchDices = async (e: Event) => {
  e.preventDefault();
  const { data, error } = await useApi().launchDices()
  currentDices.value = data.value
  console.log(data.value)
  if(error.value) {
    errorMessage.value = error.value?.data.message as string
  }
}
</script>

<style lang="postcss" scoped>
button{
  background-color: rgb(225 29 72);
  padding: 12px;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button{
  background-color: rgb(159 18 57);
  transition: 0.3s;
  margin-bottom: 12px;
  text-align: center;
}

.dicelaunch{
  display: flex;
  flex-direction: column;
}

.dicelaunch_dicecontainer{
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
}
</style>