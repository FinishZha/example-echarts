<template>
  <div class="pane-list-card">
    <img :src= cardIcon>
    <span id="wordKey">{{ wordKey }}</span>
    <div class="card-inner">
      <div id="keyVal">{{ keyVal }}</div>
      <div id="valUnits">{{ valUnits }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "panel-card",
  props:{
    cardIcon:{
      type:String,
      default: require('@/assets/images/home-images/work-room2.png'),
      require:true
    },
    wordKey:{
      type:String,
      default: '文字',
      require:true
    },
    keyVal:{
      type:Number,
      default: 0,
      require:true
    },
    valUnits:{
      type:String,
      default: '个',
      require:true
    },
  }
}
</script>

<style lang="less" scoped>
.pane-list-card{
  width: 470px;
  height: 217px;
  background: #FFFFFF;
  border: 2px solid #F2F2F2;
  position: relative;
  cursor: pointer;
  img{
    position: absolute;
    left:56px;
    top:50%;
    margin-top: -26px;
  }
  span{
    position: absolute;
    font-family: Microsoft YaHei;
  }

  #wordKey{
    left: 160px;
    top: 74px;
    font-size: 17px;
    font-weight: 550;
    color: #999999;
  }
  .card-inner{
    width: 120px;
    height:40px;
    position: relative;
    left: 160px;
    top: 113px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    #keyVal{
      display: block;
      line-height: 40px;
      height: 40px;
      width: auto;
      font-size: 30px;
      font-weight: 400;
      color: #2D85F6;
    }
    #valUnits{
      display: block;
      height: 40px;
      width: auto;
      font-size: 17px;
      font-weight: 550;
      color: #999999;
      margin: 28px 0 0 15px;
    }
  }
  &:hover{
    width: 470px;
    height: 217px;
    background: #DDEEFF;
    box-shadow: 0 5px 5px 0 rgba(30,82,132,0.1000);
  }
}
</style>
