<template>
  <div class="index-panels-card">
    <img :src="carIcon">
    <span id="wordKey">{{ wordKey }}</span>
    <span id="keyVal" :style="wordStyle"> {{ keyVal }} </span>
  </div>
</template>

<script>
export default {
  props:{
    carIcon:{
      type:String,
      default: require('@/assets/images/home-images/total-data.png'),
      require:true
    },
    wordKey:{
      type:String,
      default: '文字',
      require:true
    },
    keyVal:{
      type:String,
      default: '0',
      require:true
    },
    wordColor:{
      type:String,
      default: '#2daae4',
      require:false
    }
  },
  name: "panel-card-medium",
  data(){
    return{
      wordStyle:{
        color: this.$props.wordColor
      }
    }
  },
  watch:{
    wordColor(news, old){
      this.wordStyle.color = news
    }
  }
}
</script>

<style lang="less" scoped>
.index-panels-card{
  width: 280px;
  height: 163px;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 6px 5px 0px rgba(117,159,200,0.1000);
  margin-top: 12px;
  cursor: pointer;
  &:nth-child(1){
    margin-top: 20px;
  }
  img{
    position: absolute;
    top: 56px;
    left: 46px;
  }
  #wordKey{
    position: absolute;
    top: 55px;
    left: 154px;
    font-size: 16px;
    font-weight: 550;
    color: #a0a0a0;
  }
  #keyVal{
    position: absolute;
    top: 84px;
    left: 154px;
    font-size: 20px;
    font-weight: 800;
    color: #2daae4;
  }
  &:hover{
    background: #DDEEFF;
    box-shadow: 0 5px 5px 0 rgba(30,82,132,0.1000);
  }
}
</style>
