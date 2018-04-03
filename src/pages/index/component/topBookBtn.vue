<template>
  <div class="con">
    <div class="cir-part"></div>
    <div class="content">{{context}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      context: '通',
    }
  },
}
</script>

<style lang="less" scoped>
@import '~less/base.less';

@hei: 64px;
@bc: @color_brand;

.con {
  position: absolute;
  left: 0;
  top: 16px;
  height: @hei;
  width: 0px + @hei/2;
  background: @bc;
  z-index: 1;

  .cir-part {
    height: @hei;
    width: @hei;
    border-radius: @hei/2;
    position: absolute;
    right: -@hei/2;
    top: 0;
    background: @bc;
    z-index: 0;
  }

  .content {
    height: @hei;
    width: @hei;
    line-height: @hei;
    position: absolute;
    left: 0px;
    top: 0;
    color: #fff;
    text-align: center;
  }
}
</style>
