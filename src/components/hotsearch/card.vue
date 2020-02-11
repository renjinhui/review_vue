<template>
  <div class='card_box'>
    <h1>{{title}}</h1>
    <ul class="hotlist">
      <li v-for='(item,index) in list' :key='index'>
        <a :href='item.url|url'>
          <span>{{index+1}}</span>
          <span>{{item.query}}</span>
          <span>{{item.degree}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "mycard",
  props:['title','list'],
  data() {
    return {};
  },
  filters:{
    url(str){
      // strhttps://m.baidu.com/s?word=%E6%B9%96%E5%8C%97%E4%BB%A5%E5%A4%96%E5%9C%B0%E5%8C%BA%E6%96%B0%E5%A2%9E%E7%97%85%E4%BE%8B%E8%BF%9E%E9%99%8D%E4%B8%83%E5%A4%A9&sa=osari_hotword_9
      return str.replace(/m\./g,'')
    }
  },
  components: {}
};
</script>
<style lang="less">
.card_box {
  width: 700px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  background: #eee;
  box-sizing: border-box;
  h1 {
    text-align: center;
    position: relative;
    height: 50px;
    line-height: 50px;
    &::before,
    &::after {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #444;
      border-radius: 50%;
      margin: 5px 20px;
    }
  }
  .hotlist{
    list-style: none;
    li{
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #d4cece;
      a{
        display: block;
        height: 100%;
        text-decoration: none;
        color:#333;
      }
      span{
        display: inline-block;
      }
      span:nth-child(1){
        width: 30px;
      }
      span:nth-child(2){
        font-size: 20px;
        font-weight:600;
      }
      span:nth-child(3){
        font-size:13px;
        color:rgb(153, 151, 150);
        padding-left: 5px;
      }
    }
  }
}
</style>