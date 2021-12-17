<template>
        <div>
            <transition name="el-fade-in-linear">
                <go-cart class="transition-box" v-if="isCart" :good="good"></go-cart>
            </transition>
            <nav-menu></nav-menu>
            <div class="showall">
                <!--left -->
                <show-bot :good="good"></show-bot>
                <!--conet -->
                <tb-property :good="good" :title="titles" @sendGood="getGood"></tb-property>
                <!--right -->
                <ext-info :store="store" :seller="sellers"></ext-info>
            </div>
            <!-- 推荐搭配 -->
            <gdetail :wares="ware"></gdetail>
            <!--页脚-->
            <footer-menu :menu="footerMenu" :qrcode="qrcode"></footer-menu>
        </div>
</template>

<script>
    import NavMenu from "../../components/common/navbar/NavMenu";
    import ShowBot from "./childComps/ShowBot";
    import TbProperty from "./childComps/TbProperty";
    import ExtInfo from "./childComps/ExtInfo";
    import Gdetail from "./childComps/Gdetail";
    import goCart from "../../components/common/cart/goCart";
    import FooterMenu from "../../components/common/footer/FooterMenu";
    import goodData from "../../static/data.json";

    export default {
        name: "Detial",
        components:{
            NavMenu,
            ShowBot,
            TbProperty,
            ExtInfo,
            Gdetail,
            goCart,
            FooterMenu
        },
        data(){
            return {
                isCart: false,
                sellers: goodData.sellers,
                titles: goodData.titles,
                footerMenu: goodData.footMenu,
                qrcode: goodData.qrcode,

            }
        },
        methods:{
            getGood(good){
                console.log(good);
                this.good = good;
                if(good !== null){
                    this.toggle();
                    setTimeout(this.toggle,1000);
                }else{
                    alert("error");
                }
            },
            toggle(){
                this.isCart = !this.isCart;
            }
        },
        computed:{
            good(){
                return goodData.goods[this.$route.query.fid].wares[this.$route.query.cid];
            },
            store(){
                return goodData.stores[this.$route.query.fid][this.$route.query.cid];
            },
            ware(){
                return goodData.goods[this.$route.query.fid].wares;
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
    .showall{
        width: 1240px;
        margin: 0 auto;
        margin-top: 15px;
    }
    .v-enter{
        opacity:0;
    }
    .v-enter-to{
        opacity: 1;
    }
    .v-enter-active{
        transition: opacity 1s;
    }
    .v-leave-active{
        transition: transform 1s;
    }
    .v-leave-to{
        transform: translateX(10px);
    }
</style>
