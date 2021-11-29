<template>
    <div class="gdetail">
        <div class="dp_wrap_title">
            推荐搭配
        </div>
        <div class="dp_wrap">
            <!-- 结算 -->
            <div class="dq_total_wrap">
                <div class="icon_equal">
                    =
                </div>
                <div class="dp_num">已经选择0个配件
                    <p class="dq_price">总计<span>￥49.00</span>元</p>
                    <button class="get">立即购买</button>
                </div>
            </div>
            <!-- 搭配1 -->
            <div class="dq_ori">
                <a class="dq_ori_prd" href=""><img src="../../../assets/images/photos/img01.png"/></a>
                <a class="ori_prd" href="">刘擎：做一个清醒的现代人</a>
                <p class="ori_prd dp_wrap_pprice_ori">￥49.00</p>
            </div>
            <div class="scroll_wrap">
                <!-- 搭配2 -->
                <div class="dp_prd">
                    <div class="icon_plus">+</div>
                    <div class="dp_p_wrap">
                        <a class="dp_wrap_pimg" href="" target="_blank"><img src="../../../assets/images/photos/img06.jpg"/></a>
                        <a class="dp_wrap_pname" href="" target="_blank">桶川跟踪狂杀人事件</a>
                        <p class="dp_wrap_pprice">
                            <label>
                                <input type="checkbox" data-price="199" data-item="570b1b2f5efb114c378b4575">
                                ￥59.00
                            </label>
                        </p>
                    </div>
                </div>
                <!-- 搭配3 -->
                <div class="dp_prd">
                    <div class="icon_plus">+</div>
                    <div class="dp_p_wrap">
                        <a class="dp_wrap_pimg" href="" target="_blank"><img src="../../../assets/images/photos/img07.jpg"/></a>
                        <a class="dp_wrap_pname" href="" target="_blank">认识世界：古代与中世</a>
                        <p class="dp_wrap_pprice">
                            <label>
                                <input type="checkbox" data-price="199" data-item="570b1b2f5efb114c378b4575">
                                ￥49.00
                            </label>
                        </p>
                    </div>
                </div>
                <!-- 搭配4 -->
                <div class="dp_prd">
                    <div class="icon_plus">+</div>
                    <div class="dp_p_wrap">
                        <a class="dp_wrap_pimg" href="" target="_blank"><img src="../../../assets/images/photos/img08.jpg"/></a>
                        <a class="dp_wrap_pname" href="" target="_blank">耶鲁大学公开课：政治</a>
                        <p class="dp_wrap_pprice">
                            <label>
                                <input type="checkbox" data-price="199" data-item="570b1b2f5efb114c378b4575">
                                ￥39.99
                            </label>
                        </p>
                    </div>
                </div>
                <!-- 搭配5 -->
                <!-- 产品结束 -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gdetail"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .gdetail{
        width: 1240px;
        margin: 0 auto;
        clear: both;
    }
    .dp_wrap_title{
        display: block;
        width: 1240px;
        height: 30px;
        overflow: hidden;
        color: #666666;
        font-size: 16px;
    }
    .dp_wrap{
        width: 1240px;
        overflow: hidden;
        border:1px solid #e5e5e5 ;
    }
    .dq_total_wrap{
        background-color: #F8F8F8;
        width:200px;
        height: 250px;
        float: right;
        overflow: hidden;
        font-size: 14px;
    }
    .icon_equal{
        background-color: #FFFFFF;
        font-size:30px;
        text-align: center;
        font-weight: bold;
        width: 40px;color: #d2d2d2;
        line-height: 250px;display: inline-block;

    }
    .dp_num{
        width: 150px;
        display: inline-block;
        color: #666666;
        font-size: 14px; line-height: 2;
        text-align: center;
        margin-top: 10px;}
    .dq_price{
        display: inline-block;
        color:#666666;
    }
    .dq_price span{ color: #f63c30; font-size:20px;}
    .get{
        width: 115px;
        height: 38px;
        background: #f63c30;
        color: #FFFFFF;
        font-size: 14px;
        margin-top:5px;
    }
    .dq_ori{
        height:250px;
        width: 170px;
        text-align: center;
        background: #fefefe;
        border-right: #E5E5E5 solid 1px;
        float: left;
    }
    .dq_ori_prd{
        display: block;
        margin: 30px auto 15px;
    }
    .dq_ori_prd img{
        width: 120px;
        height: 120px;
        vertical-align:top;
    }
    .ori_prd{
        display: block;
        color: #666666;
        font-size: 14px;
        padding: 0px 10px;
    }
    .ori_prd:hover{text-decoration: none; color: #fd532d;}
    .dp_wrap_pprice_ori{ color: #fd532d;line-height: 2;}
    .dp_prd{
        display: block;
        overflow: hidden;

        float: left;

    }
    .scroll_wrap{
        width:740px;
        float: left;
    }
    .icon_plus{
        width: 30px;font-weight: bold;
        text-align: center;
        font-size: 30px;
        color:#d2d2d2;
        line-height: 250px;
        display: inline-block;
    }
    .dp_p_wrap{
        display: inline-block;
        float: right;
        text-align: center;
        width:170px;
    }
    .dp_wrap_pimg{
        display: block;
        margin: 30px auto 15px;
    }
    .dp_wrap_pimg img{
        width: 120px;
        height: 120px;
        vertical-align:top;}
    .dp_wrap_pname{
        display: block;
        padding: 0px 10px;
        font-size: 14px;
        color: #666666;
    }
    .dp_wrap_pname:hover{text-decoration: none; color: #fd532d;}
    .dp_wrap_pprice{font-size: 14px; color: #fd532d;margin-top: 10px;}

    /* 商品评价 */
    .gdetail{
        width:1240px;
        margin: 0 auto;
        margin-top: 20px;
        clear:both;
    }
    .ac-mod-list{
        width: 200px;
        margin: 0 auto;
        margin-bottom: 15px;
        text-align: center;
    }
    .ac-mod-list dt{
        padding: 5px;
    }
    .ac-mod-list dt img{
        width:180px;
        height: 155px;
    }
    .ac-mod-list dd{
        color: #424242;
        font-size: 14px;
    }
    .ac-mod-list dd span{
        display:block;
        color: #e31939;
        line-height: 2;
    }
    .detail{
        float:right;
    }
    .sticky {
        position: fixed;
        top: 0;
    }
    .aside{
        width:230px;
        height:760px;
        float: left;
        border: #ebebeb solid 1px;
    }
    .aside h3{
        width: 220px;
        padding: 5px;
        background: #fcfcfc;
        border-bottom: #ebebeb solid 1px;
        float: left;
        font-size: 14px;
        color: #424242;
        line-height:40px;
    }
    .aside h3 span{
        float: right;
        color: #b7b7b7;
        line-height: 45px;
        font-size: 12px;
    }
    .aside h3 span img{
        vertical-align: middle;
        margin-bottom: 2px;
        padding-right: 5px;
    }
    .active_tab{
        width:1000px;
        margin:0 auto;
        margin-bottom: 20px;
        border-bottom:#e4393c solid 1px;
        height:37px;
        line-height:37px;
        background:#f7f7f7;
    }
    .active_tab a{
        color:#666666;font-size: 14px;
        text-decoration:none;
    }
    .active_tab a:hover{
        color:#ffffff;
        text-decoration:none;
    }
    .act_title_left{
        float:left;
        width:70%;
    }
    .act_title_left li{
        float:left;
        width:150px;
        color:#666666;
        text-align:center;
        height:37px
    }
    .act_active{
        background:#e4393c;
        border-bottom:none !important;
        color: #ffffff;
    }
    .act_active a{color:#ffffff; font-size: 14px;}
    .act_title_right{
        float:right;
    }
    .mui-ac{
        background: #e4393c none repeat scroll 0 0;

        float: left;
        font-size: 14px;
        height:25px;
        margin-top: 10px;
        line-height:25px;
        margin-left: 20px;
        padding: 0 8px;
    }
    .mui-ac a{color: #ffffff;}
    .mui{
        float: left;margin-top:2px;
    }
    #mui-a{
        color: #666666;
    }
    #mui-a:hover{color: #666666;}

    .active_list{
        width:1000px;
        margin:0 auto;
    }
    .active_list a{text-decoration:none;}
    #ui-a{width: 1000px;
        height: 100%;
        overflow: hidden;}
    #ui-a ul{width:950px;
        margin: 0 auto;}
    #ui-a ul li{
        width:950px;
        height: 100%;
        color: #424242;
        font-size: 14px;
        line-height: 2;
        overflow: hidden;
    }
    #ui-a ul li img{
        width:950px;
        height: 100%;
        display: block;
    }
    .morejia{
        background: #f00 none repeat scroll 0 0;
        border-radius: 15px;
        color: #fff;
        display: block;
        float: right;
        font-size: 12px;
        margin: 20px 0;
        padding: 2px 5px;
    }
    .morejia:hover{
        color: #fff;
    }
    #bit{
        width: 1000px;
        height: 100%;
        overflow: hidden;
    }
    #bit ul{
        width:950px;
        margin: 0 auto;}
    #bit ul li{
        width:950px;
        height: 100%;
        overflow: hidden;
    }
    #bit ul li img{
        width:950px;
        height: 100%;
        display: block;}
    #uic{width: 1000px;
        height: 100%;
        overflow: hidden;}
    #uic ul{
        width:950px;
        margin: 0 auto;}
    #uic ul span{
        width:950px;
        margin: 0 auto;
        height: 100%;

    }
    #uic ul span img{
        width:950px;
        height: 100%;
        display: block;}
    #uic ul p{
        text-align:left;
        line-height: 2;
        font-size: 14px;
        color: 424242;
    }
</style>
