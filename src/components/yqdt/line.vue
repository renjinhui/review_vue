<template>
  <div ref='lineBox' style='width:700px;height:500px;marginTop:50px'>
  </div>
</template>
<script>
import echarts from "echarts";
// @ is an alias to /src
let options = {
  title: {
    text: "",
    textStyle: {
      fontSize: 10,
      fontWeight: 200
    }
  },
  tooltip: {
    trigger: "axis",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    textStyle: {
      color: "#333"
    }
  },
  legend: {
    icon: "circle",
    textStyle: {
      color: "#444",
      fontStyle: "normal"
    },
    itemWidth: 8,
    itemHeight: 8,
    backgroundColor: "rgb(128,128,128,0.1)",
    borderRadius: 5,
    right: 0,
    top: 0,
    // data: [
    //   {
    //     name: "新增确诊"
    //   },
    //   {
    //     name: "新增疑似"
    //   }
    // ]
    data: ["新增确诊", "新增疑似"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  // toolbox: {
  //     feature: {
  //         saveAsImage: {}
  //     }
  // },

  xAxis: {
    type: "category",
    boundaryGap: false,
    axisLine: {
      show: false
    },
    data: [
      "1.31",
      "2.1",
      "2.2",
      "2.3",
      "2.4",
      "2.5",
      "2.6",
      "2.7",
      "2.8",
      "2.9"
    ]
  },
  yAxis: {
    type: "value",
    axisLine: {
      show: false
    }
  },  
  series: [
    {
      name: "新增确诊",
      type: "line",
      stack: "新增确诊量",
      symbol: "circle",
      symbolSize: "5", // 控制实心点
      itemStyle: {
        normal: {
          color: "#e83132", //折线点的颜色
          lineStyle: {
            color: "#e83132" //折线的颜色
          }
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "新增疑似",
      type: "line",
      symbol: "circle",
      symbolSize: "5",
      stack: "新增疑似量",
      itemStyle: {
        normal: {
          color: "#ec9217", //折线点的颜色
          lineStyle: {
            color: "#ec9217" //折线的颜色
          }
        }
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
};

export default {
  name: "MYLINE",
  props:['title','data'],
  data() {
    return {};
  },
  mounted() {
    this.getInitData();
    this.initLine();
  },
  methods: {
    initLine() {
      let history = this.$store.state.china_data.historylist;
      if (!history) {
        setTimeout(() => {
          this.getInitData();
          this.initLine();
        }, 200);
        return;
      }
      let list = history.slice(0, 10);
      options.xAxis.data = list.map(item => item.date).reverse();
      // 新增确诊
      // options.series[0].data = list.map(
      //   (item, index) => item.cn_conNum - history[index + 1].cn_conNum
      // );
      // options.series[0].data = this.data[0].list
      //新增疑似
      // options.series[1].data = list.map(item => item.wjw_susNum);
      // options.series[1].data = this.data[1].list
      this.echart = echarts.init(this.$refs.lineBox);
      this.echart.setOption(options);
    },
    getInitData(){
      options.title.text = this.title||''
      options.legend.data = this.data.map(item=>item.til)
      options.series.forEach((item,index)=>{
        item.name = this.data[index].til;
        item.data = this.data[index].list;
        if(this.data[index].color){
          item.itemStyle.normal.color = this.data[index].color
          item.itemStyle.normal.lineStyle.color = this.data[index].color
        }
      })
    }
  },
  // watch: {
  //   name(newV,oldV){},
  //   obj:{
  //     deep:true,
  //     handler(){}
  //   }
  // },
  components: {}
};
</script>
<style lang="less">
</style>