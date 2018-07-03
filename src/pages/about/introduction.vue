<template>
  <div>
    <Header :name="headerName"/>
    <div class="m-body">
      <div class="guide-content" v-html="newsContent"></div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'Introduction',
  components: {Header},
  data () {
    return {
      headerName: '帮助中心',
      newsContent: ''
    }
  },
  methods: {
    getContent: function (id) {
      let _self = this
      this.$axios.get('/tools/user_ajax.ashx', {action: 'aboutContent', id: id}, function (response) {
        if (response.status >= 200 && response.status < 300) {
          _self.newsContent = response.data
        } else {
          console.log(response.message)
        }
      })
    }
  },
  created: function () {
    this.getContent(this.$route.params.id)
  }
}
</script>
<style>
.guide-content{
  margin: 20px;
  background: #fff;
  border-radius: 10px;
  padding:20px;
  font-size:28px;/*px*/
}
</style>
