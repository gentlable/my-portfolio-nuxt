<template>
  <div class="index">
    <!--
    <header-section /> 
    -->
    <title-section />
    <about-section />
    <works-section />
    <apps-section />
    <carrer-section />
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
import AboutSection from '~/components/templates/AboutSection.vue'
import WorksSection from '~/components/templates/WorksSection.vue'
import AppsSection from '~/components/templates/AppsSection.vue'
import CarrerSection from '~/components/templates/CarrerSection.vue'
import TestSection from '~/components/templates/TestSection.vue'
import axios from 'axios'

export default {
  components: {
    TitleSection,
    AboutSection,
    WorksSection,
    AppsSection,
    CarrerSection,
    TestSection
  }
}
</script>

<style lang="scss" scoped>
</style>
