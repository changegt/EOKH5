<template>
  <div class="nav clearfix" :style="bgStyle">
    <img :src="logo" alt="logo" class="logo">

    <div class="operate-btn">
      <img :src="operateIcon" alt="" class="operate-icon">
    </div>
  </div>
</template>

<script>
import logo from '../../assets/logo.png'
import operateIcon from '../../assets/img/nav-operate.png'
import navBg from '../../assets/img/nav-bg.png'

export default {
  name: 'nav',

  data () {
    return {
      logo,
      operateIcon,
      bgStyle: {
        background: `url(${navBg}) no-repeat`,
        backgroundPosition: 'center center'
      }
    }
  },

  methods: {

  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  padding: 0 0.15rem;
  box-sizing: border-box;
}

.logo {
  float: left;
  height: 0.36rem;
  margin-top: 0.07rem;
}

.operate-btn {
  float: right;
  width: 0.27rem;
  height: 0.17rem;
  padding: 0.16rem 0;
  overflow: hidden;
}

.operate-icon {
  width: 100%;
}
</style>
