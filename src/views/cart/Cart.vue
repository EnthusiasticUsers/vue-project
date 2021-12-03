<template>
    <div>
        <nav-menu></nav-menu>
       <div class="box">
           <div class="main">
               <div class="cart-name"><i class="el-icon-shopping-cart-full"></i>购 物 车</div>
               <good :goods="goods"></good>
               <cal-cart :goods="goods"></cal-cart>
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
    export default {
        name: "Cart",
        data(){
            return {
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
                goods:[
                            {
                                "name":"来自星星的猪肉脯...",
                                "commit":"星空的美丽,你无法想象,那吃的呢",
                                "price":20.99,
                                "image":require("assets/goods/1.jpg"),
                                "link":"/detial",
                                "count":3
                            },
                            {
                                "name":"正宗天津烤肉...",
                                "commit":"就问你,想要吗?那就来天津品尝吧",
                                "price":39.99,
                                "image":require("assets/goods/2.jpg"),
                                "link":"/detial",
                                "count":3,

                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "count":5
                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "count":5
                            }
                ]
            }
        },
        components:{
            NavMenu,
            FooterMenu,
            Good,
            CalCart
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
