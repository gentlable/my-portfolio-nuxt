<template>
  <div class="index">
    <!--
    <header-section class="header" /> 
    -->
    <title-section class="title" />
    <!--
    <about-section class="about" />
    <works-section class="works" />
    -->
    <!--
    <contact-section class="contact" />
    -->
    <!--
    <footer-section class="footer" />
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
