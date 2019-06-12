<template>
  <div class="pageWrap">
    <Navs />

    <section class="section1" >
      <img v-lazy="section1Logo" alt="section-logo" class="section-logo" />
      <!-- <img :src="section1Title" alt="section-title" class="section-title"> -->
      <div class="section1-title">科技未来，未来已来</div>
    </section>

    <section class="section2">
      <h2 class="title">关于我们</h2>
      <p class="desc">EOK未来数字化交易平台，基于区块链技术打造全新的社群、理财、投资、交易为核心的新型金融社区生态，创设一个信用足、成本低、清算快、自律强、监管易、应用广的分布式理财平台，让越来越多的投资者能享受区块链技术发展带来的红利。</p>
      <p class="note">免责声明：EOK为独立自主的项目，与平台各项目方进仅存在合作关系，EOK会肩负起严格的项目审核，但并不对平台项目自身发售的数字资产的涨跌进行负责。</p>
      <img v-lazy="section2Img" alt="section2-img" class="section2-img">
    </section>

    <section class="section3">
      <h2 class="title">我们的愿景</h2>
      <p class="desc">EOK致力于成为全球最大的区块链和数字货币价值投资平台，帮助用户一站式解决数字资产的投资渠道的不规范以及投资品种匮乏；普及区块链知识，推动区块链生态的健康发展。打通线上线下的数字货币使用场景使区块链技术能够更好地为实体经济服务。</p>
      <img v-lazy="section3Img" alt="img" class="img">
    </section>

    <section class="section4 sectionModule">
      <h2 class="title">我们的优势</h2>
      <div class="section4-slider-wrap">
        <Slider type="adv" />
      </div>
    </section>

    <section class="section5 sectionModule">
      <h2 class="title">产品介绍</h2>
      <div class="product-intro">
        <Slider type="intro"/>
      </div>

      <h2 class="title">发展历程</h2>
      <img v-lazy="section5Img" alt="img" class="section5Img" />
    </section>

    <section class="section7">
      <h2 class="title">合作伙伴</h2>
      <ul class="section7-ul clearfix">
        <li v-for="(item, idx) in cpList" :key="idx" class="section7-item" :class="idx % 2 ? '' : 'section7-item-left'">
          <img v-lazy="item" alt="img" class="img">
        </li>
      </ul>
    </section>

    <Footers />
  </div>
</template>

<script>
import Navs from '../components/Navs'
import Footers from '../components/Footers'
import Slider from '../components/Slider'

import section1Logo from '../assets/img/page1/section1-logo.png'
import section1Title from '../assets/img/page1/section1-title.png'

import section2Img from '../assets/img/page1/section2-img.jpg'
import section3Img from '../assets/img/page1/section3-img.png'
import section5Img from '../assets/img/page1/section5-img1.png'

import cp1 from '../assets/img/page1/componey/cp-1.png'
import cp2 from '../assets/img/page1/componey/cp-2.png'
import cp3 from '../assets/img/page1/componey/cp-3.png'
import cp4 from '../assets/img/page1/componey/cp-4.png'
import cp5 from '../assets/img/page1/componey/cp-5.png'
import cp6 from '../assets/img/page1/componey/cp-6.png'
import cp7 from '../assets/img/page1/componey/cp-7.png'
import cp8 from '../assets/img/page1/componey/cp-8.png'
import cp9 from '../assets/img/page1/componey/cp-9.png'
import cp10 from '../assets/img/page1/componey/cp-10.png'
import cp11 from '../assets/img/page1/componey/cp-11.png'
import cp12 from '../assets/img/page1/componey/cp-12.png'

export default {
  name: 'main',

  data () {
    return {
      section1Logo,
      section1Title,
      section2Img,
      section3Img,
      section5Img,

      cpList: [ cp1, cp2, cp3, cp4, cp5, cp6, cp7, cp8, cp9, cp10, cp11, cp12 ]
    }
  },

  components: {
    Navs,
    Footers,
    Slider
  }
}
</script>

<style scoped>
@import url('./main.css');

.section1 {
  height: 3.44rem;
  background: url(~@/assets/img/page1/section1-bg.jpg) no-repeat;
  background-position: center;
  background-size: 100%;
}

.section3 {
  height: 4.37rem;
  background: url(~@/assets/img/page1/section3-bg.jpg) no-repeat;
  background-position: center;
  background-size: auto 100%;
}

.section5 {
  height: 12rem;
  background: url(~@/assets/img/page1/section5-bg.jpg) no-repeat;
  background-position: center;
  background-size: auto 100%;
}

</style>
