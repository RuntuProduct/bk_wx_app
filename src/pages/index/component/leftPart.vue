<template>
  <div class="con" :class="{ 'act': state }">
    <div :class="{ 'act': state, 'mask': true }" @click.stop="hideClick"></div>
    <div :class="{ 'act': state, 'list-con': true }">
      <!-- 遍历账单信息 -->
      <ul class="list">
        <li v-for="(da, index1) in data" :key="da.id + index1" class="item-con">
          <div class="content">
            <div class="name">{{da.name}}</div>
            <div class="people">
              <li v-for="(us, index2) in da.users" :key="us.id + index2" class="people-icon"></li>
            </div>
          </div>
          <div class="btn-area">
            <div class="btn">编辑</div>
            <div class="btn">删除</div>
          </div>
        </li>
        <li class="item-con add">
          添加账单
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['state', 'hideClick', 'data'],
}
</script>

<style lang="less" scoped>
@import '~less/base.less';

@wid: 60%;
@zIndex: 20;
@item_padding: 6px;

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
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -50%;
  background-color: rgba(0, 0, 0, .3);
  z-index: @zIndex - 1;
  transition: left ease .2s;

  &.act {
    left: 0;
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
  // padding: @base_padding_vertical @base_padding_horizontal;
  box-sizing: border-box;
  background-color: @color_brand;
  z-index: @zIndex;
  transition: left ease .3s;

  &.act {
    left: 0;
  }
}

.list {
  display: flex;
  height: 100%;
  overflow-x: auto;
  flex-grow: 1;
  flex-direction: column;

  .item-con {
    display: flex;
    flex-shrink: 0;
    border-bottom: 1px solid @color_border_gray;
    color: #fff;

    &.add {
      height: 3em;
      line-height: 3em;
      justify-content: center;
    }

    .content {
      flex: 1;
      flex-grow: 1;
      overflow: hidden;

      .name {
        padding: .5em @item_padding;
        height: 2em;
        line-height: 2em;
        font-size: @font_size_ex_content;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .people {
        display: flex;
        padding: @item_padding;
        overflow-y: auto;
        box-sizing: border-box;
        .people-icon {
          width: 2em;
          height: 2em;
          border-radius: 2em;
          flex-shrink: 0;
          margin-right: 10px;
          background-color: #f00;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .btn-area {
      width: 36px;
      display: flex;
      padding-right: @item_padding;
      flex-direction: column;
      flex-shrink: 0;
      align-items: center;
      justify-content: space-around;

      .btn {
        font-size: @font_size_remark;
      }
    }
  }
}
</style>

