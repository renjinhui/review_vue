<template>
    <div class='qxmapBox'>
        <h1>全国迁徙热门城市</h1>
        <pre><div class='timeBox'>{{time}}更新  来自百度地图</div></pre>
        <switchtab 
            :list="['热门迁入地','热门迁出地']" 
            @change='change'></switchtab>
        <mylist :data='list' ></mylist>
    </div>
</template>
<script>
// @ is an alias to /src
import { moveInOut } from "@/api";
import switchtab from './switchTab.vue'
import mylist from './list.vue'
export default {
    name: 'qxmap',
    data() {
        return {
            moveInList:[],
            moveOutList:[],
            list:[],
            time:''
        }
    },
    created() {
        moveInOut().then(data=>{
            console.log(data)
            this.list = this.moveInList = data.result.moveInList || [];
            this.moveOutList = data.result.moveOutList;
            this.time = data.result.time.replace(/(\d{4})(\d{2})(\d{2})/,'$1年$2月$3日')
        })
    },
    methods: {
        change(index,item){
            index ? this.list = this.moveOutList : this.list = this.moveInList
            this.list.myIndex = index;
        }
    },
    components: {
        switchtab,mylist
    }
}
</script>
<style lang="less">
    .qxmapBox{
        width: 700px;
        margin: 10px auto;
        border-radius: 10px;
        background: #eee;
        h1{
            text-align: center;
            position: relative;
            height: 50px;
            line-height: 50px;
            &::before,&::after{
                content: '';
                display: inline-block;
                width: 8px;
                height: 8px;
                background: #444;
                border-radius: 50%;
                margin: 5px 20px;
            }
        }
        .timeBox{
            text-align: center;
            font-size:15px;
            color: #bbb;
        }
    }
</style>