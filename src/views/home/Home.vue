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
                asideLeftMenu:[
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
                                "title": "好 物 推 荐",
                                "name":"recommend",
                                "color":"#409EFF",
                                "sign":"el-icon-s-goods",
                                "message": "查看更多",
                                "icon": "el-icon-d-arrow-right",
                                "wares":[
                                    {
                                        "name":"来自星星的猪肉脯...",
                                        "commit":"星空的美丽,你无法想象,那吃的呢",
                                        "price":20.99,
                                        "image":require("assets/goods/1.jpg"),
                                        "childImage":[
                                            {
                                                "image":require("assets/goods/good1/1.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/2.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/3.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/4.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/5.jpg")
                                            },
                                        ],
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"来自星星的猪肉脯...",
                                        "commit":"星空的美丽,你无法想象,那吃的呢",
                                        "price":20.99,
                                        "image":require("assets/goods/1.jpg"),
                                        "childImage":[
                                            {
                                                "image":require("assets/goods/good1/1.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/2.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/3.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/4.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/5.jpg")
                                            },
                                        ],
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"来自星星的猪肉脯...",
                                        "commit":"星空的美丽,你无法想象,那吃的呢",
                                        "price":20.99,
                                        "image":require("assets/goods/1.jpg"),
                                        "childImage":[
                                            {
                                                "image":require("assets/goods/good1/1.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/2.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/3.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/4.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/5.jpg")
                                            },
                                        ],
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"来自星星的猪肉脯...",
                                        "commit":"星空的美丽,你无法想象,那吃的呢",
                                        "price":20.99,
                                        "image":require("assets/goods/1.jpg"),
                                        "childImage":[
                                            {
                                                "image":require("assets/goods/good1/1.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/2.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/3.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/4.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/5.jpg")
                                            },
                                        ],
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"来自星星的猪肉脯...",
                                        "commit":"星空的美丽,你无法想象,那吃的呢",
                                        "price":20.99,
                                        "image":require("assets/goods/1.jpg"),
                                        "childImage":[
                                            {
                                                "image":require("assets/goods/good1/1.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/2.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/3.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/4.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/5.jpg")
                                            },
                                        ],
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"来自星星的猪肉脯...",
                                        "commit":"星空的美丽,你无法想象,那吃的呢",
                                        "price":20.99,
                                        "image":require("assets/goods/1.jpg"),
                                        "childImage":[
                                            {
                                                "image":require("assets/goods/good1/1.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/2.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/3.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/4.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/5.jpg")
                                            },
                                        ],
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"来自星星的猪肉脯...",
                                        "commit":"星空的美丽,你无法想象,那吃的呢",
                                        "price":20.99,
                                        "image":require("assets/goods/1.jpg"),
                                        "childImage":[
                                            {
                                                "image":require("assets/goods/good1/1.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/2.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/3.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/4.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/5.jpg")
                                            },
                                        ],
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"来自星星的猪肉脯...",
                                        "commit":"星空的美丽,你无法想象,那吃的呢",
                                        "price":20.99,
                                        "image":require("assets/goods/1.jpg"),
                                        "childImage":[
                                            {
                                                "image":require("assets/goods/good1/1.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/2.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/3.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/4.jpg")
                                            },
                                            {
                                                "image":require("assets/goods/good1/5.jpg")
                                            },
                                        ],
                                        "link":"/detial"
                                    }
                                ]
                            },
                            {
                                "title": "猜 你 喜 欢",
                                "name":"like",
                                "color":"#67C23A",
                                "sign":"el-icon-star-on",
                                "message": "查看更多",
                                "icon": "el-icon-d-arrow-right",
                                "wares":[
                                    {
                                        "name":"正宗天津烤肉...",
                                        "commit":"就问你,想要吗?那就来天津品尝吧",
                                        "price":39.99,
                                        "image":require("assets/goods/2.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"正宗天津烤肉...",
                                        "commit":"就问你,想要吗?那就来天津品尝吧",
                                        "price":39.99,
                                        "image":require("assets/goods/2.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"正宗天津烤肉...",
                                        "commit":"就问你,想要吗?那就来天津品尝吧",
                                        "price":39.99,
                                        "image":require("assets/goods/2.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"正宗天津烤肉...",
                                        "commit":"就问你,想要吗?那就来天津品尝吧",
                                        "price":39.99,
                                        "image":require("assets/goods/2.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"正宗天津烤肉...",
                                        "commit":"就问你,想要吗?那就来天津品尝吧",
                                        "price":39.99,
                                        "image":require("assets/goods/2.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"正宗天津烤肉...",
                                        "commit":"就问你,想要吗?那就来天津品尝吧",
                                        "price":39.99,
                                        "image":require("assets/goods/2.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"正宗天津烤肉...",
                                        "commit":"就问你,想要吗?那就来天津品尝吧",
                                        "price":39.99,
                                        "image":require("assets/goods/2.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"正宗天津烤肉...",
                                        "commit":"就问你,想要吗?那就来天津品尝吧",
                                        "price":39.99,
                                        "image":require("assets/goods/2.jpg"),
                                        "link":"/detial"
                                    }
                                ]
                            },
                            {
                                "title": "日 用 食 品",
                                "name":"food",
                                "color":"#F56C6C",
                                "sign":"el-icon-shopping-cart-full",
                                "message": "查看更多",
                                "icon": "el-icon-d-arrow-right",
                                "wares":[
                                    {
                                        "name":"北京美味烤鸭...",
                                        "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                        "price":59.99,
                                        "image":require("assets/goods/3.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"北京美味烤鸭...",
                                        "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                        "price":59.99,
                                        "image":require("assets/goods/3.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"北京美味烤鸭...",
                                        "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                        "price":59.99,
                                        "image":require("assets/goods/3.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"北京美味烤鸭...",
                                        "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                        "price":59.99,
                                        "image":require("assets/goods/3.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"北京美味烤鸭...",
                                        "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                        "price":59.99,
                                        "image":require("assets/goods/3.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"北京美味烤鸭...",
                                        "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                        "price":59.99,
                                        "image":require("assets/goods/3.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"北京美味烤鸭...",
                                        "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                        "price":59.99,
                                        "image":require("assets/goods/3.jpg"),
                                        "link":"/detial"
                                    },
                                    {
                                        "name":"北京美味烤鸭...",
                                        "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                        "price":59.99,
                                        "image":require("assets/goods/3.jpg"),
                                        "link":"/detial"
                                    }

                                ]
                            }
                        ],
                qrcode:[
                    {
                        "image":require("assets/qrcodes/qrcode.jpg"),
                        "link":"https://www.mi.com/"
                    },
                    {
                        "image":require("assets/qrcodes/qrcode.jpg"),
                        "link":"https://www.mi.com/"
                    }
                ],
                footerMenu:[
                    {
                        "title":"预约点餐服务",
                        "icon":"el-icon-phone",
                         "childs":[
                             {
                                 "name":"帮助中心"
                             },
                             {
                                 "name":"账户管理"
                             },
                             {
                                 "name":"购物指南"
                             },
                             {
                                 "name":"订单操作"
                             }
                         ]
                    },
                    {
                        "title":"最新食品预览",
                        "icon":"el-icon-picture",
                        "childs":[
                            {
                                "name":"服务支持"
                            },
                            {
                                "name":"售后政策"
                            },
                            {
                                "name":"自助服务"
                            },
                            {
                                "name":"相关下载"
                            }
                        ]
                    },
                    {
                        "title":"关于我们",
                        "icon":"el-icon-user-solid",
                        "childs":[
                            {
                                "name":"加入我们",
                            },
                            {
                                "name":"了解我们"
                            },
                            {
                                "name":"投资者关系"
                            },
                            {
                                "name":"企业社会责任"
                            }
                        ]
                    },
                    {
                        "title":"帮助中心",
                        "icon":"el-icon-s-help",
                        "childs":[
                            {
                                "name":"礼物码"
                            },
                            {
                                "name":"F码通道"
                            },
                            {
                                "name":"防伪查询"
                            },
                            {
                                "name":"人工客服"
                            }
                        ]
                    },
                    {
                        "title":"线下门店",
                        "icon":"el-icon-s-shop",
                        "childs":[
                            {
                                "name":"鱼米之乡"
                            },
                            {
                                "name":"服务网点"
                            },
                            {
                                "name":"授权餐饮店"
                            },
                            {
                                "name":"诚信经营"
                            }
                        ]
                    }

                ]
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
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .main{
        height: 2200px;
    }
    .el-swiper{
        width: 800px;
        height: 500px;
    }
    .fix-menu{
        width: 100%;
        position: fixed;
        z-index: 2;
        top:0;
    }
    .clear{
        clear: both;
    }

</style>





