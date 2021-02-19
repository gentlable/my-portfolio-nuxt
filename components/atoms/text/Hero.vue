<template>
  <div class="hero">
    <h1>Go's portfolio</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class ApplicantTab extends Vue {
}
</script>

<style lang="scss" scoped>
.hero {
  width: fit-content;
  h1 {
    font-family: '8bitFontEn';
    font-size: 4rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 2px;
  }
}
@media screen and (min-width: 768px) {
.hero {
  h1 {
    font-size: 4rem;
  }
}
}
@media screen and (max-width: 768px) {
.hero {
  h1 {
    font-size: 2rem;
  }
}
}
</style>
