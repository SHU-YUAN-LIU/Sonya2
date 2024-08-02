<template>
    <el-row class="header-container">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#070c28"
            class="el-menu-vertical-demo header-bar"
            text-color="#fff"
        >
            <!-- logo -->
            <RouterLink to="/">
                <div class="header-logo">
                    <img
                        src="@/assets/images/SP-logo.svg"
                        alt=""
                    >
                </div>
            </RouterLink>
            <!-- 作品 -->
            <RouterLink to="works">
                <el-menu-item
                    index="1"
                    class="header-title"
                >
                    <el-icon>
                        <TrendCharts />
                    </el-icon>
                    <span>作品</span>
                </el-menu-item>
            </RouterLink>
            <!-- 表格 -->
            <RouterLink to="form">
                <el-menu-item
                    index="2"
                    class="header-title"
                >
                    <el-icon><icon-menu /></el-icon>
                    <span>表格</span>
                </el-menu-item>
            </RouterLink>
        </el-menu>
    </el-row>

</template>

<script setup>
import { Menu as IconMenu, TrendCharts, } from '@element-plus/icons-vue'
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.header-container {
    width: 10%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.header-bar {
    width: 100%;
    /* el-menu有預設這個樣式，把它拿掉 */
    border-right: 0px solid white;
}

.header-title {
    display: flex;
    justify-content: center;

}

.header-logo {
    width: 60%;
    margin: auto;
    padding: 40px 0;

    img {
        width: 100%;
        vertical-align: middle;
    }
}

span {
    font-size: 16px;
}
</style>