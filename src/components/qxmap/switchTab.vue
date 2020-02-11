<template>
    <div class='switchBox' @click='move'>
        <ul>
          <li>热门迁入地</li>
          <li>热门迁出地</li>
        </ul>
        <div class="tabBar" :style="{transform:`translateX(${x}px)`}">{{tabAry[index]}}</div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
          x:0,
          tabAry:['热门迁入地','热门迁出地'],
          index:0
        }
    },
    components: {
        
    },
    methods: {
      move(){
        if(this.x){
          this.x = 0;
          this.index = 0;
        }else{
          this.x = 324
          this.index = 1;
        }
        // this.x ? this.x = 0 : this.x = 324
      }
    },
}
</script>
<style lang="less">
  .switchBox{
    width: 650px;
    box-sizing: border-box;
    height: 46px;
    background: #e3e6eb;
    border-radius: 5px;
    position: relative;
    margin: auto;
    cursor: pointer;
    user-select: none;
    ul{
      display: flex;
      list-style: none;
      li{
        flex:1;
        text-align: center;
        line-height: 46px;
        font-size: 19px;
      }
    }
    .tabBar{
      position: absolute;
      top:3px;
      left: 3px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      font-weight:600;
      width: 320px;
      background: #fff;
      border-radius: 5px;
      // translateX(324px)
      transition: all 0.4s;
    }
  }
</style>