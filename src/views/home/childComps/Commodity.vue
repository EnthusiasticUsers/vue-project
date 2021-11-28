<template>
    <div class="el-commodity">
        <div v-for="(item,id) in goods" class="good">
            <div class="goods-title" :key="id">
                <div class="recommend" :style="{backgroundColor:item.color}">{{item.title}}</div>
                <div class="more">{{item.message}}<i :class="item.icon"></i></div>
            </div>
            <div class="goods">
                <ul v-for="(good,id) in item.wares">
                    <li :key="id">
                        <a :href="good.link">
                            <div class="el-goods">
                                <img :src="good.image" alt="">
                                <p class="name">{{good.name}} <span class="price">￥{{good.price}}</span></p>
                                <p class="commit">{{good.commit}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Commodity",
        props:{
            goods:{
                type:Object,
                default(){
                    return {}
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
    .el-commodity{
        height: 1500px;
        margin-top: 15px;
    }
    .el-commodity .good{
        height: 700px;
    }
    .el-commodity .good .goods-title:nth-of-type(1){
        margin-top: 15px;
    }
    .el-commodity .good .goods-title{
        height: 30px;
        margin-top: 550px;
    }
    .el-commodity .goods{
        height: 600px;
    }
    .el-commodity .good .goods-title .recommend{
        width: 120px;
        height: 30px;
        color:white;
        line-height: 30px;
        text-align: center;
        font-family: "幼圆";
        font-size: 18px;
        font-weight: bold;
        border-radius: 10px;
        margin-left: 40px;
        margin-top: 30px;
    }
    .el-commodity .good .goods ul li{
        width: 300px;
        height: 300px;
        border-radius: 5%;
        float: left;
        margin-right: 30px;
        background-color: white;
        margin-left: 30px;
        box-shadow: 2px 2px 3px #aaaaaa;
        margin-top: 30px;
    }
    .el-commodity .good .goods ul li a{
        color:black;
        text-decoration: none;
    }
    .el-commodity .good .goods ul li a .el-goods img{
        width: 300px;
        height: 250px;
        border-radius: 5% 5% 0 0;
    }
    .el-commodity .good .goods ul li a .el-goods .name{
        font-weight: bold;
        text-indent: 2em;
    }
    .el-commodity .good .goods ul li a .el-goods .name .price{
        background-color: red;
        color:white;
        margin-left: 30px;
        border-radius: 5%;
    }
    .el-commodity .good .goods ul li a .el-goods .commit{
        text-indent: 2em;
        text-decoration: underline;
    }
    .el-commodity .good .goods ul li:hover{
        opacity: 0.5;
        transition: opacity 1s;
    }
    .el-commodity .good .goods-title .more{
        float: right;
        margin-right: 100px;
        font-weight: bold;
        margin-top: -25px;
    }
    .el-commodity .good .goods-title .more:hover{
        color:red;
        cursor: pointer;
    }
</style>
