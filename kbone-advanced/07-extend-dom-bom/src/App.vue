<template>
  <div>
    hello, kbone!
    <a href="/a" target="_blank">进入page1页面</a>
  </div>
</template>

<script>
export default {
  mounted() {
    window.location.testFunc()
  }
}
</script>