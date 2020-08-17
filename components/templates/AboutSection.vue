<template>
  <div class="works-section">
    <section-title title="ABOUT" />
    <description desc="制作の記録です。" />
  </div>
</template>

<script>
import SectionTitle from '~/components/atoms/text/SectionTitle.vue'
import Description from '~/components/atoms/text/Description.vue'

export default {
  components: {
    SectionTitle,
    Description
  }
}
</script>

<style lang="scss" scoped>
.works-section {
  background: #ffffff;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.col {
  margin: 6rem;
  margin-top: 4rem;
}
</style>
