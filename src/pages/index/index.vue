<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <!-- 左侧菜单按钮 -->
    <topBookBtn :state="leftShow" :click="showLeft" />
    <!-- 左侧菜单列表 -->
    <leftPart :state="leftShow" :hideClick="hideLeft" :data="bookList" />
    <div class="inner-container">
      <!-- 当月汇总 -->
      <monthFlow :outlay="baseInfo.outlay" :income="baseInfo.income" :budget="baseInfo.budget" />
      <!-- 记一笔按钮 -->
      <div class="dealBtn" @click="getBaseInfo">记一笔</div>
      <div class="list-area">
        <!-- 日汇总 -->
        <item
          title="今日"
          :income="dataDay.income"
          :outlay="dataDay.outlay"
        />
        <!-- 周汇总 -->
        <item
          title="本周"
          :income="dataWeek.income"
          :outlay="dataWeek.outlay"
        />
        <!-- 月汇总 -->
        <item
          title="本月"
          :income="dataMonth.income"
          :outlay="dataMonth.outlay"
        />
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'
import topBookBtn from './component/topBookBtn'
import leftPart from './component/leftPart'
import monthFlow from './component/monthFlow'
import item from './component/listItem'

export default {
  data () {
    return {
      leftShow: false,
    }
  },
  computed: {
    baseInfo: () => store.state.baseInfo,
    dataDay: () => store.state.todayInfo,
    dataWeek: () => store.state.weekInfo,
    dataMonth: () => store.state.baseInfo,
    bookList: () => store.state.bookList,
  },

  components: {
    topBookBtn,
    leftPart,
    monthFlow,
    item,
  },

  methods: {
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    getBaseInfo () {
      store.dispatch('getBaseInfo')
    },
    getBookList () {
      store.dispatch('getBookList')
    },
    showLeft () {
      this.leftShow = true
      this.getBookList()
    },
    hideLeft () {
      this.leftShow = false
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    console.log(store)
  },
}
</script>

<style lang="less" scoped>
@import '~less/base.less';

.inner-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.dealBtn {
  margin: @base_padding_vertical @base_padding_horizontal;
  height: 2em;
  line-height: 2em;
  font-size: @font_size_content;
  text-align: center;
  color: #fff;
  background-color: @color_brand;
  border-radius: 3px;
}
.list-area {
  margin-bottom: @base_padding_vertical;
}
</style>
