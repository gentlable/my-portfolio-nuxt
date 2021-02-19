<template>
  <div class="index">
    <!--
    <header-section /> 
    -->
    <title-section />
    <about-section />
    <!--
    <works-section />
    -->
    <!--
    <contact-section />
    -->
    <!--
    <footer-section />
    -->
  </div>
</template>

<script>
import TitleSection from '~/components/templates/TitleSection.vue'
import WorksSection from '~/components/templates/WorksSection.vue'
import AboutSection from '~/components/templates/AboutSection.vue'
import TestSection from '~/components/templates/TestSection.vue'
import axios from 'axios'

export default {
  components: {
    TitleSection,
    WorksSection,
    AboutSection,
    TestSection
  }
}
</script>

<style lang="scss" scoped>
</style>
