<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!--递归调用-->
      <div class="item-chilren">
        <detail-list v-if="item.children" :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name 一般在递归调用时用
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    text-align left
  .item-chilren
    padding: 0 .3rem
    text-align left
</style>
