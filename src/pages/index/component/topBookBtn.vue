<template>
  <div class="con" @click.stop="click" :class="{ 'con': true, 'act': !state }">
    <div class="cir-part"></div>
    <div class="content">{{context}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      context: '通',
    }
  },
  props: ['state', 'click'],
}
</script>

<style lang="less" scoped>
@import '~less/base.less';

@hei: 48px;
@bc: @color_brand;

.con {
  position: absolute;
  left: -@hei;
  top: 16px;
  height: @hei;
  width: 0px + @hei/2;
  background: @bc;
  z-index: 1;
  transition: left ease .3s;

  &.act {
    left: 0;
  }

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
