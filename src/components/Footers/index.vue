<template>
  <div class="footers">
    <div class="line">EOK</div>

    <div class="line">
      <p>扫码加入社群</p>
      <img :src="downloadQRCode" alt="" class="img" />
    </div>

    <div class="line clearfix">
      <p class="line-left">更多信息</p>
      <p class="line-right" @click="() => handleJump('/cooperation')">商务合作</p>
    </div>

    <div class="line">FAQ</div>

    <div class="line">©2019 Prophet. All rights reserved.</div>
  </div>
</template>

<script>
import downloadQRCode from '../../assets/img/page3/download-qrcode1.jpeg'
export default {
  name: 'footers',

  data () {
    return {
      downloadQRCode
    }
  },

  methods: {
    handleJump (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.footers {
  font-size: 0.12rem;
  color: #fff;
  background-color: #333333;
  padding-left: 0.44rem;
  padding-top: 0.5rem;
}

.line {
  padding-bottom: 0.28rem;
}

.img {
  margin-top: 0.15rem;
  width: 0.66rem;
  height: 0.66rem;
}

.line-left, line-right {
  float: left;
  width: 50%;
}
</style>
