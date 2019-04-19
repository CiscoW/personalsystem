<template>
  <el-container>
    <el-aside v-bind:style="styleObject">
      <slot name="aside"></slot>
    </el-aside>

    <el-container>
      <el-header>
        <slot name="header"></slot>
      </el-header>

      <el-main>
        <slot name="main"></slot>
      </el-main>

    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: "AppContainer",
    data() {
      return {
        styleObject: {
          // 'min-height': '900px'
        },
      }
    },

    mounted() {
      let clientHeight = document.documentElement.clientHeight;
      this.styleObject = {'min-height': clientHeight + 'px'};
      const that = this;
      window.onresize = function temp() {
        let clientHeight = document.documentElement.clientHeight;
        that.styleObject = {'min-height': clientHeight + 'px'};
      };
    },
  }
</script>

<style scoped>
  .el-header {
    text-align: right;
    font-size: 12px;
    line-height: 60px;
    background: #2F9688;
  }

  .el-aside {
    padding: 5px;
    background: #252630;
    max-width: 220px;
    height: 100%;
  }


</style>
