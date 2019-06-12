<template>
  <div :class="`swiper-container swiper-conatiner-${type}`">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in list"
        :key="index"
      >
        <div :class="curClass">
          <img v-lazy="item.img" alt="" class="img">
          <h3>{{item.title}}</h3>
          <template v-if="typeof item.desc === 'string'">
            <p >{{item.desc}}</p>
          </template>
          <template v-else>
            <p v-for="(el, idx) in item.desc" :key="idx">{{el}}</p>
          </template>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import intro1 from '../../assets/img/page1/intro-01.png'
import intro2 from '../../assets/img/page1/intro-02.png'
import intro3 from '../../assets/img/page1/intro-03.png'
import intro4 from '../../assets/img/page1/intro-04.png'

import adv1 from '../../assets/img/page1/adv-1.png'
import adv2 from '../../assets/img/page1/adv-2.png'
import adv3 from '../../assets/img/page1/adv-3.jpg'

export default {
  name: 'slider',

  props: ['type'],

  data () {
    return {
      curClass: `slider-${this.type}`,
      list: this.type === 'intro' ? [
        {
          img: intro1,
          title: '权益兑付',
          desc: '代币的发行确权有效解决了共建项目参与容易退出困难的问题。交易所为代币交易提供流动性保证，同时代币的确权方式能方便项目灵活发放项目权益，丰富共建玩法。'
        },
        {
          img: intro2,
          title: '资产数字化',
          desc: '任何影视产品都可以在平台上实行登记、发行、跟踪。各种主体（符合平台监要求）即可登记发行自己的数字资产、实现资产登记即公示、利于资产追踪查询，有效减少资产纠纷问题。'
        },
        {
          img: intro3,
          title: '支付',
          desc: '通过实现现实商业场景的交易兑换，来完成数字货币和现实产品及服务的落地。有效解决用户交易困难、场景兑付困难等问题，降低用户的应用门槛，促进数字货币的发展。'
        },
        {
          img: intro4,
          title: '场景数字化',
          desc: '行业全生态的应用功能场景搭建，使用统一的代币结算体系，能有效打通行业上下流，建立规范化的行业标准方案。区块链技术的使用使影视行业更加透明、规范，让梦想者更好前行。'
        }
      ] : [
        {
          img: adv1,
          title: '背景优势',
          desc: ['依托GAEA的技术', '全球合约前四名', '坚实的项目背景保障']
        },
        {
          img: adv2,
          title: '服务优势',
          desc: ['优质的项目分享', '完善的监管跟踪', '专业的技术支持']
        },
        {
          img: adv3,
          title: '渠道优势',
          desc: ['健全的培训体系', '畅通的信息渠道', '丰富的社群活动']
        }
      ]
    }
  },

  mounted () {
    const className = `.swiper-conatiner-${this.type}`

    if (this.type === 'intro') {
      window.sliderObj1 = new Swiper(className, {
        pagination: {
          el: `${className} .swiper-pagination`,
          clickable: true
        }
      })
    } else {
      window.sliderObj2 = new Swiper(className, {
        pagination: {
          el: `${className} .swiper-pagination`,
          clickable: true
        }
      })
    }
  },

  updated () {
    console.log(1)
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
}

.slider-intro {
  text-align: center;
}

.slider-intro img {
  width: 0.82rem;
  height: 0.82rem;
  margin-bottom: 0.3rem;
}

.slider-adv img {
  width: 1.05rem;
  height: 1.62rem;
  margin-bottom: 0.3rem;
}

.slider-adv h3, .slider-intro h3 {
  font-size: 0.14rem;
  line-height: 0.16rem;
  margin-bottom: 0.2rem;
}

.slider-adv p, .slider-intro p {
  width: 1.75rem;
  font-size: 0.12rem;
  line-height: 0.18rem;
  text-align: left;
  text-indent: 0.24rem;
}

.slider-adv p {
  text-align: center;
  margin-bottom: 0.05rem;
  text-indent: 0;
}
</style>
