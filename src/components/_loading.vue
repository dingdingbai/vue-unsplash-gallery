<template lang="pug">
._loading
</template>

<script>
export default {
}
</script>

<style lang="stylus">
._loading
  border-radius: 50%;
  border: 5px solid #f3f3f3
  border-top: 5px solid #333
  width: 30px
  height: 30px
  animation: spin 2s linear infinite;
  margin: 120px auto 0

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
