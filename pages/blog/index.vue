<template>
  <div class="container">
    <div class="list-wrapper">
      <ul>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/blog/${content.id}`">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { fetchCmsTitleList } from '~/lib/cms'

export default {
  asyncData() {
    return fetchCmsTitleList()
  }
}
</script>

<style lang="scss" scoped>
</style>
