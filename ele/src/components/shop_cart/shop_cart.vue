<template>
    <div>
      <div class="header-shop-cart">
          <span @click="back"></span>
        <p>购物车</p>
      </div>
      <div class="header-login-wrap">
        <router-link to="/login">
          <button class="login">登录</button>
        </router-link>
        <span>你可以在登录后同步电脑与手机购物车中的商品</span>
      </div>
      <div class="exchange">
        <input type="text" id="exchange-input" placeholder="礼品兑换处，请输入兑换码">
        <button>兑换</button>
      </div>
      <div class="wrap-nodata">
        <img src="./image/shopcart.png" alt="">
        <p>您的购物车还是空荡荡的</p>
        <div class="shopping">
          <a href="/#">赶紧去逛逛</a>
        </div>
      </div>
      <div class="cart-title">
        <p>Rico.S为你精心推荐</p>
      </div>
      <div class="wrap-cart">
        <div class="cart-list" ref="cartlist">
          <ul class="cart-list-content" >
            <li class="first-good">
              <div class="cart-list-item" >
                <img src="./image/D1610291615001555_d230x230.jpg" alt="">
              </div>
              <p class="item-direction">自粘式缝隙贴(2卷装)</p>
              <p class="price">￥19</p>
            </li>
            <li class="first-good">
              <div class="cart-list-item" >
                <img src="./image/D1508271208278864_d230x230.jpg" alt="">
              </div>
              <p class="item-direction">自粘式缝隙贴(2卷装)</p>
              <p class="price">￥19</p>
            </li>
            <li class="first-good">
              <div class="cart-list-item" >
                <img src="./image/D1704201923204119_d230x230.jpg" alt="">
              </div>
              <p class="item-direction">自粘式缝隙贴(2卷装)</p>
              <p class="price">￥19</p>
            </li>
            <li class="first-good">
              <div class="cart-list-item" >
                <img src="./image/D1705041713502720_d230x230.jpg" alt="">
              </div>
              <p class="item-direction">自粘式缝隙贴(2卷装)</p>
              <p class="price">￥19</p>
            </li>
            <li class="first-good">
              <div class="cart-list-item" >
                <img src="./image/D1705041713502720_d230x230.jpg" alt="">
              </div>
              <p class="item-direction">自粘式缝隙贴(2卷装)</p>
              <p class="price">￥19</p>
            </li>
            <li class="first-good">
              <div class="cart-list-item" >
                <img src="./image/D1610291615001555_d230x230.jpg" alt="">
              </div>
              <p class="item-direction">自粘式缝隙贴(2卷装)</p>
              <p class="price">￥19</p>
            </li>
            <li class="first-good">
              <div class="cart-list-item" >
                <img src="./image/D1705041713502720_d230x230.jpg" alt="">
              </div>
              <p class="item-direction">自粘式缝隙贴(2卷装)</p>
              <p class="price">￥19</p>
            </li>
            <li class="first-good">
              <div class="cart-list-item" >
                <img src="./image/D1610291615001555_d230x230.jpg" alt="">
              </div>
              <p class="item-direction">自粘式缝隙贴(2卷装)</p>
              <p class="price">￥19</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import BScroll from 'better-scroll'
    export default{
        methods:{
          back(){
            history.back();
          },
          _createdCartList(){
              new BScroll(this.$refs.cartlist,{
                click: true,
                scrollX:true
              })
          }
        },
        created(){
              Vue.nextTick(()=>{
                this._createdCartList()
              })
          }
    }

</script>

<style>
  .header-shop-cart{
    width: 100%;
    height: 48px;
    background: #88C13E
  }
  .header-shop-cart p{
    width: 340px;
    height: 48px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    margin: 0 auto;
    line-height: 48px;
    float: right;
  }
  .header-shop-cart span {
    display: inline-block;
    height: 48px;
    width: 35px;
    background: url("./image/5.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35%;
  }
  .header-login-wrap{
    width: 100%;
    height: 36px;
    padding:  10px 0 5px;;
    background-color: #f0fae6;
    position: relative;
  }
  .login{
    width: 18%;
    height: 35px;
    display: block;
    background: #fff;
    border: 1px solid #8bc146;
    text-align: center;
    font-size: 15px;
    color: #88c13e;
    line-height: 35px;
    position: absolute;
    margin-left: 9px;
  }
  .header-login-wrap span{
    width: 76%;
    height: 35px;
    float: right;
    font-size: 15px;
    position: absolute;
    right: 6px;
  }
  .exchange{
    width: 100%;
    height: 58px;
    position: relative;
  }
  #exchange-input{
    display: inline-block;
    height: 35px;
    width: 290px;
    text-align: center;
    border: 1px solid #e7e7e7;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 1px;
  }
  .exchange button{
    display: inline-block;
    width: 18%;
    height: 37px;
    background: #fff;
    border: 1px solid #8bc146;
    text-align: center;
    font-size: 15px;
    color: #88c13e;
    line-height: 35px;
    position: absolute;
    margin-top: 10px;
  }
  .wrap-nodata{
    width:100%;
    height: 237px;
    background-color: #eee;
    text-align: center;
  }
  .wrap-nodata img{
    width: 45%;
  }
  .wrap-nodata p {
    font-size: 20px;
    color: rgb(102, 102, 102);
  }
  .shopping{
    width: 100%;
    height: 40px;
    margin-top: 6px;
  }
  .wrap-nodata a{
    border: 1px solid rgb(137, 190, 72);
    padding: 8px 17px;
    display: inline-block;
    border-radius: 6px;
    letter-spacing: 1px;
    color: rgb(137, 190, 72);
    margin-right: 30px;
  }
  .cart-title{
    width: 100%;
    height:44px;
    border-bottom: 1px solid #f2f2f2;
  }
  .cart-title p{
    width: 352px;
    height:24px;
    font-size: 17px;
    color: #333;
    padding-top: 13px;
    padding-left: 11px;
  }
  .cart-list{
    height:164px ;
    width:100% ;
  }
  .cart-list-content{
    width: 850px;
    height: 96px;
    padding: 10px 0 10px;
  }
  .cart-list-content li {
    float: left;
  }
  .cart-list-content img{
    width: 96px;
    height: 96px;
  }
  .first-good{
    margin-left: 10px;
  }
  .item-direction{
    width: 96px;
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .price{
    font-size: 12px;
  }
</style>
