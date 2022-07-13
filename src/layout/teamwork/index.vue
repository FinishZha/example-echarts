<template>
<div class="team-layout-container">
  <header class="team-layout-header">
    <div class="empty-place"></div>
    <div class="center-title">
<!--      <img src="../../../src/assets/images/home-images/header-image.png" alt="">-->
      <p class="key-title-box">
        <span>{{ mainTitle }}</span>
      </p>
    </div>
    <div class="right-weather"></div>
  </header>
  <main class="team-layout-body"></main>
</div>
</template>

<script>
export default {
  name: "index.vue",
  data(){
    return{
      mainTitle:'数据化大屏'
    }
  }
}
</script>

<style lang="less" scoped>
.team-layout-container{
  //width: 100vw;
  //height: 100%;
  //position: relative;
  //top: 0;
  //left: 0;
  width: 3840px;
  height: 1080px;
  padding-top: 70px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
  .team-layout-header{
    position: absolute;
    top: 0;
    left: 0;
    height: 62px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: url("~@/assets/images/home-images/header-image.png") no-repeat center 100%;
    .empty-place{
      width: 40%;
      height: 100%;
    }
    .center-title{
      width: 20%;
      height: 62px;
      min-width: 400px;

      .key-title-box{
        text-align: center;
        color: #a5ccf2;
        font-size: 26px;
      }
    }
    .right-weather{
      height: 100%;
      width: 40%;
    }
  }

  .team-layout-body{
    position: relative;
    width: 100%;
    height: 1010px;
    box-sizing: border-box;
    padding-top: 36px;
    pointer-events: none;
  }
}
</style>
