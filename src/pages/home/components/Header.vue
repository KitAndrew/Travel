<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<!--scoped 样式只对当前样式有效-->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-center
      flex 1
      height .64rem
      background #fff
      line-height .64rem
      border-radius .1rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      color #ccc
      text-align left
    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
