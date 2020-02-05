<template>
  <div class='contentBox'>
    <section class=titleBox>
      <h5>新型冠状病毒肺炎</h5>
      <h1>疫情实时大数据报告</h1>
    </section>
    <section class='bodyBox'>
      <div id="nav">
        <div><router-link to="/yqdt">疫情动态</router-link></div>
        <div><router-link to="/qxmap">迁徙地图</router-link></div>
        <div><router-link to="/hotsearch">全民热搜</router-link></div>
        <div><router-link to="/news">实时直播</router-link></div>
      </div>
      <router-view></router-view>
    </section>

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
.contentBox {
  width: 768px;
  margin: auto;
  .titleBox {
    height: 200px;
    color: #fff;
    h5 {
      padding: 36px;
    }
    h1 {
      padding: 12px;
    }
  }
  .bodyBox {
    border-radius: 5px;
    background-color: #fff;
  }
  #nav {
    display: flex;
    height: 50px;
    align-items: center;
    border-bottom: 1px solid #eee;
    div {
      flex: 1;
      text-align: center;
    }
    a{
       text-decoration: none;
       display: inline-block;
       height: 30px;
       border-bottom: 3px solid transparent;
    }
    a.router-link-active {
      font-weight: 700;
      color: #10aeb5;
      border-bottom: 3px solid #10aeb5;
    }
  }
}
</style>