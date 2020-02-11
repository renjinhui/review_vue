<template>
    <div>
        <mycard :title="todayTitle" :list='todayList'></mycard>
        <mycard :title="studyTitle" :list='studyList'></mycard>
        <mycard :title="knowTitle" :list='knowList'></mycard>
        <mycard :title="layTitle" :list='layList'></mycard>
    </div>
</template>
<script>
// @ is an alias to /src
import mycard from './card.vue'
import { getHotData } from "@/api";
export default {
    name: 'hotsearch',
    data() {
        return {
            todayList:[],
            studyList:[],
            knowList:[],
            layList:[],
            todayTitle:'',
            studyTitle:'',
            knowTitle:'',
            layTitle:'',
        }
    },
    created() {
        getHotData().then(data=>{
            this.todayList = data[0].list[0].item;
            this.studyList = data[0].list[3].item;
            this.knowList = data[0].list[1].item;
            this.layList = data[0].list[2].item;
            this.todayTitle = data[0].list[0].title;
            this.studyTitle = data[0].list[3].title;
            this.knowTitle = data[0].list[1].title;
            this.layTitle = data[0].list[2].title;
        })
    },
    components: {
        mycard
    }
}
</script>
<style lang="less">

</style>