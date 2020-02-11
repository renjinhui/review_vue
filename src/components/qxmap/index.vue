<template>
    <div class='qxmapBox'>
        <h1>全国迁徙热门城市</h1>
        <pre><div class='timeBox'>2020.2.9更新  来自百度地图</div></pre>
        <switchtab></switchtab>
        迁徙地图
    </div>
</template>
<script>
// @ is an alias to /src
import { moveInOut } from "@/api";
import switchtab from './switchTab.vue'
export default {
    name: 'qxmap',
    data() {
        return {
        
        }
    },
    created() {
        moveInOut().then(data=>{
            console.log(data)
        })
    },
    components: {
        switchtab
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