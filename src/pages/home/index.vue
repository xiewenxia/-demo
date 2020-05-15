<template>
  <div>
    <section class="home-container">
      微服务面包屑 / 子路由
    </section>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components:{
  },
  props: {
    msg: String
  },
  computed:{
  },
  
}
</script>

<style  scoped>
.home-container {
    height: 40px;
    line-height: 40px;
    padding-left: 24px;
    box-shadow: 0 2px 1px #e6e2e2;
}
</style>
