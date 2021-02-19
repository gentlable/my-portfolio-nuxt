<template>
  <div class="description">
    <span>{{ desc }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    desc: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  font-family: '8bitFontEn';
  font-size: 2.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
