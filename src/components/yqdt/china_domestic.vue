<template>
    <div class='domestic_show_box'>
        <div class="title">
            <h1>国内疫情</h1>
            <p>数据更新至 {{china_data.cachetime}}</p>
        </div>
        <div class="summery_box">
            <div class="sure">
                <div class="num">{{china_data.gntotal}}</div>
                <div class="type">确诊病例</div>
                <div class="add">昨日
                    <span>+{{china_data.add_daily.addcon}}</span>
                </div>
            </div>
            <div class="doubt">
                <div class="num">{{china_data.sustotal}}</div>
                <div class="type">疑似病例</div>
                <div class="add">昨日
                    <span>+{{china_data.add_daily.wjw_addsus}}</span>
                </div>
            </div>
            <div class="healthy">
                <div class="num">{{china_data.curetotal}}</div>
                <div class="type">治愈病例</div>
                <div class="add">昨日
                    <span>+{{china_data.add_daily.addcure}}</span>
                </div>
            </div>
            <div class="dead">
                <div class="num">{{china_data.deathtotal}}</div>
                <div class="type">死亡病例</div>
                <div class="add">昨日
                    <span>+{{china_data.add_daily.adddeath}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import {mapState} from 'vuex'
export default {
  name: "XXX",
  data() {
    return {};
  },
  computed: {
      ...mapState(['china_data'])
  },
  components: {}
};
</script>
<style lang="less">
.domestic_show_box{
    padding:0 20px;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        p{
            color: #ddd;
        }
    }
    .summery_box{
        display: flex;
        align-items: center;
        background:#eee;
        border-radius: 5px;
        padding: 20px 0;
        >div{
            flex:1;
            text-align: center;
        }
        .sure{
            .num{
                color:tomato;
            }
            .add{
                color:#ccc;
                span{
                    color:tomato;
                }
            }
        }
    }
}
</style>