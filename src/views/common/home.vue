<template>
  <div class="business-data">
    <header>
      <nav class="console-nav">
        <div class="nav-title">
          <span class="title-before">
            <img src="~@/assets/images/home-images/nav-hanbuage.png" width="32px">
          </span>
          <span class="title">商务数据仓共享门户</span>
        </div>
        <div class="nav-list">
          <ul>
            <li>数据资源</li>
            <li>素材库</li>
            <li>知识库</li>
            <li>视频库</li>
          </ul>
        </div>
        <div class="nav-search">
          <div class="search-input">
            <el-input v-model="searchWord" placeholder="搜索" suffix-icon="el-icon-search" class="search-input-inner"></el-input>
          </div>
          <div class="search-icons">
            <img src="~@/assets/images/home-images/notice-fill.png" class="icon">
            <img src="~@/assets/images/home-images/shopping-car.png" class="icon">
          </div>
        </div>
        <div class="nav-right">
          <ul>
            <li>开发者中心</li>
            <li>
              <span>
                admin
                <el-dropdown>
                <i class="el-icon-caret-bottom"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">item1</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus">item2</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus-outline">item3</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-check">item4</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-check">item5</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <section>
      <div class="bread" style="width: 126px; height: 17px;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="">数据资源</a></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="nav-card">
          <div class="inner-left">
            <div class="left-in">
              <ul>
                <li>
                  <span>数据资源</span>
                </li>
                <li class="tag explain">
                  <span>科普说明</span>
                </li>
                <li class="tag user-manual">
                  <span>用户操作手册</span>
                </li>
              </ul>
              <p>
                数据资源作为“商务厅”的数据底座，对来自应用系统、IRS等系统的编目、归集、形成处室数据， 为厅内系统及应用场景开发提供统一数
              </p>
            </div>
          </div>
          <div class="inner-right"></div>
      </div>
    </section>
    <main>
      <aside class="panel left main">
        <div class="panel-content">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="部门数据" name="first">
              <div class="pane-list-1">
                <PanelCardBig v-for="item in leftPanelList"
                              :card-icon="item.icon"
                              :word-key="item.name"
                              :key-val="item.val"
                              :val-units="item.utils"
                              :key="item.name"></PanelCardBig>
              </div>
            </el-tab-pane>
            <el-tab-pane label="数字化改革" name="second">数字化改革</el-tab-pane>
            <el-tab-pane label="双循环应用" name="third">双循环应用</el-tab-pane>
            <el-tab-pane label="对外贸易" name="fourth">对外贸易</el-tab-pane>
            <el-tab-pane label="国际投资" name="fifth">国际投资</el-tab-pane>
            <el-tab-pane label="外经" name="sixth">外经</el-tab-pane>
            <el-tab-pane label="服务贸易" name="seventh">服务贸易</el-tab-pane>
            <el-tab-pane label="开放平台" name="eighth">开放平台</el-tab-pane>
            <el-tab-pane label="商贸流通" name="ninth">商贸流通</el-tab-pane>
            <el-tab-pane label="开放平台" name="tenth">开放平台</el-tab-pane>
            <el-tab-pane label="电子商务" name="eleventh">电子商务</el-tab-pane>
            <el-tab-pane label="综合工作" name="twelfth">综合工作</el-tab-pane>
          </el-tabs>
        </div>
      </aside>
      <aside class="panel right">
        <span id="right-panel-title">
          核心指标
        </span>
        <div class="index-panels">
          <PanelCardMedium v-for="item in rightCardList"
                           :car-icon="item.icon"
                           :key-val="item.val"
                           :word-key="item.name"
                           :word-color="item.color"></PanelCardMedium>
        </div>
      </aside>
    </main>
    <footer>
        <ul>
          <li class="page-item-active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </footer>
  </div>
</template>

<script>
import PanelCardBig from "@/views/swdata-pages/components/panel-card/panel-card-big";
import PanelCardMedium from "@/views/swdata-pages/components/panel-card/panel-card-medium";
export default {
  name: "home",
  data(){
    return{
      searchWord:'',
      activeName:'first',
      //左侧大卡片列表
      leftPanelList:[{
        icon: require('@/assets/images/home-images/work-room2.png'),
        name:'办公室',
        val:8,
        utils:'个'
      },{
        icon: require('@/assets/images/home-images/regulation.png'),
        name:'法规处',
        val:5,
        utils:'个'
      },{
        icon: require('@/assets/images/home-images/comprehensive-develop.png'),
        name:'综合发展处',
        val:3,
        utils:'个'
      },{
        icon: require('@/assets/images/home-images/financial-audit.png'),
        name:'财务审计处',
        val:5,
        utils:'个'
      },{
        icon: require('@/assets/images/home-images/flow-develop.png'),
        name:'流通发展处',
        val:10,
        utils:'个'
      },{
        icon: require('@/assets/images/home-images/promote-consumption.png'),
        name:'消费促进处',
        val:4,
        utils:'个'
      },{
        icon: require('@/assets/images/home-images/trand-running.png'),
        name:'商务运行处',
        val:7,
        utils:'个'
      },{
        icon: require('@/assets/images/home-images/electronic-financial.png'),
        name:'电子商务处',
        val:8,
        utils:'个'
      },{
        icon: require('@/assets/images/home-images/trand-out.png'),
        name:'对外贸易发展处',
        val:5,
        utils:'个'
      }],
      //右侧卡片列表
     rightCardList:[
       {
         icon: require('@/assets/images/home-images/database-table.png'),
         name:'数据总量',
         val:'1728万条',
         color:'#2daae4'
       },{
         icon: require('@/assets/images/home-images/file.png'),
         name:'文件',
         val:'203885个',
         color:'#fcad5e'
       },{
         icon: require('@/assets/images/home-images/database-table.png'),
         name:'库表',
         val:'103张',
         color:'#3bb06b'
       },{
         icon: require('@/assets/images/home-images/prot.png'),
         name:'接口',
         val:'22个',
         color:'#187bee'
       }
     ]
    }
  },
  components:{
    PanelCardBig,
    PanelCardMedium
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
  }
}
</script>
<style scoped lang="less">
.business-data{
  width: 1920px;
  height: 1077px;
  background: #F9F8F9;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
  header{
    .console-nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:56px;
      width: 1920px;
      position: relative;
      background:linear-gradient(to right, #548ced, #3b55c6);
      .nav-title{
        width: 320px;
        height: 56px;
        line-height: 56px;
        font-size: 24px;
        font-weight: 550;
        font-family: SourceHanSansCN;
        color: #FFFFFF;
        .title-before{
          height: 56px;
          width: 80px;
          display: inline-block;
          background-color: #3a69f6;
          text-align: center;
          line-height: 56px;
          img{
            position: relative;
            top: 5px;
            cursor: pointer;
            display: inline-block;
          }
        }
        .title{
          margin-left: 20px;
        }
      }
      .nav-list{
        height: 56px;
        width: 760px;
        position: absolute;
        left: 453px;
        ul{
          display: flex;
          width: 100%;
          height: 100%;
          li{
            height: 100%;
            line-height: 56px;
            width: 180px;
            text-align: center;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #FFFFFF;
            cursor: pointer;
            &:nth-child(1){
              background: linear-gradient(90deg, #30AFFF 0%, #10DAE1 100%);
              font-weight: 800;
            }
          }
        }
      }
      .nav-search{
        width: 538px;
        height: 42px;
        position: absolute;
        top: 0;
        margin-left: 1162px;
        display: flex;
        align-items: center;
        .search-input{
          width: 280px;
          margin-left: 84px;
          margin-top: 12px;
          /deep/.search-input-inner{
            .el-input__inner{
              border-radius: 50px;
              border: 0;
              background-color: #5d78d5;
              color: #FFFFFF;
              &::-webkit-input-placeholder{
                color: #c5c5c5;
                opacity: 1;
              }
            }
            .el-input__suffix-inner{
              font-size: 18px;
              cursor: pointer;
            }
          }
        }
        .search-icons{
          height: 100%;
          width: 126px;
          margin-top: 12px;
          text-align: center;
          display: flex;
          align-items: center;
          .icon{
            width: 25px;
            margin-left: 30px;
            cursor: pointer;
          }
        }
      }
      .nav-right{
        width: 230px;
        height: 56px;
        line-height: 56px;
        ul{
          display: flex;
          justify-content: space-around;
          align-items: center;
          li{
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            opacity: 0.65;

            &:last-child{
              .el-icon-caret-bottom{
                color: #FFFFFF;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
  section{
    width: 1920px;
    display: flex;
    .bread{
      position: absolute;
      width: 1920px;
      top: 85px;
      left: 60px;
      font-size: 16px;
      .el-breadcrumb{
        .el-breadcrumb__item{
          /deep/ .is-link{
            color: #5271d3;
            font-weight: bolder !important;
          }
        }
      }
    }
    .nav-card {
      position: absolute;
      top: 119px;
      left: 59px;
      width: 1800px;
      height: 140px;
      background: linear-gradient(90deg, #FFFFFF 16%, #CAD3E8 100%);
      box-shadow: 0 0 12px 1px rgba(99, 99, 99, 0.1000);
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
        .inner-left {
          height: 100%;
          width: 922px;
          display: flex;
          align-items: center;
          .left-in{
            width: 620px;
            margin-left: 35px;
            ul{
              height: 29px;
              width: 425px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              li{
                &:nth-child(1){
                  font-size: 28px;
                  font-family: Microsoft YaHei;
                  font-weight: 400;
                  color: #4265D1;
                }
                &:nth-child(2){
                  width: 125px;
                  height: 34px;
                  position: relative;
                  background: #FAF6DE;
                  font-size: 16px;
                  font-family: Microsoft YaHei;
                  font-weight: 550;
                  color: #D9B255;
                  text-align: center;
                  margin-left:5px;
                  padding-left: 45px;
                  cursor: pointer;
                  span{
                    position: absolute;
                    top: 8px;
                    right: 13px;
                  }
                }
                &:nth-child(3){
                  width: 153px;
                  height: 34px;
                  background: #DEEBF9;
                  font-size: 16px;
                  font-family: Microsoft YaHei;
                  font-weight: 550;
                  color: #5A77B5;
                  text-align: center;
                  padding-left: 45px;
                  cursor: pointer;
                  span{
                    position: absolute;
                    top: 8px;
                    right: 13px;
                  }
                }
              }
              .explain{
                position: relative;
                &:before{
                  content: '';
                  width: 17px;
                  height: 21px;
                  position: absolute;
                  top: 8px;
                  left: 12px;
                  background: url("~@/assets/images/home-images/science-explain.png") no-repeat center 100%;
                }
              }
              .user-manual{
                position: relative;
                &:before{
                  content: '';
                  width: 17px;
                  height: 21px;
                  position: absolute;
                  top: 8px;
                  left: 12px;
                  background: url("~@/assets/images/home-images/user-manual.png") no-repeat center 100%;
                }
              }
            }
            p{
              margin-top: 22px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              line-height: 21px;
            }
        }
      }
      .inner-right {
        height: 100%;
        width: 879px;
      }
    }
  }
  main{
    .left{
      .panel-content{
        width: 1480px;
        height: auto;
        position: absolute;
        top: 278px;
        left: 62px;

        &:before{
          content:'';
          position: absolute;
          top: 400px;
          left: -30px;
          height: 33px;
          width: 19px;
          display: block;
          background: url("~@/assets/images/home-images/to-left.png") no-repeat center 100%;
          cursor: pointer;
        }

        &:after{
          content:'';
          position: absolute;
          top: 400px;
          right: -10px;
          height: 33px;
          width: 19px;
          display: block;
          background: url("~@/assets/images/home-images/to-right.png") no-repeat center 100%;
          cursor: pointer;
        }
        .el-tabs{
          .el-tab-pane{
            .pane-list-1{
              height: 700px;
              width: 1480px;
              margin-top: 5px;
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: repeat(3, 1fr);
              grid-column-gap: 0;
              grid-row-gap: 10px;
              position: relative;
            }
          }
        }
      }
    }
    .right{
      width: 276px;
      height: auto;
      position: absolute;
      top: 285px;
      right: 60px;

      #right-panel-title{
        width: 99px;
        height: 25px;
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bolder;
        color: #333333;
        position: relative;
        padding-left: 10px;

        &::before{
          content: '';
          height: 25px;
          width: 6px;
          display: block;
          position: absolute;
          top: 5px;
          left: -5px;
          background: url("~@/assets/images/home-images/main-value.png") no-repeat center 100%;
        }
      }
    }
  }
  footer{
    position: absolute;
    bottom: 0;
    height: 30px;
    width: 100%;
    ul{
      width: 200px;
      height: 30px;
      display: flex;
      justify-content: start;
      margin: 0 auto;
      position: relative;
      left: -50px;

      li{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #e4e4e4;
        margin-left: 10px;
        cursor: pointer;
        transition: width 0.3s;
      }
      .page-item-active{
        width: 28px;
        border-radius: 50px;
        background-color: #2d85f6;
        transition: width 0.3s;
      }
    }
  }
}
</style>
