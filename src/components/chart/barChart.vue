<template>
    <div id="bar-chart" ref="barChart"></div>
</template>

<script setup name="barChart">
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted } from 'vue';

// 創建一個ref來引用DOM元素
const barChart = ref(null);

// 聲明一個變量來存儲ECharts實例
let chart = null;// 這邊要用let

//定義一個調整圖表大小的函數
const resizeChart = () => {
    if (chart) {
        chart.resize();
    }
}

onMounted(() => {
    // 當組件掛載後，初始化ECharts圖表
    chart = echarts.init(barChart.value)

    // 配置ECharts選項
    // Generate data
    let category = [];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];
    for (let i = 0; i < 10; i++) {
        let date = new Date((dottedBase += 3600 * 24 * 1000));
        category.push(
            [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
        );
        let b = Math.random() * 200;
        let d = Math.random() * 200;
        barData.push(b);
        lineData.push(d + b);
    }
    // option
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: '5%',
            data: ['line', 'bar'],
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: { show: false },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        grid: {
            left: '6%',
            right: '8%',
            bottom: '8%',
            // top: '20%',
            containLabel: true
        },
        series: [
            {
                name: 'line',
                type: 'line',
                smooth: false,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData,

            },
            {
                name: 'bar',
                type: 'bar',
                barWidth: 20,
                itemStyle: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#14c8d4' },
                        { offset: 1, color: '#43eec6' }
                    ])
                },
                data: barData
            },
            {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 20,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                        { offset: 0, color: 'rgba(20,200,212,0.5)' },
                        { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                        { offset: 1, color: 'rgba(20,200,212,0)' }
                    ])
                },
                z: -8,
                data: lineData
            },
            {
                name: 'dotted',
                type: 'bar',
                itemStyle: {
                    color: '#0f375f'
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
            }
        ]
    };

    // 設置圖表配置
    chart.setOption(option);

    // 添加 resize 事件監聽器
    window.addEventListener('resize', resizeChart)
});

onUnmounted(() => {
    // 如果圖表存在，則銷毀它以釋放資源
    if (chart) {
        chart.dispose();
        chart = null;
    }
    // 銷毀 resize 事件監聽器
    window.removeEventListener('resize', resizeChart)
})


</script>


<style scoped>
#bar-chart {
    width: 100%;
    height: 400px;
    background-color: #13275e;
    border-radius: 10px;
    box-shadow: 0 0 30px #e3e3e3;
    margin-bottom: 40px;
}
</style>
