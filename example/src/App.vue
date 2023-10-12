<template>
  <div>
    <test-button @click="onClick" type="primary">button</test-button>
    <test-input v-model="value">
      <template #prepend>Http://</template>
    </test-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('test')
const onClick = () => {
  console.log('click')
}
</script>