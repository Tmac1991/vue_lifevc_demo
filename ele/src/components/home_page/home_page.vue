<template>
  <div>
    <div class="wrap-heard">
      <div class="header_logo">
      </div>
      <router-link to="/allproduct">
        <div class="header_icon">
        </div>
      </router-link>
      <div class="header_nav">
        <ul >
          <router-link to="/homePage/page_content"><li>首页</li></router-link>
          <router-link to="/homePage/newProduct"><li>新品</li></router-link>
          <router-link to="/homePage/housework"><li>家务</li></router-link>
          <router-link to="/homePage/toCook"><li>下厨</li></router-link>
          <router-link to="/homePage/homeClothes"><li>家居服</li></router-link>
          <router-link to="/homePage/life"><li>生活</li></router-link>
          <router-link to="/homePage/softOutfit"><li>软装</li></router-link>
          <router-link to="/homePage/bedding"><li>床品</li></router-link>
          <router-link to="/homePage/workAndTravel"><li>工作和旅行</li></router-link>
          <router-link to="/knowLifevc"><li>了解LifeVC</li></router-link>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import pagecontent from '../page_content/pege_content.vue'
    export default{
        components:{
          pagecontent
        }
    }

</script>

<style>
  .wrap-heard{
    height: 48px;
    width: 100%;
    background: #88C13E;
    position: fixed;
    top: 0;
    z-index: 150;
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
    overflow-x: scroll;
    background: white;
  }
  .header_nav ul{
    height: 48px;
    width: 800px;
    overflow:hidden;
  }
  .header_nav ul li{
    width:80px;
    height: 48px;
    float: left;
    text-align: center;
    line-height: 48px;
    font-size: 13px;
  }
</style>
