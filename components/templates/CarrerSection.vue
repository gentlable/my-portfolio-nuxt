<template>
  <div class="carrer-section bg-black">
    <section-title title="Carrer" />
    <div class="row">
      <job
        class="col"
        desc1="main job"
        desc2=
          "通信事業者向け業務オペレータ支援システム
          ネットワーク支援システム開発

          Java: Seasar2, (Spring Boot)
          JS, TS: AngularJS, jQuery
          DB: Oracle"
      />
      <job
        class="col col-reverse"
        desc1="side job"
        desc2=
          "複業

          HP制作, VBAマクロ
          JS:  NuxtJS
          PHP: Wordpress, Laravel
          DB: firebase, MySQL"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/atoms/text/SectionTitle.vue'
import Description from '~/components/atoms/text/Description.vue'
import Job from '~/components/atoms/card/Job.vue'

export default {
  components: {
    SectionTitle,
    Description,
    Job
  }
}
</script>

<style lang="scss" scoped>
.carrer-section {
  align-items: center;
  justify-content: center;
  height: 100vh;
  .section-title {
    margin: auto;
    padding-top: 20px;
  }
  .row {
    height: 70vh;
    flex-direction: column;
    .col {
      flex-direction: row;
    }
  }
}

@media screen and (min-width: 768px) {
.carrer-section {
  .section-title {
  }
  .row {
    .col-reverse {
      flex-direction: row-reverse;      
    }
  }
}
}

@media screen and (max-width: 768px) {
.carrer-section {
  .section-title {
  }
  .row {
    flex-direction: column;
    margin-top: 5vh;
    height: 80vh;
    flex-wrap: nowrap;
    .col {
      flex-direction: column;
      max-height: 40%;
    }
  }
}

}

</style>
