<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    const ua = navigator.userAgent
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/)
    const isMobile = isIphone || isAndroid

    if (!isMobile) {
      location.href = 'http://www.eoktop.com'
    }
  }
}
</script>

<style>
@import url('./index.css');
#app {
  width: 100%;
  min-height: 100%;
}
</style>
