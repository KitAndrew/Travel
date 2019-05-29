<template>
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201301/14/bf26ff3662c7a2a393835fbb.png_600x330_aebbf95e.png">
      <div class="banner-info">
        <div class="banner-title">苏州海洋馆</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63a;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201301/14/bf26ff3662c7a2a393835fbb.png_350x240_becac661.png', 'http://img1.qunarzz.com/sight/p0/201301/14/f77730fe6e9e0f0993835fbb.png_350x240_f5132c2e.png']
    }
  },
  methods: {
    handleGallaryClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left: 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        text-align left
        padding 0 .2rem
        font-size .32rem
      .banner-number
        padding 0 .4rem
        height .32rem
        margin-top .14rem
        line-height .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
