<template>
    <div class="login-wrap">
        <div class="login-log">
            <router-link to="/usercenter">
              <div class="login-back">
                <img src="./image/login.png" alt="">
              </div>
            </router-link>
        </div>
        <div class="bg-wrap">
          <div class="login_content">
            <h1>老用户登录</h1>
            <div class="login-form">
              <ul class="fm_list">
                <li >
                  <input  type="tel"  placeholder="请输入手机号" class="field-ipt">
                </li>
                <li>
                  <input  type="tel"  placeholder="请输入登录密码" class="field-ipt-login">
                  <a href="#" class="fidld-skip">忘记密码</a>
                </li>
              </ul>
              <div class="call-login">手机号快捷登录></div>
            </div>
            <input type="button" value="登录" class="btn-login">
            <router-link to="/register">
              <input type="button" value="注册" class="btn-register">
            </router-link>

          </div>

        </div>
    </div>
</template>

<script>
  export default{}

</script>

<style>
  .login-wrap{
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
  }
  .fidld-skip{
    font-size: 16px;
    color: #3aad36;
    border: 1px solid #3aad36;
    border-radius: 4px;
    padding: 8px 15px;
    text-align: center;
    position: absolute;
    right: 0;
    margin-top: 8px;
    margin-right: 19px;
  }
  .field-ipt-login{
    font-size: 16px;
    width: 281px;
    height: 50px;
    box-sizing: border-box;
    background: transparent;
    position: relative;
  }
  .call-login{
    width: 35%;
    height: 50px;
    float: right;
    line-height: 50px;
    font-size: 14px;
    color: #3aad36;;
    letter-spacing: 1px;
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
</style>
