<template>
  <div class="footer clearfix">
    <a href="/index.html" @click="nownav = 1" :class="{active : nownav === 1}">
      <i class="i1"></i><span>首页</span>
    </a>
    <a href="/about.html" @click="nownav = 2" :class="{active : nownav === 2}">
      <i class="i5"></i><span>自选</span>
    </a>
    <a href="/trade/dayTrade.html" @click="nownav = 3" :class="{active : nownav === 3}">
      <i class="i2"></i><span>申请资金</span>
    </a>
    <a href="/trade/myTrade.html" @click="nownav = 4" :class="{active : nownav === 4}">
      <i class="i3"></i><span>交易</span>
    </a>
    <a href="/personcenter/personcenterIndex.html" @click="nownav = 5" :class="{active : nownav === 5}">
      <i class="i4"></i><span>我的</span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: ['nownav']
}
</script>
<style scoped>
  .footer {
    background-color: #ffffff;
    border-top: 1px solid #b7b7b7;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    height: 100px;
    display: flex;
  }

  .footer a {
    flex: 1;
    text-align: center;
    padding: 12px 0;
  }

  .footer span {
    display: block;
    font-size: 24px; /*px*/
    color: #666666;
    line-height: 1;
  }

  .footer i {
    display: block;
    margin: 0 auto 10px;
    height: 40px;
    width: 100%;
    background: no-repeat center center;
    background-size: contain;
  }

  .footer i.i1 {
    background-image: url(/static/img/foot_icon1.png);
  }

  .footer i.i2 {
    background-image: url(/static/img/foot_icon2.png);
  }

  .footer i.i3 {
    background-image: url(/static/img/foot_icon3.png);
  }

  .footer i.i4 {
    background-image: url(/static/img/foot_icon4.png);
  }

  .footer i.i5 {
    background-image: url(/static/img/foot_icon5.png);
  }

  .footer a.active span {
    color: #c80006;
  }

  .footer a.active i.i1 {
    background-image: url(/static/img/foot_icon1_h.png);
  }

  .footer a.active i.i2 {
    background-image: url(/static/img/foot_icon2_h.png);
  }

  .footer a.active i.i3 {
    background-image: url(/static/img/foot_icon3_h.png);
  }

  .footer a.active i.i4 {
    background-image: url(/static/img/foot_icon4_h.png);
  }

  .footer a.active i.i5 {
    background-image: url(/static/img/foot_icon5_h.png);
  }
</style>
