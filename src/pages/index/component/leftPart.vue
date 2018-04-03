<template>
  <div class="con" :class="{ 'act': state }">
    <div :class="{ 'act': state, 'mask': true }" @click.stop="hideClick"></div>
    <div :class="{ 'act': state, 'list-con': true }"></div>
  </div>
</template>

<script>
export default {
  props: ['state', 'hideClick'],
}
</script>

<style lang="less" scoped>
@import '~less/base.less';

@wid: 60%;
@zIndex: 20;

.con {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  overflow: hidden;
  transition: left ease .3s;

  &.act {
    left: 0;
  }
}
.mask {
  widows: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: @zIndex - 1;
  transition: background-color ease .3s .3s;

  &.act {
    background-color: rgba(0, 0, 0, .3);
  }
}
.list-con {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: -@wid;
  width: @wid;
  height: 100%;
  padding: @base_padding_vertical @base_padding_horizontal;
  box-sizing: border-box;
  background-color: @color_brand;
  z-index: @zIndex;
  transition: left ease .3s;

  &.act {
    left: 0;
  }
}
</style>

