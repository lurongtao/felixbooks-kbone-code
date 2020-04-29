<template>
  <div class="title">
    hello, {{info}}!
  </div>
</template>

<script>
export default {
  computed: {
    info() {
      if (process.env.isMiniprogram) {
        return 'miniprogram'
      } else {
        return 'web'
      }
    }
  }
}
</script>

<style lang="css">
.title {
  font-size: 1rem;
  color:brown;
}
</style>