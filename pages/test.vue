<template>
  <div>
    <h1 class="text-light"></h1>
    <script type="text/javascript" src="js/css.js"></script>
    <!--
    <script type="text/javascript" src="js/ongaq.js"></script>
    <script type="text/javascript" src="js/sound_script.js"></script>
    <button id="button" type="button" name="button">音楽スタート</button>
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
    TestSection,
    AboutSection
  },
  head() {
    return {
      script: [
        {
          src: 'https://code.jquery.com/pep/0.4.3/pep.js'
        }
      ]
    }
  },
  methods: {
    test() {
      console.log('aa')
    }
  }
}
</script>

<style lang="scss" scoped>
body, html {
  background: rgb(255, 255, 255); margin: 0;
height: 200vh;}

canvas { position: absolute; }

.text {
  position: absolute;
  left: 40%;
  top: 45%;
  font-family: Roboto;
  color: rgb(255,255,255);
  user-select: none;
}

.text-light {
  position: absolute;
  left: 40%;
  top: 45%;
  font-family: Roboto;
  color: rgb(255,0,0);
  mix-blend-mode: difference;
  z-index: 100;
  user-select: none;
}
</style>
