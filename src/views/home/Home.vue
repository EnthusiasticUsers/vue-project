<template>
    <div>
        <el-container>
            <!--侧边栏-->
            <aside-menu :menu="goods" v-show="isaside"></aside-menu>
            <!--回到顶部-->
            <back-top @click.native="backTop" v-show="isback"></back-top>
            <!--导航栏-->
            <el-header>
                <nav-menu></nav-menu>
            </el-header>
            <el-header class="fix-menu" v-show="isshow">
                <nav-menu></nav-menu>
            </el-header>
            <!-- 网页顶部-->
            <el-container>
                <el-aside>
                    <aside-left-menu :menus="asideLeftMenu"></aside-left-menu>
                </el-aside>
                <home-swiper :banners="banners" class="el-swiper"></home-swiper>
                <aside-right-menu :news="news"></aside-right-menu>
            </el-container>
            <!--主要食品-->
            <el-main class="main">
                <commodity :goods="goods" @sendFid="getFid" @sendCid="getCid"></commodity>
            </el-main>
            <!--页脚-->
            <el-footer>
                <footer-menu :menu="footerMenu" :qrcode="qrcode"></footer-menu>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
    import NavMenu from "../../components/common/navbar/NavMenu";
    import HomeSwiper from "./childComps/HomeSwiper";
    import AsideLeftMenu from "./childComps/AsideLeftMenu";
    import AsideRightMenu from "./childComps/AsideRightMenu";
    import Commodity from "./childComps/Commodity";
    import FooterMenu from "../../components/common/footer/FooterMenu";
    import AsideMenu from "./childComps/AsideMenu";
    import BackTop from "../../components/content/backTop/BackTop";
    import goodData from "../../static/data.json";


    export default {
        name: "Home",
        components:{
            BackTop,
            NavMenu,
            HomeSwiper,
            AsideLeftMenu,
            AsideRightMenu,
            Commodity,
            FooterMenu,
            AsideMenu
        },
        data() {
            return {
                isshow:false,
                isaside:false,
                isback:false,
                fid:0,
                cid:0,
                banners:goodData.banners,
                asideLeftMenu:goodData.leftMenu,
                news:goodData.new,
                goods:goodData.goods,
                qrcode:goodData.qrcode,
                footerMenu:goodData.footMenu
            }
        },
        methods:{
            backTop(){
                clearInterval(timer);
                let speed = 80;
                let timer = setInterval(()=>{
                    if(document.documentElement.scrollTop <= 0){
                        clearInterval(timer);
                    }else{
                        document.documentElement.scrollTop -= speed;
                    }
                },16);
            },
            getFid(fid){
                this.fid = fid;
            },
            getCid(cid){
                this.cid = cid;
            }
        },
        mounted(){
            document.onscroll = () => {
                //console.log(document.documentElement.scrollTop);
                let top = document.documentElement.scrollTop;
                /*导航栏*/
                if(top >= 60){
                    this.isshow = true;
                }else{
                    this.isshow = false;
                }

                /*侧边栏*/
                if(top >= 180 && top <= 2200){
                    this.isaside = true;
                }else{
                    this.isaside = false;
                }

                /*切换类样式*/
                let menuObj = document.getElementsByClassName("item");
                for(let i = 0; i < menuObj.length; i++){
                    menuObj[i].className = "item";
                }
                if(top >= 1400){
                    menuObj[2].className = "item" + " active";
                }else if(top >= 650){
                    menuObj[1].className = "item" + " active";
                }else if(top >= 180){
                    menuObj[0].className = "item" + " active";
                }

                /*回到顶部*/
                if(top >= 300){
                    this.isback = true;
                }else{
                    this.isback = false;
                }

            }
        }

    }
</script>

<style scoped>
    *{margin: 0;padding: 0;list-style: none;}
    .main{height: 2200px;}
    .el-swiper{width: 800px;height: 500px;}
    .fix-menu{width: 100%;position: fixed;z-index: 2;top:0;}
    .clear{clear: both;}
</style>





