<template>
  <div class="bottom_bar">
    <ul class="footer_menu_nav">
      <li>
        <router-link to="/homePage/page_content">
          <div>
            <img src="./homeico.png">
          </div>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/allproduct">
          <div >
            <img src="./typeico.png">
          </div>
          <span>全部产品</span>
        </router-link>
      </li>
      <li>
        <router-link to="/stroll">
          <div>
            <img src="./strollico.png">
          </div>
          <span>闲逛</span>
        </router-link>
      </li>
      <li>
        <router-link to="/shopcart">
          <div>
            <img src="./shoppingcartico.png">
          </div>
          <span>购物车</span>
        </router-link>
      </li>
      <li>
        <router-link to="/usercenter">
          <div>
            <img src="./accountcenterico.png">
          </div>
          <span>账户中心</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

    export default{}

</script>

<style>
  .bottom_bar{
    height: 55px;
    position: fixed;
    bottom: 0;
    z-index: 50;
    width: 100%;
    background: #f8f8f8;
    border-top: 1px solid #ddd;
  }
  .footer_menu_nav li{
    text-align: center;
    float: left;
    width: 20%;
  }
  .footer_menu_nav img{
    margin-top: 8px;
    height:27% ;
    width:27% ;
  }
  .footer_menu_nav li span{
    display: inline-block;
    margin-top: 4px;
    font-size: 10px;
  }
</style>
