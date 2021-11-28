<template>
    <div class="el-commodity">
        <div class="division"></div>
        <div class="recommend">好 货 推 荐</div>
        <ul v-for="(item,id) in goods">
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
</template>

<script>
    export default {
        name: "Commodity",
        props:{
            goods:{
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
    .el-commodity{
        width: 100%;
        height: 1000px;
        margin-top: 15px;
    }
    .el-commodity .division{
        height: 30px;
    }
    .el-commodity .recommend{
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
    }
    .el-commodity ul li{
        margin-top: 100px;
        width: 300px;
        height: 300px;
        border-radius: 5%;
        float: left;
        margin-right: 30px;
        background-color: white;
        margin-left: 30px;
        box-shadow: 2px 2px 3px #aaaaaa;
    }
    .el-commodity ul li:nth-of-type(odd){
        margin-top: 40px;
    }


    .el-commodity ul li a{
        color:black;
        text-decoration: none;
    }
    .el-commodity ul li a .el-goods img{
        width: 300px;
        height: 250px;
        border-radius: 5% 5% 0 0;
    }
    .el-commodity ul li a .el-goods .name{
        font-weight: bold;
        text-indent: 2em;
    }
    .el-commodity ul li a .el-goods .name .price{
        background-color: red;
        color:white;
        margin-left: 30px;
        border-radius: 5%;
    }
    .el-commodity ul li a .el-goods .commit{
        text-indent: 2em;
        text-decoration: underline;
    }
    .el-commodity ul li:hover{
        opacity: 0.5;
        transition: opacity 1s;
    }


</style>
