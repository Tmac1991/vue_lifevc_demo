<template>
  <div>
    <div class="wrap-heard">
      <div class="wrap-heard-text">
        <div class="header_logo"></div>
        <router-link to="/allproduct">
          <div class="header_icon">
          </div>
        </router-link>
      </div>
      <div class="header_nav" ref="headernav">
        <ul >
          <li><router-link to="/homePage/page_content">首页</router-link></li>
          <li><router-link to="/homePage/newProduct">新品</router-link></li>
          <li><router-link to="/homePage/housework">家务</router-link></li>
          <li><router-link to="/homePage/toCook">下厨</router-link></li>
          <li><router-link to="/homePage/homeClothes">家居服</router-link></li>
          <li><router-link to="/homePage/life">生活</router-link></li>
          <li><router-link to="/homePage/softOutfit">软装</router-link></li>
          <li><router-link to="/homePage/bedding">床品</router-link></li>
          <li><router-link to="/homePage/workAndTravel">工作和旅行</router-link></li>
          <li><router-link to="/knowLifevc">了解LifeVC</router-link></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  import pagecontent from '../page_content/pege_content.vue'
  export default{
    methods:{
      _nav(){
        new BScroll(this.$refs.headernav, {
          click: true,
          scrollX:true
        })
      }
    },
    created() {
      Vue.nextTick(()=>{
        this._nav()
      })
    },
    components: {
      pagecontent
    }
  }

</script>

<style scoped="true">

  .active{
    color: #88C13E;
    border-bottom: 2px solid #88C13E;
  }
  .wrap-heard{
    height: 48px;
    width: 100%;
    background: #88C13E;
    position: fixed;
    top: 0;
    z-index: 150;
  }
  .wrap-heard-text{
    width: 100%;
    height: 48px;
  }
  .header_logo{
    text-align: center;
    width: 331px;
    height: 48px;
    background-image:url("./header_logo.png");
    background-size: 55%;
    background-repeat: no-repeat;
    background-position: center;
    float: left;
  }
  .header_icon{
    width: 44px;
    height: 48px;
    background-image: url("./header_icon.png");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    float: left;
  }
  .header_nav{
    height: 48px;
    width: 100%;
    margin-bottom: 3px;
    background: #fff;
  }
  .header_nav ul{
    height: 48px;
    width: 800px;
  }
  .header_nav ul li{
    width:80px;
    height: 48px;
    float: left;
    text-align: center;
    line-height: 48px;
    font-size: 13px;
  }
  .header_nav ul li a{
    display: block;
    width: 80px;
    height: 48px;
  }
</style>
