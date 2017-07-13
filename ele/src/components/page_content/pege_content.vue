<template>
    <div>
      <div class="carousel">
        <Swipe :auto="3000">
          <SwipeItem><img src="../../Lifevc_image/1.jpg" alt=""></SwipeItem>
          <SwipeItem><img src="../../Lifevc_image/2.jpg" alt=""></SwipeItem>
          <SwipeItem><img src="../../Lifevc_image/3.jpg" alt=""></SwipeItem>
          <SwipeItem><img src="../../Lifevc_image/4.jpg" alt=""></SwipeItem>
          <SwipeItem><img src="../../Lifevc_image/6.jpg" alt=""></SwipeItem>
          <SwipeItem><img src="../../Lifevc_image/7.jpg" alt=""></SwipeItem>
        </Swipe>
      </div>
      <div class="img-wrap"></div>
      <div class="holiday_start"></div>
      <div class="new_product"></div>
      <div class="integration_buy"></div>
      <div class="old_member"></div>
      <div class="experience"></div>
      <div class="house_work"></div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Mint from 'mint-ui';
  import 'mint-ui/lib/style.css';
  import { Swipe, SwipeItem } from 'mint-ui';
    export default{
      components:{
        Swipe,
        SwipeItem
      }
    }

</script>

<style>
  .carousel{
    margin-top: 96px;
    width:375px;
    height: 250px;
  }
  .carousel img{
    width: 100%;
    height: 100%;
  }
  .img-wrap{
    width: 100%;
    height: 90px;
    background-image: url("../../Lifevc_image/b6b9a0221e3b47b7a92b36201272f9e6_d1242x0.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position:center ;
  }
  .holiday_start{
    margin-top: 10px;
    width: 100%;
    height: 150px;
    background-image: url("../../Lifevc_image/9518bc17021a40d28bffa8eb521f6878_d1242x0.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .new_product{
    height: 925px;
    width: 100%;
    background:url("../../Lifevc_image/c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .integration_buy{
    height: 260px;
    width: 100%;
    background:url("../../Lifevc_image/7d75b0fe2e8244bdbad79f4b39f8b62f_d1242x0.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position:center ;
    background-color: #eee;
  }
  .old_member{
    height: 310px;
    width: 100%;
    background:url("../../Lifevc_image/3cea975b99f9458198e9ed706af9b391_d1242x0.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position:center ;
    background-color: #eee;
  }
  .experience{
    height: 120px;
    width: 100%;
    background:url("../../Lifevc_image/fdbd35036c1c485b975a85ff7572708b_d1242x0.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position:center ;
  }
  .house_work{
    height: 689px;
    width: 100%;
    background:url("../../Lifevc_image/3da3d66f3c934a1285dd686cb28a1c90_d1242x0.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position:center ;
  }
</style>
