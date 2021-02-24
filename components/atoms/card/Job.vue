<template>
  <div class="job row">
    <div class="desc1 col">{{ desc1 }}</div>
    <div class="desc2 col">{{ desc2 }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    desc1: {
      default: '',
      type: String
    },
    desc2: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.job {
  align-items: center;
  text-align: center;
  .desc1 {
    white-space: pre-line;
    font-size: 1.5rem;
  }
  .desc2 {
    white-space: pre-line;
  }
}

@media screen and (min-width: 768px) {
.job {
  .desc1 {
  }
  .desc2 {
  }
}

}

@media screen and (max-width: 768px) {
.job {
  flex-direction: column;
  .desc1 {
  }
  .desc2 {
  }
}
}
</style>
