<template>
  <div>
    <div id="nav">
      <router-link to="/yqdt">疫情动态</router-link> |
      <router-link to="/qxmap">迁徙地图</router-link> |
      <router-link to="/hotsearch">全民热搜</router-link> |
      <router-link to="/news">实时直播</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "INDEX",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
</style>