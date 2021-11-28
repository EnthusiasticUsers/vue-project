<template>
    <div class="foot">
        <div class="main">
            <ul v-for="(item,id) in menu">
                <li class="part" :key="id">
                    <span class="title"><i :class="item.icon"></i>{{item.title}}</span>
                    <ul v-for="(child,id) in item.childs">
                        <li :key="id"><i class="el-icon-collection-tag"></i>&nbsp{{child.name}}</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="qrcode" v-for="item in qrcode">
            <a :href="item.link"><img :src="item.image" alt="" width="82" height="82"></a>
        </div>
        <div class="author">@第六小组 制作: 张珂嘉 谢克力 李辉 王宇泽</div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
            menu:{
                type:Array,
                default(){
                    return []
                }
            },
            qrcode:{
                type:Array,
                default() {
                    return [];
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
    .foot{
        height: 300px;
        background-color: #ddd;
        margin-top: 30px;
    }
    .foot .main{
        width: 1050px;
        height: 82px;
        margin-left: 80px;
    }
    .foot .qrcode{
        float: left;
        margin-left: 60px;
        margin-top: 20px;
        height: 82px;
    }
    .foot .author{
        clear: both;
        text-align: center;
        font-size: 16px;
        margin-top: 160px;
    }
    .foot .main ul .part{
        float: left;
        margin-left: 90px;
        margin-top: 40px;
    }
    .foot .main ul .part .title{
        font-size: 20px;
        font-weight: bold;
    }
    .foot .main ul .part ul li{
        margin-top: 15px;
    }
    .foot .main:hover{
        cursor: pointer;
    }
</style>
