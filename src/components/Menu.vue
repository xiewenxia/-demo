<template>
  <section class="cns-main-menu">
    <Menu :theme="theme1">
      <template v-for="(item, key) in menus">
        <template v-if="!item.children" >
          <MenuItem :name="key" :key="key" >
            <Icon type="ios-paper" />
            <router-link :to="{ path: item.path }">
              <span>{{ item.title }}</span>
            </router-link>
          </MenuItem>
        </template>
        <template v-else>
          <Submenu :name="key" :key="key">
            <template slot="title">
              <Icon type="ios-paper" />
              {{item.title}}
            </template>

            <MenuItem  v-for="value in item.children" :name="value.key" :key="value.key">
                <Icon type="ios-paper" />
                <router-link :to="{ path: value.path }">
                <span>{{ value.title }}</span>
            </router-link>
            </MenuItem>
          </Submenu>
        </template>
      </template>
    </Menu>
  </section>
</template>

<script>
export default {
  name: "MenuMain",
  data: function() {
    return {
      theme1: "light",
      menus: [
        {
          key: "Micor",
          title: "微服务管理",
          path: "/micro",
          name: "Micro",
          children:[
            {
              key: "serveList",
              title: "服务列表",
              path: "/mserve",
              name: "serveList",
            }
          ]
        },
        {
          key: "Logs",
          title: "统一日志",
          path: "/mlogs",
          name: "Logs",
        },
        {
          key: "Store",
          title: "组件商店",
          path: "/mstore",
          name: "Store",
        },
        
      ],
    };
  },
};
</script>

<style lang="less" scoped>

</style>
