<template>
  <div class="hero">
    <h1>TANAKA KAZUKI</h1>
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
  font-size: 4rem;
  padding-top: 40vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: .2em;
}
</style>
