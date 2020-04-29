<template>
  <div class="cnt">
    <Header></Header>
    <div>url: {{url}}</div>
    <button @click="onClickBack">回到上一页</button>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      url: '',
    }
  },
  created() {
    window.addEventListener('wxload', query => console.log('page4 wxload', query))
    window.addEventListener('wxshow', () => console.log('page4 wxshow'))
    window.addEventListener('wxready', () => console.log('page4 wxready'))
    window.addEventListener('wxhide', () => console.log('page4 wxhide'))
    window.addEventListener('wxunload', () => console.log('page4 wxunload'))
  },
  mounted() {
    this.url = window.location.href
  },
  methods: {
    onClickBack() {
      if (process.env.isMiniprogram) {
        wx.navigateBack()
      }
    },
  },
}
</script>

<style>
.cnt {
  margin-top: 20px;
}
a, button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}
</style>
