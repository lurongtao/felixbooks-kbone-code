<template>
  <div>
    I am {{info}}
  </div>
</template>

<script>
export default {
  computed: {
    info() {
      if (process.env.isMiniprogram) {
        return 'in miniprogram'
      } else {
        return 'in web'
      }
    }
  }
}
</script>