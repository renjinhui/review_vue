<template>
    <div class="list_box">
        <ul class="til">
          <li class="sort">排名</li>
          <li class="name">城市名称</li>
          <li class="percent">{{data.myIndex ? '迁出' : '迁入'}}比例</li>
        </ul>
        <ul class="body">
          <li v-for='(item,index) in data' @click='go(item)'>
            <div class="sort">{{index+1}}</div>
            <div class="name">{{item.city_name}} <span>({{item.province_name}})</span></div>
            <div class="percent">{{item.value}}%</div>
          </li>
        </ul>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'mylist',
    props:['data'],
    data() {
        return {
        
        }
    },
    methods: {
      go(item){
        window.open('https://qianxi.baidu.com/?from=shoubai#city='+item.city_code)
      }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
  .list_box{
    width: 650px;
    margin: 20px auto;
    ul{
      list-style: none;
    }
    .til,.body li{
      display: flex;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #d5dbdf;
      .sort,.percent{
        width: 80px;
      }
      .name{
        flex: auto
      }
    }
    
  }
</style>