<template>
  <div class="pageWrap">
    <Nav />

    <section class="section1" >
      <img :src="section1Logo" alt="section-logo" class="section-logo" />
      <img :src="section1Title" alt="section-title" class="section-title">
    </section>

    <section class="section2">
      <h2 class="title">关于我们</h2>
      <p class="desc">EOK 是基于区块链技术打造的全新的社群、媒体、营销、金融、影视为核心的商业社区生态,创设一个信用足、成本低、清算快、自律强、监管易的分布式影业共建空间，链接更多有着共同兴趣的人们。</p>
      <p class="note">免责声明：EOK为独立自主的项目，与平台各项目方进仅存在合作关系，EOK会肩负起严格的项目审核，但并不对平台项目自身发售的数字资产的涨跌进行负责。</p>
      <img :src="section2Img" alt="section2-img" class="section2-img">
    </section>

    <section class="section3">
      <h2 class="title">我们的愿景</h2>
      <p class="desc">EOK当前的共建经济为参与者带来的价值并没有随着市场的增长而增加，EOK 的创始团队们坚信在区块链这一创新技术的驱动下，能够迅速超越传统影视共建的经济⾏为。</p>
      <img :src="section3Img" alt="img" class="img">
    </section>

    <!-- <section class="section4">
      section4
    </section>

    <section class="section5">
      section5
    </section>

    <section class="section6">
      section6
    </section> -->

    <section class="section7">
      <h2 class="title">合作伙伴</h2>
      <ul class="section7-ul clearfix">
        <li v-for="(item, idx) in cpList" :key="idx" class="section7-item" :class="idx % 2 ? '' : 'section7-item-left'">
          <img :src="item" alt="img" class="img">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import section1Logo from '../assets/img/page1/section1-logo.png'
import section1Title from '../assets/img/page1/section1-title.png'

import section2Img from '../assets/img/page1/section2-img.png'
import section3Img from '../assets/img/page1/section3-img.png'

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

      cpList: [ cp1, cp2, cp3, cp4, cp5, cp6, cp7, cp8, cp9, cp10, cp11, cp12 ]
    }
  },

  methods: {

  },

  components: {
    Nav
  }
}
</script>

<style scoped>
@import url('./main.css');

.section1 {
  height: 3.44rem;
  background: url(~@/assets/img/page1/section1-bg.png) no-repeat;
  background-position: center;
  background-size: 100%;
}

.section3 {
  height: 4.37rem;
  background: url(~@/assets/img/page1/section3-bg.png) no-repeat;
  background-position: center;
  background-size: auto 100%;
}

</style>
