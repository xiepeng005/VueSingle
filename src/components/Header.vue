<template>
  <div class="header">
    <div class="head-left">
      <a @click="goBack" class="head-back"></a>
    </div>
    <div class="head-main" v-text="name">点点聚</div>
    <div class="head-right">
      <a href="JavaScript:void(0);" class="head-refresh" onclick="relodeApp();"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  props: {
    name: {
      type: String,
      default: '点点聚'
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>
<style scoped>
  .header {
    position: fixed;
    height: 88px;
    line-height: 88px;
    background: #444348;
    left: 0;
    right: 0;
    color: #fff;
    z-index: 10;
    top: 0;
  }

  .header-transparent {
    background: none;
  }

  .header .head-left {
    position: absolute;
    left: 20px;
    height: 100%;
    z-index: 2;
  }

  .header .head-right {
    position: absolute;
    right: 20px;
    height: 100%;
    z-index: 2;
  }

  .header .head-left a,
  .header .head-right a {
    padding: 0 10px;
  }

  .header .head-main {
    position: absolute;
    left: 100px;
    right: 100px;
    text-align: center;
    font-size: 36px; /*px*/
    z-index: 1;
  }

  .header .head-back {
    background: url(/static/img/icon_back.png) 10px center no-repeat;
    background-size: auto 32px;
    height: 100%;
    width: 32px;
    display: inline-block;
  }

  .header .head-refresh {
    display: inline-block;
    background: url(/static/img/icon_refresh.png) center no-repeat;
    width: 40px;
    height: 100%;
    background-size: 40px;
  }

  .header .head-service {
    display: inline-block;
    background: url(/static/img/icon_service.png) center no-repeat;
    width: 40px;
    height: 100%;
    background-size: 40px;
  }

  .header .head-setting {
    display: inline-block;
    background: url(/static/img/icon_setting.png) center no-repeat;
    width: 40px;
    padding: 0 20px;
    height: 100%;
    background-size: 40px;
  }

  .header .head-msg {
    display: inline-block;
    background: url(/static/img/icon_msg.png) center no-repeat;
    width: 40px;
    height: 100%;
    background-size: 40px;
  }

  .header .head-link {
    display: inline-block;
    vertical-align: top;
    color: #fff;
    font-size: 24px;/*px*/
  }

  .header .head-search {
    display: inline-block;
    background: url(/static/img/icon_search.png) center no-repeat;
    width: 36px;
    height: 100%;
    background-size: 36px;
  }

  .header .head-back + .head-service {
    margin-left: -20px;
  }
</style>
