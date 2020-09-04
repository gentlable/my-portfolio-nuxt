<template>
  <div class="container">
    <main class="main">
      <h1 class="title">{{ title }}</h1>
      <p class="publishedAt">{{ publishedAt }}</p>
      <div class="post" v-html="body"></div>
    </main>    
  </div>
</template>

<script>
import axios from 'axios'
import { fetchCmsData } from '~/lib/cms'

export default {
  asyncData({ params }) {
    return fetchCmsData(params.id)
  }
}
</script>
