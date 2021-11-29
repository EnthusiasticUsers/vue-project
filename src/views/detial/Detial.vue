<template>
    <div>
        <nav-menu></nav-menu>
        <div class="showall">
            <!--left -->
            <show-bot></show-bot>
            <!--conet -->
            <tb-property></tb-property>
            <!--right -->
            <ext-info></ext-info>
        </div>
        <!-- 推荐搭配 -->
        <gdetail></gdetail>
    </div>
</template>

<script>
    import NavMenu from "../../components/common/navbar/NavMenu";
    import ShowBot from "./childComps/ShowBot";
    import TbProperty from "./childComps/TbProperty";
    import ExtInfo from "./childComps/ExtInfo";
    import Gdetail from "./childComps/Gdetail";

    export default {
        name: "Detial",
        components:{
            NavMenu,
            ShowBot,
            TbProperty,
            ExtInfo,
            Gdetail
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
</style>
