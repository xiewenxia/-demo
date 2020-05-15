<template>
  <div id="frame">
    <section class="chi-menu-wrapper" v-if="!qiankun">
      <main-menu />
    </section>
    <section class="chi-frame-wrapper">
      <router-view ></router-view>
    </section>
    
  </div>
</template>

<script>
import MainMenu from './components/Menu.vue'
export default {
  name: "App",
  props: {
    loading: Boolean,
    content: String,
  },
  data(){
    return {
      qiankun: this.qiankun
    }
  },
  components:{
    MainMenu
  },
  mounted(){

    // console.log(this,this.qiankun,'+++++++++++')
  }
};
</script>
<style  scoped>
#frame {
    display: flex;
    width: 100%;
    height: 100%;
}
.chi-menu-wrapper{
  width: 240px;
  height: 100%;
  border-right: 1px solid #ccc;
}
.chi-frame-wrapper{
  flex:1;
  height: 100%;
}
</style>
