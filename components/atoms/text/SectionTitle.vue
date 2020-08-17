<template>
  <div class="section-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 3rem;
  padding-top: 3.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: .2em;
}
</style>
