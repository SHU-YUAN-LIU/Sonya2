<template>
    <div id="pie-chart" ref="pieChart"></div>
</template>

<script setup name="pieChart">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';


// 創建一個ref來引用DOM元素
const pieChart = ref(null);

// 聲明一個變量來存儲ECharts實例
let chart = null;

//定義一個調整圖表大小的函數
const resizeChart = () => {
    if (chart) {
        chart.resize();
    }
};

onMounted(() => {
    // 當組件掛載後，初始化ECharts圖表
    chart = echarts.init(pieChart.value);

    // 配置ECharts選項
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: '#070c28',
            },
        },
        series: [
            {
                name: '記帳表',
                type: 'pie',
                radius: ['30%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 36,
                        fontWeight: 800,
                        fontFamily: 'Noto Sans',
                        color: '#070c28',


                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '吃飯' },
                    { value: 635, name: '娛樂' },
                    { value: 450, name: '健身' },
                    { value: 784, name: '生活' },
                    { value: 300, name: '其他' }
                ]
            }
        ]
    };

    // 設置圖表配置
    chart.setOption(option);

    // 添加 resize 事件監聽器
    window.addEventListener('resize', resizeChart);

});
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
#pie-chart {
    width: 100%;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 30px #e3e3e3;
    margin-bottom: 40px;
}
</style>