<template>
  <div class="register-wrap">
    <div class="login-log">
      <router-link to="/usercenter">
        <div class="login-back">
          <img src="./image/login.png" alt="">
        </div>
      </router-link>
    </div>
    <div class="bg-wrap">
      <div class="login_content">
        <h1>新用户注册</h1>
        <div class="login-form">
          <ul class="fm_list">
            <li >
              <input  type="tel"  placeholder="请输入手机号" class="field-ipt">
            </li>
            <li>
              <input  placeholder="请设置6-20位密码,包含字母、数字或符号" class="field-ipt-login">
            </li>
            <li>
              <input type="text" placeholder="请输入图形验证码" class="field-ipt">
              <img src="http://account.lifevc.com/Account/NewVerifyCode?t=1499823458865" class="graph-code">
              <img src="./image/loop.png" class="loop">
            </li>
            <li>
              <input type="text" placeholder="请输入手机验证码" class="field-ipt">
              <a href="#" class="phone-code">获取验证码</a>
            </li>
          </ul>
          <p class="trouble">遇到问题？请 <a href="">联系客服</a></p>
          <input type="button" value="注册" class="btn-login">
          <router-link to="/login">
            <input type="button" value="登录" class="btn-register">
          </router-link>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

    export default{}

</script>

<style>
  .register-wrap{
    position: relative;
    z-index: 61;
  }
  .login-log{
    width: 100%;
    height:141px ;
    position: relative;
  }
  .login-back{
    width: 26px;
    height: 26px;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 14px;
    top: 46px;
    border: 1px solid #3aad36;
  }
  .login-back:after{
    content: "";
    width: 14px;
    height: 14px;
    display: block;
    border-left: 1px solid #3aad36;
    border-top: 1px solid #3aad36;
    position: absolute;
    left: 10px;
    top: 5px;
    -webkit-transform: rotate(-45deg);
  }
  .login-back img{
    width: 120px;
    height: 61px;
    overflow: hidden;
    display: block;
    position: absolute;
    top: 10%;
    left: 112px;
  }
  .bg-wrap{
    width:100%;
    height:526px;
    background: url("./image/login-big-bg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    margin-bottom:56px;
  }
  .login_content{
    width:100%;
    height: 325px;
  }
  .login_content h1{
    width: 100%;
    height: 84px;
    text-align: center;
    color: #037049;
    font-size: 20px;
    line-height: 84px;
    box-sizing: border-box;
  }
  .login-form{
    width: 100%;
    height: 152px;
  }
  .fm_list li{
    width: 337px;
    height: 51px;
    border-bottom: 1px solid #dbdbdb;
    margin:auto;
  }
  .field-ipt{
    font-size: 16px;
    width: 337px;
    height: 50px;
    box-sizing: border-box;
    background: transparent;
    position: relative;
    outline: none;
  }
  .field-ipt-login{
    font-size: 16px;
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    background: transparent;
    position: relative;
    outline: none;
  }
  .btn-login{
    width: 80%;
    overflow: hidden;
    display: block;
    outline: none;
    text-align: center;
    font-size: 19px;
    color: #fff;
    line-height: 38px;
    letter-spacing: 20px;
    text-indent: 20px;
    box-sizing: border-box;
    margin: 0 auto .3rem;
    background-color: #3aad36;
    border: 1px solid #3aad36;
    border-radius: 5px;
  }
  .graph-code{
    width: 67px;
    height: 24px;
    border-left: 0px solid silver;
    position: absolute;
    margin-top: -36px;
    margin-left: 225px;
  }
  .phone-code{
    display: inline-block;
    float: right;
    position: absolute;
    margin-top: -42px;
    margin-left: 225px;
    font-size: 16px;
    color: #3aad36;
    border: 1px solid #3aad36;
    border-radius: 4px;
    text-align: center;
    padding: 8px 12px;
  }
  .loop{
    width: 16px;
    height: 16px;
    position: absolute;
    margin-top: -32px;
    margin-left: 307px;
  }
  .btn-register{
    margin: 10px auto 0;
    background-color: #8a8a8a;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    opacity: .5;
    width: 80%;
    overflow: hidden;
    display: block;
    outline: none;
    text-align: center;
    font-size: 19px;
    color: #fff;
    line-height: 38px;
    letter-spacing: 20px;
    text-indent: 20px;
    box-sizing: border-box;
  }
  .trouble{
    font-size: 14px;
    color: #666;
    width: 100%;
    height: 21px;
    text-align: center;
    line-height: 21px;
    padding: 5px 0 5px;
  }
  .trouble a{
    color: #3ea438;
    text-decoration: underline;
  }
</style>
