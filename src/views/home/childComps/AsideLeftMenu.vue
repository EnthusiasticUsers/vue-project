<template>
    <div class="el-aside-menu">
        <ul v-for="(item,id) in menus">
            <li :key="id"><span>{{item.name}}</span><span class="icon"><i :class="item.icon"></i></span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AsideLeftMenu",
        props: {
            menus: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .el-aside-menu{
        height: 500px;
        background-color: #424242;
        opacity: 0.4;
        color:white;
    }
    .el-aside-menu ul li{
        width: 100%;
        line-height: 60px;
        text-indent: 2em;
        font-size: 18px;
    }
    .el-aside-menu ul li:hover{
        background-color: #ff8198;
        cursor: pointer;
    }
    .icon{
        float: right;
        margin-right: 30px;
    }
</style>
