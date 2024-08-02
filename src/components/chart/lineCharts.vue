<template>
    <div id="chart-container" ref="chartContainer"></div>
</template>

<script setup name="lineCharts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

// 創建一個ref來引用DOM元素
const chartContainer = ref(null);

// 聲明一個變量來存儲ECharts實例
let chart = null;

onMounted(() => {
    // 當組件掛載後，初始化ECharts圖表
    chart = echarts.init(chartContainer.value);

    // 模擬數據
    const data = [
        { "name": "北京", "value": 10 },
        { "name": "台湾", "value": 80 },
        { "name": "新加坡", "value": 30 },
        { "name": "香港", "value": 40 },
        { "name": "澳門", "value": 50 },
        { "name": "韓國", "value": 10 }
    ];

    // 配置ECharts選項
    const options = {
        xAxis: {
            type: 'category',
            data: data.map((item) => item.name)
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data.map((item) => item.value),
            type: 'line'
        }],
        tooltip: {
            trigger: 'item',
            formatter: "{b}:{c}"
        }
    }

    // 設置圖表配置
    chart.setOption(options);
})

// 當組件卸載時
onUnmounted(() => {
    // 如果圖表存在，則銷毀它以釋放資源
    if (chart) {
        chart.dispose()
        chart = null
    }
})
</script>

<style scoped>
#chart-container {
    width: 100%;
    height: 450px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 30px #e3e3e3;
}
</style>
