<template>
  <div class="cnt">
    <p>I am env</p>
    <p>envinfo: {{envinfo}}</p>
  </div>
</template>

<script>
export default {
  name: 'ENV',
  computed: {
    envinfo() {
      if (process.env.isMiniprogram) {
        return 'in miniprogram'
      } else {
        return 'in web'
      }
    }
  }
}
</script>

<style>
.cnt {
  width: 100%;
  text-align: center;
}
</style>