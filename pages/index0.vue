<template>
  <div class="content">
    <header>
      test
    </header>
    <main class="container">
      <div class="works">
        <div class="row">
          <div class="work col">
            <div class="img-wrapper">
              <img class="image" src="~/assets/img/works/top_pc.jpg" alt="">
            </div>
            <div class="btn-wrapper">
              <button class="card bg-primary shadow-soft text-center border-light link">
                <nuxt-link to="/test">
                  株式会社エッグシステム
                </nuxt-link>
              </button>
            </div>
          </div>
          <div class="work col">
            <div class="img-wrapper">
              <img class="image" src="~/assets/img/works/connect.png" alt="">
            </div>
            <div class="btn-wrapper">
              <button class="card bg-primary shadow-soft text-center border-light link">
                <nuxt-link to="/test">
                  JSおもちゃページへ
                </nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.content {
  background: #e6e7ee;
  .image {
    object-fit: cover;
    width: 300px;
    height: 300px;
  }
}
</style>
