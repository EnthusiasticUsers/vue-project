<template>
    <div>
   <el-container>
       <!--导航栏-->
       <el-header>
           <nav-menu></nav-menu>
       </el-header>
       <!-- 网页顶部-->
       <el-container>
            <el-aside>
                <aside-left-menu :menus="asideMenu"></aside-left-menu>
            </el-aside>


               <home-swiper :banners="banners" class="el-swiper"></home-swiper>

            <aside-right-menu :news="news"></aside-right-menu>
       </el-container>
       <!--主要食品-->
       <el-main>
          <commodity :goods="goods"></commodity>
       </el-main>
       <!--页脚-->
      <el-footer>
          <div></div>
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
    export default {
        name: "Home",
        components:{
            NavMenu,
            HomeSwiper,
            AsideLeftMenu,
            AsideRightMenu,
            Commodity
        },
        data:function () {
            return {
                banners:[
                    {
                        "image":require("assets/banners/1.jpg"),
                        "link":"https://item.jd.com/10035916337498.html"
                    },
                    {
                        "image":require("assets/banners/2.jpg"),
                        "link":"https://item.jd.com/71590688505.html"
                    },
                    {
                        "image":require("assets/banners/3.jpg"),
                        "link":"https://item.jd.com/10035916337498.html"
                    },
                    {
                        "image":require("assets/banners/4.jpg"),
                        "link":"https://item.jd.com/10035916337498.html"
                    }
                ],
                asideMenu:[
                    {
                        "name":"北 京 肉 铺",
                        "link":"https://item.jd.com/10035916337498.html",
                        "icon":"el-icon-caret-right"
                    },
                    {
                        "name":"天 津 烧 肉",
                        "link":"https://item.jd.com/10035916337498.html",
                        "icon":"el-icon-caret-right"
                    },
                    {
                        "name":"火 腿",
                        "link":"https://item.jd.com/10035916337498.html",
                        "icon":"el-icon-caret-right"
                    },
                    {
                        "name":"吉 林 香 肠",
                        "link":"https://item.jd.com/10035916337498.html",
                        "icon":"el-icon-caret-right"
                    },
                    {
                        "name":"南 京 烤 鸭",
                        "link":"https://item.jd.com/10035916337498.html",
                        "icon":"el-icon-caret-right"
                    },
                    {
                        "name":"东 北 火 鸡",
                        "link":"https://item.jd.com/10035916337498.html",
                        "icon":"el-icon-caret-right"
                    },
                    {
                        "name":"黑 龙 江 熏 肉",
                        "link":"https://item.jd.com/10035916337498.html",
                        "icon":"el-icon-caret-right"
                    },
                    {
                        "name":"其 他",
                        "link":"https://item.jd.com/10035916337498.html",
                        "icon":"el-icon-caret-right"
                    },
                ],
                news:[
                    {
                        "title":"2021猪肉到底有没有降价,XX新闻给你最新报道...",
                        "link":"http://www.baidu.com"
                    },
                    {
                        "title":"多吃肉真的会长胖吗?想知道吗?来XX解答为你解密...",
                        "link":"http://www.baidu.com"
                    },
                    {
                        "title":"目前都有那些肉类美食,关注XX直播,告诉你最新资讯...",
                        "link":"http://www.baidu.com"
                    },
                    {
                        "title":"哪里的地方🐖长的比较壮?XX牧业已收到...",
                        "link":"http://www.baidu.com"
                    },
                    {
                        "title":"怎么才能让自己越来越来爱动手做饭,关注XX聊天室...",
                        "link":"http://www.baidu.com"
                    },
                ],
                goods:[
                    {
                        "name":"来自星星的猪肉脯...",
                        "commit":"星空的美丽,你无法想象,那吃的呢",
                         "price":20.99,
                        "image":require("assets/goods/1.jpg"),
                        "link":"http://baidu.com"
                    },
                    {
                        "name":"来自星星的猪肉脯...",
                        "commit":"星空的美丽,你无法想象,那吃的呢",
                        "price":20.99,
                        "image":require("assets/goods/1.jpg"),
                        "link":"http://baidu.com"
                    },
                    {
                        "name":"来自星星的猪肉脯...",
                        "commit":"星空的美丽,你无法想象,那吃的呢",
                        "price":20.99,
                        "image":require("assets/goods/1.jpg"),
                        "link":"http://baidu.com"
                    },
                    {
                        "name":"来自星星的猪肉脯...",
                        "commit":"星空的美丽,你无法想象,那吃的呢",
                        "price":20.99,
                        "image":require("assets/goods/1.jpg"),
                        "link":"http://baidu.com"
                    },
                    {
                        "name":"来自星星的猪肉脯...",
                        "commit":"星空的美丽,你无法想象,那吃的呢",
                        "price":20.99,
                        "image":require("assets/goods/1.jpg"),
                        "link":"http://baidu.com"
                    },
                    {
                        "name":"来自星星的猪肉脯...",
                        "commit":"星空的美丽,你无法想象,那吃的呢",
                        "price":20.99,
                        "image":require("assets/goods/1.jpg"),
                        "link":"http://baidu.com"
                    },
                    {
                        "name":"来自星星的猪肉脯...",
                        "commit":"星空的美丽,你无法想象,那吃的呢",
                        "price":20.99,
                        "image":require("assets/goods/1.jpg"),
                        "link":"http://baidu.com"
                    },
                    {
                        "name":"来自星星的猪肉脯...",
                        "commit":"星空的美丽,你无法想象,那吃的呢",
                        "price":20.99,
                        "image":require("assets/goods/1.jpg"),
                        "link":"http://baidu.com"
                    },


                ]
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
    .el-swiper{
        width: 800px;
        height: 500px;
    }


</style>





