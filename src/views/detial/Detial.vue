<template>
    <div>
        <nav-menu></nav-menu>
        <div class="showall">
            <!--left -->
            <show-bot :good="goods[this.$route.query.fid].wares[this.$route.query.cid]"></show-bot>
            <!--conet -->
            <tb-property :good="goods[this.$route.query.fid].wares[this.$route.query.cid]" :title="titles"></tb-property>
            <!--right -->
            <ext-info ></ext-info>
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
        },
        data(){
            return {
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"正宗天津烤肉...",
                                "commit":"就问你,想要吗?那就来天津品尝吧",
                                "price":39.99,
                                "image":require("assets/goods/2.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"正宗天津烤肉...",
                                "commit":"就问你,想要吗?那就来天津品尝吧",
                                "price":39.99,
                                "image":require("assets/goods/2.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"正宗天津烤肉...",
                                "commit":"就问你,想要吗?那就来天津品尝吧",
                                "price":39.99,
                                "image":require("assets/goods/2.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"正宗天津烤肉...",
                                "commit":"就问你,想要吗?那就来天津品尝吧",
                                "price":39.99,
                                "image":require("assets/goods/2.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"正宗天津烤肉...",
                                "commit":"就问你,想要吗?那就来天津品尝吧",
                                "price":39.99,
                                "image":require("assets/goods/2.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"正宗天津烤肉...",
                                "commit":"就问你,想要吗?那就来天津品尝吧",
                                "price":39.99,
                                "image":require("assets/goods/2.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"正宗天津烤肉...",
                                "commit":"就问你,想要吗?那就来天津品尝吧",
                                "price":39.99,
                                "image":require("assets/goods/2.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
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
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            },
                            {
                                "name":"北京美味烤鸭...",
                                "commit":"正宗的味道,来品尝,吃了就忘不了...",
                                "price":59.99,
                                "image":require("assets/goods/3.jpg"),
                                "link":"/detial",
                                "sales":37,
                                "assess":40,
                                "stock":199,
                                "assessList":["非常喜欢", "一般", "不喜欢"]
                            }

                        ]
                    }
                ],
                stores:[
                    {
                        "name":"滴滴猪肉脯",
                        "logo":require("assets/images/ho_03.png"),
                        "grade":"初级店铺",
                        "telephone":"15012365897",
                        "location":"河南郑州市航海路"
                    }
                ],
                titles:{
                    "sales":"累计售出",
                    "assess":"累计评价",
                    "clazz":"评价",
                    "number":"数量",
                    "stock":"库存",
                    "toCart":"加入购物车",
                    "emp":"立即购买",
                    "postage": {
                            "msg":"邮费：包邮 支持货到付款",
                            "image":require("assets/images/me.png")
                        }
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
    .showall{
        width: 1240px;
        margin: 0 auto;
        margin-top: 15px;
    }
</style>
