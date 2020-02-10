<template>
    <div>
        <china_domestic></china_domestic>
        <div class='pad20'>
            <i class='el-icon-info'></i>
            数据说明
        </div>
        <div class='btn_box'>
            <el-button>同乘查询</el-button>
            <el-button>全国发热门诊</el-button>
            <el-button>肺炎权威解读</el-button>
            <el-button>免费问医生</el-button>
        </div>
        <div>
            <mymap></mymap>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import china_domestic from './china_domestic.vue'
import {getChinaData} from '@/api'
import mymap from './map'
export default {
    name: 'yqdt',
    data() {
        return {
        
        }
    },
    created() {
        // 把后台给的数据存储到 vuex中
        getChinaData().then((data)=>{
            this.$store.dispatch('getChinaData',data)
        })
    },
    components: {
        china_domestic,mymap
    }
}
</script>
<style lang="less">
.pad20{
    padding: 20px;
}
    .btn_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        button{
            display: block;
            width: 300px;
            margin: 10px 20px;
            margin-left: 0;
            float: left;
        }
    }
</style>