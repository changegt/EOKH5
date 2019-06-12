<template>
  <div class="pageWrap">
    <Navs />

    <section class="section1 sectionModule" >
      <h2 class="title">EOK 首发</h2>
      <img v-lazy="section1Img" alt="section1-img" class="section1-img">
    </section>

    <section class="section2 sectionModule">
      <h2 class="title">关于EOK Foundation“支持计划”公告</h2>
      <p class="desc">EOK自成立起，一直秉持着“降低数字资产投资门槛，让区块链技术普及大众”的初心，期待以技术改变世界，并一直为之努力。通过扩张运营以及技术团队，开发APP，为区块链行业的发展搭建基础设施，推动社区自治，非常感谢我们每一次进步的背后都有一群默默支持EOK的支持者和信仰者。
EOK平台将采用全新的代币发售方式，项目方仍按照EOK的规则提交项目上线申请，并按照项目方预算填写他们认为合理的“发售费”额度，EOK基金会会把该笔款项透明化，捐赠给慈善机构。
区块链行业的发展需要所有人的努力，我们期待这一调整将进一步推进慈善行业的发展，并推动区块链的广泛应用，我们放弃的是EOK自身的收入，获得的是行业稳定健康，这对我们来讲是更大的收益；我们将以行业发展作为核心目标，不断对自己发起挑战和变革。</p>
      <p class="desc-org">EOK  Foundation</p>
      <p class="desc-time">2019年5月</p>
    </section>

    <section class="section3">
      <h2 class="title">如何参与支持计划</h2>
      <img v-lazy="stepdetail" alt="section3-img" class="section3-img">
    </section>

    <Footers />
  </div>
</template>

<script>
import Navs from '../components/Navs'
import Footers from '../components/Footers'

import section1Img from '../assets/img/page2/section1-img.png'
import stepdetail from '../assets/img/page2/stepdetail.png'

export default {
  name: 'cooperation',

  data () {
    return {
      section1Img,
      stepdetail
    }
  },

  components: {
    Navs,
    Footers
  }
}
</script>

<style scoped>
@import url('./cooperation.css');

.section1 {
  height: 2.9rem;
  background: url(~@/assets/img/page1/section1-bg.jpg) no-repeat;
  background-position: center;
  background-size: cover;
}

.section3 {
  height: 3.5rem;
  background: url(~@/assets/img/page2/section3-bg.jpg) no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
