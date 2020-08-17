<template>
  <div>
    <title-section />
    <!--
    <works-section />
    <about-section />
    <test-section />
    -->
  </div>
</template>

<script lang="ts">
import TitleSection from '~/components/templates/TitleSection.vue'
import WorksSection from '~/components/templates/WorksSection.vue'
import AboutSection from '~/components/templates/AboutSection.vue'
import TestSection from '~/components/templates/TestSection.vue'

export default {
  components: {
    TitleSection,
    WorksSection,
    TestSection,
    AboutSection
  }
}
</script>

<style lang="scss" scoped>
</style>
