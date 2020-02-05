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
        疫情动态
        <div>
            <mymap></mymap>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import china_domestic from './china_domestic.vue'
import mymap from './map'
import 'echarts/map/js/china.js'
export default {
    name: 'yqdt',
    data() {
        return {
        
        }
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