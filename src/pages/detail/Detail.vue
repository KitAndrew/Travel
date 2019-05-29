<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {DetailList, DetailHeader, DetailBanner},
  comments: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {title: '成人票', children: [{title: '成人三馆联票', children: [{title: '成人三馆联票-1'}]}]},
        {title: '儿童票'},
        {title: '学生票'},
        {title: '特惠票'}
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 50rem
</style>
