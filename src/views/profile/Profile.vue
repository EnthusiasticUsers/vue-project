<template>
    <div>
        <!--导航栏-->
        <nav-menu></nav-menu>
        <div class="main">
            <div class="box">
                <!--个人信息菜单-->
                <profile-menu :menu="profileMenu"></profile-menu>
                <!--个人信息数据-->
                <profile-data></profile-data>
            </div>
        </div>
        <!--页脚-->
        <footer-menu :menu="footerMenu" :qrcode="qrcode"></footer-menu>
    </div>
</template>

<script>
    import NavMenu from "../../components/common/navbar/NavMenu";
    import FooterMenu from "../../components/common/footer/FooterMenu";
    import ProfileMenu from "./childComps/ProfileMenu";
    import ProfileData from "./childComps/ProfileData";
    import goodData from "../../static/data.json";

    export default {
        name: "Profile",
        components:{
            NavMenu,
            FooterMenu,
            ProfileMenu,
            ProfileData
        },
        data(){
            return {
                footerMenu:goodData.footMenu,
                qrcode:goodData.qrcode,
                profileMenu:goodData.profileMenu
            }
        }
    }
</script>

<style scoped>
    .main{background-color: #52faf0;height: 1100px;}
    .main .box{width: 1410px;height: 1000px;margin: auto;}
</style>
