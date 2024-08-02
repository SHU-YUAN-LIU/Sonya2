<template>
    <div class="chart-container">
        <div class="chart-group">
            <div class="chart-card">
                <doubleLineCharts />
            </div>
            <div class="chart-card">
                <pieChart />
                <barChart />
            </div>
        </div>

    </div>
</template>

<script setup>

import doubleLineCharts from '../components/chart/doubleLineCharts.vue';
import pieChart from '../components/chart/pieChart.vue';
import barChart from '../components/chart/barChart.vue';

</script>
<style scoped>
.chart-container {
    padding: 50px;
    height: 100%;
    margin-top: 60px;
    margin-left: 10%;
    background-color: #eeeeee;


    .chart-group {
        .chart-card {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }
    }

}
</style>
