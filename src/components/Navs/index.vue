<template>
  <div>
    <div class="pop-mask" v-if="isShowMask">
      <ul>
        <li @click="() => handleJump('/')" :class="routePath === '/' ? 'active' : ''">首页</li>
        <li @click="() => handleJump('/cooperation')" :class="routePath === '/cooperation' ? 'active' : ''">商务合作</li>
        <li @click="() => handleJump('/download')" :class="routePath === '/download' ? 'active' : ''">交易所</li>
        <li><a href="http://eoktop.com/EOKBookplan.pdf">白皮书</a></li>
      </ul>
    </div>

    <div class="nav clearfix" :style="isShowMask ? {} : bgStyle">
      <img :src="logo" alt="logo" class="logo">

      <div class="operate-btn" @click="handleToggle">
        <img :src="isShowMask ? navClose : operateIcon" alt="" :class="isShowMask ? 'close-icon' : 'operate-icon'">
      </div>
    </div>

    <div class="dialog-pop-wrap" v-if="isShowDialog" @click="handleCloseDialog">
      <img :src="dialogImg" alt="" class="dialog-img">
      <img :src="dialogClose" alt="" class="dialog-close">
    </div>
  </div>
</template>

<script>
import logo from '../../assets/logo.png'
import operateIcon from '../../assets/img/nav-operate.png'
import navPopBg from '../../assets/img/nav-pop-bg.jpg'
import navClose from '../../assets/img/nav-close.png'
import navBg from '../../assets/img/nav-bg.png'
import dialogImg from '../../assets/img/dialog.png'
import dialogClose from '../../assets/img/dialog-close.png'

export default {
  name: 'nav',

  data () {
    return {
      logo,
      operateIcon,
      navPopBg,
      navClose,
      dialogImg,
      dialogClose,
      bgStyle: {
        background: `url(${navBg}) no-repeat`,
        backgroundPosition: 'center center'
      },
      isShowMask: false,
      isShowDialog: !localStorage.getItem('eokDialogPop')
    }
  },

  computed: {
    routePath () {
      return this.$route.path
    }
  },

  methods: {
    handleToggle () {
      document.body.style.overflow = !this.isShowMask ? 'hidden' : 'auto'
      this.isShowMask = !this.isShowMask
    },

    handleJump (path) {
      document.body.style.overflow = 'auto'
      document.body.scrollTop = document.documentElement.scrollTop = 0

      this.$router.push(path)
    },

    handleCloseDialog () {
      localStorage.setItem('eokDialogPop', '1')
      this.isShowDialog = false
    }
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
  z-index: 1001;
}

.logo {
  float: left;
  height: 0.36rem;
  margin-top: 0.07rem;
}

.operate-btn {
  float: right;
  overflow: hidden;
}

.close-icon {
  width: 0.18rem;
  height: 0.18rem;
  padding: 0.16rem 0;
}

.operate-icon {
  width: 0.27rem;
  height: 0.17rem;
  padding: 0.16rem 0;
}

.pop-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(~@/assets/img/nav-pop-bg.jpg) no-repeat;
  background-position: center;
  background-size: 100% 100%;
  z-index: 1000;
}

.pop-mask ul {
  padding-top: 1.8rem;
}

.pop-mask ul li, .pop-mask ul li a {
  width: 100%;
  height: 0.18rem;
  text-align: center;
  margin-bottom: 0.8rem;
  color: #fff;
  font-size: 0.16rem;
}

.pop-mask ul li.active {
  color: #F3B530;
}

.dialog-pop-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background-color: rgba(0,0,0,.4);
}

.dialog-img {
  width: 3.26rem;
  height: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1.9rem;
  margin-top: -2.1rem;
}

.dialog-close {
  width: 0.34rem;
  height: 0.34rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -0.17rem;
  margin-top: 1.9rem;
}
</style>
