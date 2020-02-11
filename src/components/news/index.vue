<template>
    <div class='news_box'>
        <h2>实时播报</h2>
        <timeline 
            v-for='(item,index) in list' 
            :key='item.time'
            :url='item.eventUrl' 
            :time='item.eventTime'>{{item.eventDescription}}</timeline>
        <el-button @click='fn'>{{str}}</el-button>    
    </div>
</template>
<script>
// @ is an alias to /src
import { getZbData } from "@/api";
import timeline from './timeline.vue'
export default {
    name: 'news',
    data() {
        return {
            allList:[],
            list:[],
            str:"点击显示更多"
        }
    },
    created() {
        getZbData().then(data=>{
            console.log(data)
            this.allList = data.items;
            this.list = this.allList.slice(0,10);
        })
    },
    methods: {
        fn(){
            if(this.list.length > 10){
                this.list = this.allList.slice(0,10);
                this.str = '点击显示更多'
            }else{
                this.list = this.allList.slice(0);
                this.str = '点击收回'
            }
        }
    },
    components: {
        timeline
    }
}
</script>
<style lang="less">
    .news_box{
        width: 700px;
        margin: 20px auto;
        padding-bottom: 50px;
        h2{
            padding: 0 0 20px 0;
        }
    }
</style>