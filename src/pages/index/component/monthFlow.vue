<template>
  <div class="label-con">
    <div class="detail-con">
      <div class="label-line">
        <div class="labe">本月支出</div>
      </div>
      <div class="label-line">
        <div class="labe">本月收入</div>
      </div>
      <div class="label-line">
        <div class="labe">预算剩余</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
}
</script>

<style lang="less" scoped>
@import '~less/base.less';

.label-con {
  display: flex;
  padding: @base_padding_vertical @base_padding_horizontal;
}
</style>

