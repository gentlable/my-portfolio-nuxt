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
  width: fit-content;
  h1 {
    font-family: '8bitFontEn';
    font-size: 3rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 2px;
    padding-left: 10px;
  }
}

@media screen and (min-width: 768px) {
.section-title {
  h1 {
  }
}
}
@media screen and (max-width: 768px) {
.section-title {
  h1 {
    font-size: 2.5rem;
  }
}
}

</style>
