<template>
    <div id="chart-container" ref="chartContainer"></div>
</template>

<script setup name="doubleLineCharts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

// 創建一個ref來引用DOM元素
const chartContainer = ref(null);

// 聲明一個變量來存儲ECharts實例
let chart = null;


// 定義一個調整圖表大小的函數
const resizeChart = () => {
    if (chart) {
        chart.resize();
    }
};


onMounted(() => {
    // 當組件掛載後，初始化ECharts圖表
    chart = echarts.init(chartContainer.value);

    // 配置ECharts選項
    const option = {
        // 標題
        title: {
            text: '七月記帳表',
            textStyle: {
                fontSize: 18,
                fontfamily: 'noto sans',
                fontWeight: 'bold',
                color: '#011f4b',

            },
            top: '5%',
            left: '5%',
        },
        // 提示工具(移上去會有樣式)
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['吃飯', '娛樂', '健身', '生活', '其他'],
            textStyle: {
                fontSize: 16,
                fontfamily: 'noto sans',
                color: '#011f4b'
            },
            top: '6%',
        },
        grid: {
            left: '6%',
            right: '6%',
            bottom: '6%',
            top: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '吃飯',
                type: 'line',
                stack: 'Total',
                data: [120, 142, 101, 134, 90, 230, 210]
            },
            {
                name: '娛樂',
                type: 'line',
                stack: 'Total',
                data: [220, 282, 191, 234, 290, 330, 310]
            },
            {
                name: '健身',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '生活',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '其他',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    // 設置圖表配置
    chart.setOption(option);
    // 添加 resize 事件監聽器
    window.addEventListener('resize', resizeChart);

})

// 當組件卸載時
onUnmounted(() => {
    // 如果圖表存在，則銷毀它以釋放資源
    if (chart) {
        chart.dispose()
        chart = null
    }
    // 銷毀 resize 事件監聽器
    window.removeEventListener('resize', resizeChart);
})
</script>

<style scoped>
#chart-container {
    width: 100%;
    height: 450px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 30px #e3e3e3;
    margin-bottom: 40px;
}
</style>
