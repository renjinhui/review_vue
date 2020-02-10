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
        <div>
            <myline title="全国 新增确诊/疑似 趋势图" :data='dataList'></myline>
        </div>
        <div>
            <myline title="全国 累计确诊/疑似 趋势图" :data='dataList2'></myline>
        </div>
        <div>
            <myline title="全国 累计治愈/死亡 趋势图" :data='dataList3'></myline>
        </div>

        <div>
            <mytable></mytable>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import china_domestic from './china_domestic.vue'
import {getChinaData} from '@/api'
import mymap from './map'
import myline from './line'
import mytable from './mytable.vue'
export default {
    name: 'yqdt',
    data() {
        return {
            // dataList:[{til:"新增确认",list:[1,2,3,4]},{til:"新增疑似",list:[4,5,6,4,6]}]
        }
    },
    created() {
        // 把后台给的数据存储到 vuex中
        getChinaData().then((data)=>{
            this.$store.dispatch('getChinaData',data)
        })
    },
    computed: {
        dataList(){
            let history = this.$store.state.china_data.historylist||[];
            let list = history.slice(0,10);
            let sureList = list.map((item, index) => item.cn_conNum - history[index + 1].cn_conNum);
            let notSureList = list.map(item => item.wjw_susNum);
            
            return [
                {til:"新增确认",list:sureList.reverse(),color: "#e83132"},{til:"新增疑似",list:notSureList.reverse(),color: "#ec9217"}
            ]
        },
        dataList2(){
            let history = this.$store.state.china_data.historylist||[];
            let list = history.slice(0,10).reverse();
            let sureList = list.map(item=>item.cn_conNum);
            let notSureList = list.map(item => item.cn_susNum);
            
            return [
                {til:"确诊",list:sureList,color: "#e83132"},{til:"疑似",list:notSureList,color: "#ec9217"}
            ]
        },
        dataList3(){
            let history = this.$store.state.china_data.historylist||[];
            let list = history.slice(0,10).reverse();
            let sureList = list.map(item=>item.cn_cureNum);
            let notSureList = list.map(item => item.cn_deathNum);
            return [
                {til:"治愈",list:sureList,color:'#10aeb5'},{til:"死亡",list:notSureList,color:"#444"}
            ]
        }
    },
    components: {
        china_domestic,mymap,myline,mytable
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