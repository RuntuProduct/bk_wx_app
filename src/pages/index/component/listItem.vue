<template>
  <div class="item-con">
    <div class="title">{{title}}</div>
    <div class="cost-detail">
      <div class="outlay">{{outlay}}</div>
      <div class="income">{{income}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'outlay', 'income'],
}
</script>

<style lang="less" scoped>
@import '~less/base.less';

@hei: 76px;
@padding: 10px;
@detail_padding_vertical: 4px;

.item-con {
  height: @hei;
  display: flex;
  padding: 0 @base_padding_horizontal;
  border-bottom: 1px solid @color_border_gray;

  &:first-child {
    border-top: 1px solid @color_border_gray;
  }
}

.title {
  height: @hei;
  line-height: @hei;
  margin-right: @padding;
  flex: 1;
}
.cost-detail {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  .same {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .outlay {
    .same;
    padding-bottom: @detail_padding_vertical/2;
    align-items: flex-end;
    color: @color_outlay;
  }
  .income {
    .same;
    padding-top: @detail_padding_vertical/2;
    align-items: flex-start;
    color: @color_income;
  }
}
</style>

