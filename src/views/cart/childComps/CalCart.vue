<template>
    <div class="cal-cart" v-show="goods.length !== 0">
        <div class="left">
            <div>
                <input type="checkbox" id="all">
                <label for="all">全选</label>
                <span class="del-good">删除选中商品</span>
            </div>
        </div>
        <div class="right">
            <span>已选商品<span class="font">{{num}}</span>件 合计: <span class="font">￥{{total}}</span></span>
            <button @click="settlement">结算</button>
        </div>
    </div>
</template>

<script>
    import goCart from "../../../components/common/cart/goCart";

    export default {
        name: "CalCart",
        components:{
            goCart
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []

                }
            }
        },
        methods:{
            settlement(){
                this.goods = [];
                window.localStorage.setItem("goods",JSON.stringify(this.goods));
                this.$emit("settlement", this.goods);
                alert("结算成功");
            }
        },
        computed:{
            total(){
                let total = 0;
                this.goods.forEach( item => {
                   total += Number(item.number) * Number(item.price);
                });
                return Math.floor(total * 100) / 100;
            },
            num(){
                let num = 0;
                this.goods.forEach(item => {
                    num += Number(item.number);
                });
                return num;
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
