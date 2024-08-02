<template>
    <div class="form-container">
        <formPage />
        <!-- 分頁 -->
        <div class="form-pagination">
            <div class="example-pagination-block">
                <el-pagination
                    layout="prev, pager, next"
                    :total="50"
                    alignment="center"
                />
            </div>
        </div>

    </div>
</template>


<script setup>
import formPage from '@/components/formPage.vue';

</script>




<style scoped>
.form-container {
    padding: 50px;
    height: 100%;
    margin-top: 60px;
    margin-left: 10%;
    background-color: #eeeeee;
}

:deep(.el-pagination) {
    margin-top: 20px;
    justify-content: center;
    background-color: transparent;
}

:deep(.el-pagination > button) {
    background-color: transparent;
}

:deep(.el-pager li) {
    background-color: transparent;
}
</style>
