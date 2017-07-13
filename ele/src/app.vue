<template>
  <div>
    <el-footer></el-footer>
    <router-view></router-view>
  </div>
</template>

<script>
  import homepage from './components/home_page/home_page.vue'
  import footer from './components/footer/footer.vue'
export default {
    components:{
      'el-footer': footer
    }
}
</script>

<style>
.active{
  color: green;
}
</style>
