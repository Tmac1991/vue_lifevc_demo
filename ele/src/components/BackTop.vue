<template>
  <span @click.prevent="backTop">
   <slot></slot>
 </span>
</template>

<script>
  export default {

    name: 'backTop',
    props: {
      speed: {
        type: Number,
        default: 0.1
      }
    },
    methods: {
      backTop: function () {
        var that = this;
        var top = document.body.scrollTop;

        var timer = setInterval(function () {
          top -= Math.abs(top * that.speed);
          if (top <= 1) {
            top = 0;
            clearInterval(timer);
          }
          document.body.scrollTop = top;
        }, 20);
        return false;

      }
   }
 };
</script>



// WEBPACK FOOTER //
// BackTop.vue?73c0d5d0
