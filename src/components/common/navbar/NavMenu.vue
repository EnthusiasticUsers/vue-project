<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><a href="/"><i class="el-icon-s-home"></i>首页</a></el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-s-shop"></i>特色店铺</template>
                <el-menu-item index="2-1"><a href="/detial?fid=0&cid=0">滴滴猪肉铺~</a></el-menu-item>
                <el-menu-item index="2-2"><a href="/detial?fid=1&cid=0">叮咚小肉</a></el-menu-item>
                <el-menu-item index="2-3"><a href="/detial?fid=2&cid=0">松鼠零食</a></el-menu-item>
            </el-submenu>
            <el-menu-item index="3" ><a href="/cart"><i class="el-icon-shopping-cart-1"></i>购物车</a></el-menu-item>
            <el-menu-item index="4"><a href="/profile"><i class="el-icon-user"></i>个人</a></el-menu-item>
            <el-menu-item index="6" class="el-item"><el-button type="primary">注册</el-button></el-menu-item>
            <el-menu-item index="5" class="el-item"><el-button type="success">登录</el-button></el-menu-item>
            <el-menu-item class="key-search">
                <el-input v-model="key" placeholder="吃点什么..." class="el-input"></el-input>
                <el-button type="danger"  class="el-left">搜索</el-button>
            </el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                activeIndex: '1',
                key:""
            };
        },

        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>

<style scoped>
    .el-item{
        float: right;
    }
    .key-search{
        margin-left: 20%;
    }
    .el-left{
        margin-left: 5px;
    }
    a{
        text-decoration: none;
        color:#909399;
    }
</style>
