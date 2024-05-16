<template>
  <div class="" :class="isWin ? '' : ''">
    <div class="">
      <p class="dicerolled" :class="isWin ? '' : ''">Lancé {{ index + 1 }} : <span class="">{{ isWin ? 'Gagné' : 'Perdu' }}</span></p>
      <div class="dicecontainer">
        <Dice :number="dice" v-for="dice in launch.dices" />
      </div>
      <div v-if="launch.gain.length" class="">
        <p :class="isWin ? '' : ''" class="">Vos gains</p>
        <p class="down" v-for="gain in launch.gain">{{ gain }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { launch, index } = defineProps<{
  index: number,
  launch: {
    dices: number[]
    pastries: number
    gain: Array<string>
  }
}>()

const isWin = ref(launch.pastries > 0 ? true : false)
</script>

<style lang="postcss" scoped>
.dicecontainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.dicerolled{
  text-align: center;
  margin-bottom: 8px;
}

.down{
  margin-bottom: 24px;
}
</style>