<template>
    <div class="el-commodity">
        <div class="goods-title">
            <div class="recommend">好 货 推 荐</div>
            <div class="more">查看更多 <i class="el-icon-d-arrow-right"></i></div>
        </div>
        <div class="goods">
            <ul v-for="(item,id) in goods.recommends">
                <li :key="id">
                    <a :href="item.link">
                        <div class="el-goods">
                            <img :src="item.image" alt="">
                            <p class="name">{{item.name}} <span class="price">￥{{item.price}}</span></p>
                            <p class="commit">{{item.commit}}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="division"></div>
        <div class="goods-title">
            <div class="recommend like">猜 你 喜 欢</div>
            <div class="more">查看更多 <i class="el-icon-d-arrow-right"></i></div>
        </div>
        <div class="goods">
            <ul v-for="(item,id) in goods.likes">
                <li :key="id">
                    <a :href="item.link">
                        <div class="el-goods">
                            <img :src="item.image" alt="">
                            <p class="name">{{item.name}} <span class="price">￥{{item.price}}</span></p>
                            <p class="commit">{{item.commit}}</p>
                        </div>
                    </a>
                </li>
            </ul>
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
        width: 100%;
        height: 1500px;
        margin-top: 15px;
    }
    .el-commodity .division{
        height: 220px;
    }
    .el-commodity .goods-title{
        margin-top: 15px;
    }
    .el-commodity .goods-title .recommend{
        width: 120px;
        height: 30px;
        background-color: #409EFF;
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
    .el-commodity .goods{
        height: 450px;
    }
    .el-commodity .goods ul li{
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
    .el-commodity .goods ul li a{
        color:black;
        text-decoration: none;
    }
    .el-commodity .goods ul li a .el-goods img{
        width: 300px;
        height: 250px;
        border-radius: 5% 5% 0 0;
    }
    .el-commodity .goods ul li a .el-goods .name{
        font-weight: bold;
        text-indent: 2em;
    }
    .el-commodity .goods ul li a .el-goods .name .price{
        background-color: red;
        color:white;
        margin-left: 30px;
        border-radius: 5%;
    }
    .el-commodity .goods ul li a .el-goods .commit{
        text-indent: 2em;
        text-decoration: underline;
    }
    .el-commodity .goods ul li:hover{
        opacity: 0.5;
        transition: opacity 1s;
    }
    .el-commodity .goods-title .like{
        background-color: #67C23A;
        clear: both;
    }
    .el-commodity .goods-title .more{
        float: right;
        margin-right: 100px;
        font-weight: bold;
        margin-top: -25px;
    }
    .el-commodity .goods-title .more:hover{
        color:red;
        cursor: pointer;
    }
</style>
