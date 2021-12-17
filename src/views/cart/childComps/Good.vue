<template>
    <div class="cart">
        <table>
            <tr class="table-th">
                <th><input type="checkbox">全选</th>
                <th>商品信息</th>
                <th>单价(元)</th>
                <th>数量</th>
                <th>小计</th>
            </tr>
            <tr v-for="(item,id) in goods">
                <td>
                    <!--选择器-->
                    <div class="choice-box fly">
                        <input type="checkbox">
                    </div>
                </td>
                <td>
                    <!--图片信息-->
                    <div class="good-img fly">
                        <img :src="item.image" alt="" width="150" height="100">
                        <span class="good-name">{{item.name}}</span>
                    </div>
                </td>
                <td>
                    <div class="good-data fly">
                        <span class="good-price">￥{{item.price}}</span>
                    </div>
                </td>
                <td>
                    <div class="good-count fly">
                        <button class="reduce-btn" @click="reduce(id)">-</button>
                        <span class="count">{{item.number}}</span>
                        <button class="add-btn" @click="add(id)">+</button>
                    </div>
                </td>
                <td>
                    <div class="total-count fly">
                        <span>合计: ￥{{total(item.number, item.price)}}</span>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Good",
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            total(n, p){
                return Math.floor(Number(n) * Number(p) * 100) / 100;
            },
            add(id){
                let n = this.goods[id].number;
                let s = Number(this.goods[id].stock);
                if(n < s){
                    n++;
                }else{
                    n = s;
                }
                this.goods[id].number = n;
                //window.localStorage.setItem("goods", this.goods);
                this.$emit("changeNum", this.goods);
            },
            reduce(id){
                let n = this.goods[id].number;
                if(n > 1){
                    n--;
                }else{
                    n = 1;
                }
                this.goods[id].number = n;
                //window.localStorage.setItem("goods", this.goods);
                this.$emit("changeNum", this.goods);
            }
        }
    }
</script>

<style scoped>
    *{margin: 0;padding: 0;}
    .cart{
        height: 800px;
        overflow: auto;
    }
    table{
        width: 100%;
        border-collapse: collapse;
    }
    table tr{
        width: 100%;
        height: 180px;
        border-bottom: solid 1px #ccc;
    }
    table .table-th{
        height: 60px;
        background-color: #f6f6f6;
    }
    table tr .choice-box input[type=checkbox]{
        width: 30px;
        height: 30px;
    }
    table tr .fly{
        margin-left: 70px;
    }
    table tr .good-img{
        width: 250px;
        height: 100px;
        border: solid 1px #ccc;
        padding: 20px;
        margin:auto;
        margin-top: 10px;
    }
    table tr .good-img img{
        float: left;
    }
    table tr .good-img .good-name{
        display: block;
        width: 100px;
        height: 20px;
        float: left;
        margin-top: 30px;
        font-size: 18px;
    }
    table tr .good-data .good-price{
        color:red;
        font-size: 32px;
    }
    table tr .good-count .reduce-btn,.add-btn{
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
    }
    table tr .good-count .count{
        font-size: 18px;
    }
    table tr .good-count .reduce-btn,.add-btn,.count{
        margin-left: 10px;
    }
    table tr .total-count span{
        font-size: 24px;
        font-weight: bold;
        color:green;
    }
</style>
