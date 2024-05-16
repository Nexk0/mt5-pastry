<template>
  <div class="dice">{{ number }}</div>
</template>

<script setup lang="ts">
const { number } = defineProps<{
  number: number
}>()
</script>

<style lang="postcss" scoped>
.dice{
  border: 1px white solid;
  border-radius: 8px;
  padding: 4px 12px;
  margin-right: 12px;
}
</style>