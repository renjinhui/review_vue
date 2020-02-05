<template>
    <div ref='mapBox' style='width:700px;height:500px'>
        
    </div>
</template>
<script>
// @ is an alias to /src
import echarts from 'echarts'
import 'echarts/map/js/china.js'
var option2 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        y:'bottom',
        data: ['>1000', '100-999', '10-99','1-9']
      },
    
      dataRange: {
        min: 0,
        max: 2500,
        x: 'left',
        y: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        inRange: {
            color: ['#7f1818', '#bf2121', '#ff7b69','#ffaa85']
        }
      },
      roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series: [
        {
          name: '>1000',
          type: 'map',
          roam: false,
          mapType: 'china',
          itemStyle: {
            normal: {
              label: {
                show: true
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          data: [
            {
              name: '北京',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '天津',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '上海',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '重庆',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '河北',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '河南',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '云南',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '辽宁',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '黑龙江',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '湖南',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '安徽',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '山东',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '新疆',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '江苏',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '浙江',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '江西',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '湖北',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '广西',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '甘肃',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '山西',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '内蒙古',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '陕西',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '吉林',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '福建',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '贵州',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '广东',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '青海',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '西藏',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '四川',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '宁夏',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '海南',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '台湾',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '香港',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '澳门',
              value: Math.round(Math.random() * 1000)
            }
          ]
        },
        {
          name: '100-999',
          type: 'map',
          mapType: 'china',
          itemStyle: {
            normal: {
              label: {
                show: true
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          data: [
            {
              name: '北京',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '天津',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '上海',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '重庆',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '河北',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '安徽',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '新疆',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '浙江',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '江西',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '山西',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '内蒙古',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '吉林',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '福建',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '广东',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '西藏',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '四川',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '宁夏',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '香港',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '澳门',
              value: Math.round(Math.random() * 1000)
            }
          ]
        },
        {
          name: '10-99',
          type: 'map',
          mapType: 'china',
          itemStyle: {
            normal: {
              label: {
                show: true
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          data: [
            {
              name: '北京',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '天津',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '上海',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '广东',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '台湾',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '香港',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '澳门',
              value: Math.round(Math.random() * 1000)
            }
          ]
        },
        {
          name: '1-9',
          type: 'map',
          mapType: 'china',
          itemStyle: {
            normal: {
              label: {
                show: true
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          data: [
            {
              name: '北京',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '天津',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '上海',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '广东',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '台湾',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '香港',
              value: Math.round(Math.random() * 1000)
            },
            {
              name: '澳门',
              value: Math.round(Math.random() * 1000)
            }
          ]
        }
      ]
    };
    
export default {
    name: 'mymap',
    data() {
        return {
        
        }
    },
    mounted() {
      var echart = echarts.init(this.$refs.mapBox);
      echart.setOption(option2)
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>