<template>
  <div class="pageWrap">
    <Navs />

    <div class="section1">
      <ul class="download-img-ul">
        <li class="download-img">
          <img v-lazy="download1" alt="">
        </li>
        <li class="download-img">
          <img v-lazy="download2" alt="">
        </li>
        <li class="download-img">
          <img v-lazy="download3" alt="">
        </li>
      </ul>

      <img v-lazy="downloadQRCode" alt="" class="qrcode" />

      <p class="word">扫码下载交易所</p>
    </div>

    <Footers />
  </div>
</template>

<script>
import Navs from '../components/Navs'
import Footers from '../components/Footers'

import download1 from '../assets/img/page3/download-1.png'
import download2 from '../assets/img/page3/download-2.png'
import download3 from '../assets/img/page3/download-3.png'

import downloadQRCode from '../assets/img/page3/download-qrcode.jpg'

export default {
  name: 'cooperation',

  data () {
    return {
      download1,
      download2,
      download3,
      downloadQRCode
    }
  },

  components: {
    Navs,
    Footers
  }
}
</script>

<style scoped>
@import url('./download.css');

.section1 {
  background: url(~@/assets/img/page2/section3-bg.jpg) no-repeat;
  background-position: center;
  background-size: auto 100%;
  text-align: center;
  padding-bottom: 1rem;
}

.download-img-ul {
  padding: 1rem 0.2rem 0;
  display: flex;
  flex-direction: row;
}

.download-img {
  flex: 1;
}

.download-img img {
  width: 1rem;
}

.qrcode {
  width: 0.88rem;
  height: 0.88rem;
  margin-top: 0.5rem;
}

.word {
  color: #fff;
  font-size: 0.14rem;
  line-height: 0.16rem;
}
</style>
