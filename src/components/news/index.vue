<template>
    <div class='news_box'>
        <h2>实时播报</h2>
        <timeline></timeline>
        <timeline></timeline>
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
        
        }
    },
    created() {
        getZbData().then(data=>{
            console.log(data)
        })
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