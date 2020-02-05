<template>
    <div class='domestic_show_box'>
        <div class="title">
            <h1>国内疫情</h1>
            <p>数据更新至 2020.02.05 11:34</p>
        </div>
        <div class="summery_box">
            <div class="sure">
                <div class="num">24363</div>
                <div class="type">确诊病例</div>
                <div class="add">昨日
                    <span>+3892</span>
                </div>
            </div>
            <div class="doubt">
                <div class="num">23260</div>
                <div class="type">疑似病例</div>
                <div class="add">昨日
                    <span>+3971</span>
                </div>
            </div>
            <div class="healthy">
                <div class="num">914</div>
                <div class="type">治愈病例</div>
                <div class="add">昨日
                    <span>+260</span>
                </div>
            </div>
            <div class="dead">
                <div class="num">492</div>
                <div class="type">死亡病例</div>
                <div class="add">昨日
                    <span>+66</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
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