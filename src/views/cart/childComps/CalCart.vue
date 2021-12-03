<template>
    <div class="cal-cart">
        <div class="left">
            <div>
                <input type="checkbox" id="all">
                <label for="all">全选</label>
                <span class="del-good">删除选中商品</span>
            </div>
        </div>
        <div class="right">
            <span>已选商品<span class="font">{{goods.length}}</span>件 合计: <span class="font">￥{{total}}</span></span>
            <button>结算</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CalCart",
        props:{
            goods:{
                type:Array,
                default(){
                    return []

                }
            }
        },
        data(){
           return {

           }
        },
        computed:{
            total(){
                let total = 0;
                for(var i = 0; i < this.goods.length; i++){
                    total += this.goods[i].price;
                }
                return total;
            }
        }
    }
</script>

<style scoped>
    .cal-cart{
        width: 100%;
        height: 80px;
        background-color: #f6f6f6;
    }
    .cal-cart .left input{
        width:15px;
        height: 15px;
        margin-top:20px;
    }
    .cal-cart .left{
        height: 80px;
        float: left;
        margin-left: 15px;
        font-size: 18px;
        line-height: 80px;
    }
    .cal-cart .right{
        height: 80px;
        float: right;
        line-height: 80px;
        font-size: 24px;
    }
    .cal-cart .left .del-good{
        margin-left: 15px;
    }
    .cal-cart .right button{
        border: none;
        width: 100px;
        height: 80px;
        color:white;
        font-size: 24px;
        font-weight: bold;
        background-color: #67C23A;
        margin-left: 15px;
    }
    .cal-cart .right button:hover{
        background-color: #c2801a;
        cursor: pointer;
    }
    .cal-cart .right .font{
        color:#67C23A;
        font-weight: bold;
    }
</style>
