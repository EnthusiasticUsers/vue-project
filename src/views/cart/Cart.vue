<template>
    <div>
        <nav-menu></nav-menu>
       <div class="box">
           <div class="main">
               <div class="cart-name"><i class="el-icon-shopping-cart-full"></i>购 物 车</div>
               <good :goods="goods" @changeNum="setGoods"></good>
               <cal-cart :goods="goods" @settlement="getGoods"></cal-cart>
           </div>
       </div>
        <footer-menu :menu="footerMenu" :qrcode="qrcode"></footer-menu>
    </div>
</template>

<script>
    import NavMenu from "../../components/common/navbar/NavMenu";
    import Good from "./childComps/Good";
    import CalCart from "./childComps/CalCart";
    import FooterMenu from "../../components/common/footer/FooterMenu";
    import goodData from "../../static/data.json";
    export default {
        name: "Cart",
        components:{
            NavMenu,
            FooterMenu,
            Good,
            CalCart
        },
        data(){
            return {
                footerMenu:goodData.footMenu,
                qrcode:goodData.qrcode,
                goods:JSON.parse(window.localStorage.getItem("goods")) || []
            }
        },
        methods:{
            getGoods(goods){
                this.goods = goods;
            },
            setGoods(goods){
                this.goods = goods;
            }
        }

    }
</script>

<style scoped>
    .box{
        height: 1000px;
        background-color: #52faf0;
    }
    .main{
        width: 1300px;
        height: 1000px;
        background-color: white;
        margin: auto;
    }
    .box .main .cart-name{
        height: 80px;
        line-height: 80px;
        border-bottom: solid 1px #ddd;
        text-align: center;
        font-size: 36px;
        background-color: #bafafc;
        font-weight: bold;
    }
</style>
