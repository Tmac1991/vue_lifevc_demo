<template>
    <div>
     <div class="header-content">
       <p>账户中心</p>
       <a href="#">设置</a>
     </div>
      <div class="acct-user-wrap">
        <div class="acct-nolog">
          <span>您还未登录</span>
          <div class="btn-entry">
            <router-link to="./login">
              <a href="#" class="user-login">登录</a>
            </router-link>
            <span>|</span>
            <router-link to="./register">
              <a href="#" class="user-register">注册</a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="dashboard-order">
        <ul class="order-top">
          <li>
            <span class="left-span">
              <img src="./image/e7bkuvm6nmr8w20s8rqi6xjc8t0d7mc7.png" alt="">
            </span>
            <span class="right-span">待支付</span>
          </li>
          <li>
            <span class="left-span">
              <img src="./image/lueywd27sw4eihb4hg679tkvkdcl6o5w.png" alt="">
            </span>
            <span class="right-span">待发货</span>
          </li>
          <li>
            <span class="left-span">
              <img src="./image/iu1wa0qys7w0xuwcf833gmjxsavnbgsp.png" alt="">
            </span>
            <span class="right-span">待收货</span>
          </li>
        </ul>
        <ul class="order-bottom">
          <li>
            <span class="left-span">
              <img src="./image/1s3l2afsotzwtoqt9r6b73gbrf5ld65b.png" alt="">
            </span>
            <span class="right-span">待评论</span>
          </li>
          <li>
            <span class="left-span">
              <img src="./image/caaz7vu9ru06i162n3o8d151tegth67y.png" alt="">
            </span>
            <span class="right-span">回复</span>
          </li>
          <li >
            <span class="left-span">
              <img src="./image/pk2wd1s7b5cbjqgs7bbixn08o7te36n4.png" alt="">
            </span>
            <span class="right-span">退换货</span>
          </li>
        </ul>
      </div>
      <div class="dashboard">
        <div class="my-order">
          <img src="./image/ic_list_cm.png" alt="">
          <span>我的订单</span>
          <span class="arr-r"></span>
        </div>
        <ul class="my-order-2">
          <li>
            <div class="my-order-list">
              <img src="./image/ic_coupon_cm.png" alt="">
              <span>我的优惠券</span>
              <span class="arr-r"></span>
            </div>
          </li>
          <li>
            <div class="my-order-list">
              <img src="./image/ic_pig_cm.png" alt="">
              <span>现金积分</span>
              <span class="arr-r"></span>
            </div>
          </li>
          <li>
            <div class="my-order-list">
              <img src="./image/ic_invoice.png" alt="">
              <span>关于发票</span>
              <span class="arr-r"></span>
            </div>
          </li>
        </ul>
        <ul class="my-order-3">
          <li>
            <div class="my-order-list">
              <img src="./image/xbrnuwbhcwcpxd630aazazxi9a8vqwzp.png" alt="">
              <span>密码和登录信息</span>
              <span class="arr-r"></span>
            </div>
          </li>
          <li>
            <div class="my-order-list">
              <img src="./image/i_dialoguebubble3_cm.png" alt="">
              <span>老会员建议</span>
              <span class="arr-r"></span>
            </div>
          </li>
          <li>
            <div class="my-order-list">
              <img src="./image/i_customerservice_cm.png" alt="">
              <span>客户服务</span>
              <span class="arr-r"></span>
            </div>
          </li>
          <li>
            <div class="my-order-list">
              <img src="./image/ic_currentnode_cm.png" alt="">
              <span>地理管理</span>
              <span class="arr-r"></span>
            </div>
          </li>
          <li>
            <div class="my-order-list">
              <img src="./image/sms_cm.png" alt="">
              <span>手机验证</span>
              <span class="arr-r"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

    export default{}

</script>

<style scoped="true">
  .header-content{
    position: fixed;
    top:0;
    left:0;
    z-index: 30;
  }
  .header-content p {
    width: 300px;
    height: 48px;
    margin: 0 auto;
    line-height: 48px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .header-content a{
    font-size: 18px;
    color: #fff;
    line-height: 48px;
    margin-right: 2%;
    position: absolute;
    right: 2%;
    top: 0;
    z-index: 9;
  }
  .acct-user-wrap{
    width: 100%;
    height: 108px;
    background-image: url(http://i1.lifevccdn.com/images/h5/core/background.png);
    background-size: 100% 100%;
    margin-top: 48px;
  }
  .acct-nolog{
    width: 100%;
    height: 86px;
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
  }
  .acct-nolog span{
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    color: #222;
  }
  .btn-entry{
    width: 137px;
    height: 38px;
    background: hsla(0,0%,100%,.4);
    border: 1px solid #009c42;
    border-radius: 30px;
    margin: 3px auto 0;
  }
  .user-login, .user-register{
    display: inline-block;
    color: #009c42;
    padding: 0 10px;
  }
  .dashboard-order{
    width: 100%;
    height: 123px;
  }
  .order-top, .order-bottom{
    width: 100%;
    height: 61px;
    border-bottom: 1px solid #eee;
  }
  .dashboard-order li{
    width: 33%;
    height: 30px;
    float: left;
    border-right: 1px solid #dedede;
    line-height: 44px;
    margin: 18px 0 0;
    padding: 0;
    position: relative;
  }
  .left-span img{
    width: 42px;
    height: 43px;
    margin-top:-7px;
    margin-left: 18px;
  }
  .right-span{
    width: 39px;
    height: 30px;
    position: absolute;
    font-size: 13px;
    margin-top: -5px;
  }
  .dashboard{
    width: 100%;
    height: 574px;
  }
  .my-order{
    width: 100%;
    height:61px;
    border-bottom: 12px solid #eee;
    position: relative;
  }
  .my-order img{
    width: 30px;
    height:30px;
    position: absolute;
    margin-top: 15px;
    margin-left: 15px;
  }
  .my-order span{
    display: inline-block;
    line-height: 61px;
    margin-left: 55px;
  }
  .arr-r{
    width: 10px;
    height: 10px;
    display: inline-block;
    float: right;
    border-right: 2px solid #bbb;
    border-top: 2px solid #bbb;
    margin: 25px 10px 0 0;
    -webkit-transform: rotate(45deg);
  }
  .my-order-2{
    width: 100%;
    height:184px;
    border-bottom: 12px solid #eee;
  }
  .my-order-list{
    width: 100%;
    height:61px;
    border-bottom: 1px solid #eee;
    position: relative;
  }
  .my-order-list img{
    width: 30px;
    height:30px;
    position: absolute;
    margin-top: 15px;
    margin-left: 15px;
  }
  .my-order-list span{
    display: inline-block;
    line-height: 61px;
    margin-left: 55px;
  }
  .my-order-3{
    width: 100%;
    height:305px;
    margin-bottom: 56px;
    border-bottom: 12px solid #eee;
  }
</style>
