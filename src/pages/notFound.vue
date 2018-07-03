<template>
  <div>
    <Header/>
    <div class="m-body m-body-header">
      <div class="not-found">
        <img src="/static/img/404.jpg"/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  data () {
    return {}
  },
  components: {Header}
}
</script>
<style scoped>
  .not-found{
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .not-found img{
    max-width: 90%;
    margin: 0 auto;
  }
</style>
