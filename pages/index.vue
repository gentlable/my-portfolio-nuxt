<template>
  <div>
    <title-section />
    <!--
    <works-section />
    <about-section />
    <test-section />
    -->
    <div class="container">
      タイトル:{{ posts.title }}
      <p v-html="posts.body" />
    </div>
  </div>
</template>

<script lang="ts">
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
  data() {
    return {
      posts: 'default'
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      'https://shingo_hp.microcms.io/api/v1/blog',
      {
        headers: {
          'X-API-KEY': '7103bff2-a42e-447e-a315-ed1020bcb61c'
        }
      }
    )
    return {
      posts: data.contents[0]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
