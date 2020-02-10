<template>
<div>
  <div ref='mapBox' style='width:700px;height:500px'></div>
</div>
    
</template>
<script>
// @ is an alias to /src
import echarts from 'echarts'
import jsonp from 'jsonp'
import 'echarts/map/js/china.js'

var data = [];
var option = {
    visualMap: {
      show: true,
      type: 'piecewise',
      min: 0,
      max: 2000,
      align: 'right',
      bottom: '0',
      left: '0',
      inRange: {
        color: [
          '#ffc0b1',
          '#ff8c71',
          '#ef1717',
          '#9c0505'
        ]
      },
      pieces: [
        { min: 10000 },
        { min: 1000, max: 9999 },
        { min: 100, max: 999 },
        { min: 10, max: 99 },
        { min: 1, max: 9 }
      ],
      orient:'vertical',
      showLabel: true,
      itemWidth: 20,
      itemHeight: 5,
      textStyle: {
        fontSize: 10
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [{
      left: 'center',
      type: 'map',
      name: '确诊人数',
      label: {
        show: true,
        position: 'inside',
        fontSize: 10,
        emphasis: {//对应的鼠标悬浮效果
            show: true,
            textStyle:{color:"#FFFFFF"}
        }
      },
      itemStyle:{emphasis: {areaColor:"#ccc"}},
      mapType: 'china',
      data: data,
      zoom: 1.2,
      roam: false,
      showLegendSymbol: false,
      emphasis: {},
      rippleEffect: {
        show: true,
        brushType: 'stroke',
        scale: 2.5,
        period: 4
      }
    }]
  };
export default {
    name: 'mymap',
    data() {
        return {
        
        }
    },
    created() {
      
    },
    methods: {
      /* getData(){
        $.ajax({
          url:'https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',
          dataType:'jsonp',
          success:(data)=>{
            console.log(data)
            let mydata = data.data.list.map(item=>({name:item.name,value:item.value/1}));
            console.log(mydata)
            option.series[0].data = mydata;
            this.echart.setOption(option)
          }
        })
      }, */
      /* getData2(){
        jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data)=>{
          let mydata = data.data.list.map(item=>({name:item.name,value:item.value/1}));
          console.log(mydata)
          option.series[0].data = mydata;
          this.echart.setOption(option)
        })
      } */
    },
    mounted() {
      // this.echart.setOption(option)
      // this.getData2();
      this.initMap()
    },
    methods: {
      initMap(){
        let list = this.$store.state.china_data.list||[];
        if(!list.length){
          setTimeout(() => {
            this.initMap();
          }, 100);
          return;
        }
        let mydata = list.map(item=>({name:item.name,value:item.value/1}));
        option.series[0].data = mydata;
        this.echart = echarts.init(this.$refs.mapBox);
        this.echart.setOption(option);
        this.click();
      },
      click(){
        this.echart.on('click',function(){
console.log(arguments)
        })
        
      }
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>