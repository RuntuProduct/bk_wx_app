<template>
  <div class="label-con">
    <div class="base-con"></div>
    <div class="detail-con">
      <div class="label-line">
        <div class="label">本月支出</div>
        <div class="content outlay">{{outlay}}</div>
      </div>
      <div class="label-line">
        <div class="label">本月收入</div>
        <div class="content income">{{income}}</div>
      </div>
      <div class="label-line">
        <div class="label">预算剩余</div>
        <div class="content budget">{{budgetLast}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['outlay', 'income', 'budget'],
  computed: {
    budgetLast () {
      return this.budget - this.outlay
    },
  },
}
</script>

<style lang="less" scoped>
@import '~less/base.less';

@label_hei: @font_size_big;

.label-con {
  display: flex;
  padding: @base_padding_vertical @base_padding_horizontal;
  border-bottom: 1px solid @color_border_gray;

  .base-con {
    flex: 1;
  }
  .detail-con {
    width: 60%;
  }

  .label-line {
    display: flex;
    flex-direction: row;
    height: @label_hei;
    margin-bottom: 12px;
    align-items: flex-end;
    // border-bottom: 1px solid @color_border_gray;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .label {
    flex-shrink: 0;
    font-size: @font_size_ex_content;
    color: @color_base_black;
  }

  .content {
    height: @label_hei;
    line-height: @label_hei;
    flex: 1;
    font-size: @font_size_normal;
    text-align: right;

    &.income {
      color: @color_income;
    }
    &.outlay {
      color: @color_outlay;
    }
    &.budget {
      // font-size: @font_size_ex_content;
    }
  }
}
</style>

