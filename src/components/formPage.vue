<template>
    <div class="page-container">

        <el-table
            :data="filterTableData"
            style="width: 100%"
        >
            <el-table-column
                label="Date"
                prop="date"
            />
            <el-table-column
                label="Name"
                prop="name"
            />
            <el-table-column align="right">
                <template #header>
                    <el-input
                        v-model="search"
                        size="large"
                        placeholder="搜尋"
                    />
                </template>
                <template #default="scope">
                    <!-- 編輯按鈕 -->
                    <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)"
                    >
                        編輯
                    </el-button>
                    <!-- 刪除按鈕 -->
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >
                        刪除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>


<script setup>
import { computed, ref } from 'vue'


const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index, row) => {
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row)
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>




<style scoped>
/* 使用 :deep() 選擇器來確保樣式被正確應用 */
:deep(.el-table__body tr) {
    height: 80px;
}

:deep(.el-table__body tr:hover > td) {
    background-color: #ffe4cd4f !important;
}

:deep(.el-table__cell) {
    padding: 20px 20px;
}

:deep(.el-table th) {
    background-color: #ee6724 !important;
}

:deep(.el-table thead) {
    color: white;
    font-weight: 800;
}
</style>
