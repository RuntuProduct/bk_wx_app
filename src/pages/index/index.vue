<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <topBookBtn />
    <div class="inner-container">
      <!-- 当月汇总 -->
      <monthFlow />
      <!-- 记一笔按钮 -->
      <div class="dealBtn">记一笔</div>
      <div class="list-area">
        <!-- 日汇总 -->
        <item
          title="今日"
          :income="data_day.income"
          :outlay="data_day.outlay"
        />
        <!-- 周汇总 -->
        <item
          title="本周"
          :income="data_week.income"
          :outlay="data_week.outlay"
        />
        <!-- 月汇总 -->
        <item
          title="本月"
          :income="data_month.income"
          :outlay="data_month.outlay"
        />
      </div>
    </div>
  </div>
</template>

<script>
import topBookBtn from './component/topBookBtn'
import monthFlow from './component/monthFlow'
import item from './component/listItem'

export default {
  data () {
    return {
      data_day: { income: 100.00, outlay: 20.00 },
      data_week: { income: 0.00, outlay: 0.00 },
      data_month: { income: 0.00, outlay: 0.00 },
    }
  },

  components: {
    topBookBtn,
    monthFlow,
    item,
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            },
          })
        },
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
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
