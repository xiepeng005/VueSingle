<template>
  <div>
    <Header :name="headerName"/>
    <div class="m-body">
      <div class="guide-list">
        <ul>
          <li><a href="/about/introduction/483">网站风险揭示</a></li>
          <li><a href="/about/introduction/484">网站法律申明</a></li>
          <li><a href="/about/introduction/487">常见问题解答</a></li>
          <li><a href="/about/introduction/491">隐私条款</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'About',
  components: {Header},
  data () {
    return {
      headerName: '帮助中心'
    }
  }
}
</script>
<style scoped>
  .guide-list {
    background: #fff;
    margin: 20px;
    border-radius: 10px;
    padding-bottom: 20px;
  }

  .guide-list ul {
    line-height: 84px;
    color: #333;
  }

  .guide-list li {
    position: relative;
    padding: 0 30px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 28px;/*px*/
  }

  .guide-list li:after {
    content: '';
    position: absolute;
    right: 30px;
    top: 0;
    height: 84px;
    width: 14px;
    background: url(/static/img/arrow_right.png) center no-repeat;
    background-size: contain;
  }
  .guide-list li a{
    display: block;
  }
</style>
