<template>
  <div class="test-section">
    <div class="window">
      <div class="mes1 mes">
        mes1
      </div>
      <div class="mes2 mes">
        mes2
      </div>
    </div>
    <button @click="next = !next">▼</button>
    <!--
      <nuxt-link to="/test">
        testページへ
      </nuxt-link>
    -->
  </div>
</template>

<script lang="ts">
import Hero from '~/components/atoms/text/Hero.vue'
import SubTitle from '~/components/atoms/text/SubTitle.vue'

export default {
  components: {
    Hero,
    SubTitle
  },
  data() {
    return {
      next: false
    }
  }
}
</script>

<style lang="scss" scoped>
.test-section {
  align-items: center;
  justify-content: center;
  height: 100vh;
  .window {
    height: 50vh;
    position: relative;
    .mes {
      position: absolute;
      height: inherit;
    }
  }
}
</style>
