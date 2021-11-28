<template>
    <div class="foot">
        <div class="main">
            <ul v-for="(item,id) in menu">
                <li class="part">
                    <span class="title"><i :class="item.icon"></i>{{item.title}}</span>
                    <ul v-for="(child,id) in item.childs">
                        <li><i class="el-icon-collection-tag"></i>&nbsp{{child.name}}</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="qrcode">
            <img src="../../../assets/qrcodes/qrcode.jpg" alt="" width="82" height="82">
            <img src="../../../assets/qrcodes/qrcode.jpg" alt="" width="82" height="82">
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
    }
    .foot .main{
        width: 1050px;
        margin-left: 80px;
    }
    .foot .author{
        clear:both;
        text-align: center;
        font-size: 16px;
        margin-top:100px;
    }
    .foot .qrcode img{
        margin-left: 60px;
        margin-top: 60px;
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
