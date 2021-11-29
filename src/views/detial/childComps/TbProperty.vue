<template>
    <div class="tb-property">
        <div class="tr-nobdr">
            <h3> 刘擎：做一个清醒的现代人</h3>
        </div>
        <div class="txt">
            <span class="nowprice">￥<a href="">49.00</a></span>
            <div class="cumulative">
                <span class="number ty1">累计售出<br /><em id="add_sell_num_363">370</em></span>
                <span class="number tyu">累计评价<br /><em id="add_sell_num_25">25</em></span>
            </div>
        </div>
        <div class="txt-h">
            <span class="tex-o">分类</span>
            <ul class="glist" id="glist" data-monitor="goodsdetails_fenlei_click">
                <li><a title="红色36g" href="">纸质书</a></li>
                <li><a title="蓝色16g" href="">电子书</a></li>
            </ul>
        </div>
        <div class="gcIpt">
            <span class="guT">数量</span>
            <input id="min" name="" type="button" value="-" />
            <input id="text_box" name="" type="text" value="1"style="width:30px; text-align: center; color: #0F0F0F;"/>
            <input id="add" name="" type="button" value="+" />
            <span class="Hgt">库存（99）</span>
        </div>
        <div class="nobdr-btns">
            <button class="addcart hu"><img src="../../../assets/images/shop.png" width="25" height="25"/>加入购物车</button>
            <button class="addcart yh"><img src="../../../assets/images/ht.png" width="25" height="25"/>立即购买</button>
        </div>
        <div class="guarantee">
            <span>邮费：包邮&nbsp;&nbsp;支持货到付款 <a href=""><img src="../../../assets/images/me.png"/></a></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TbProperty"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .tb-property{
        width:530px;
        height: 520px;
        margin-left: 50px;
        float: left;
    }
    .extInfo{
        width:220px;
        height: 520px;
        float: right;
    }
    .tr-nobdr{
        margin-top: 20px;
        padding-bottom: 10px;
    }
    .tr-nobdr h3{
        color: #171717;
        font-size: 28px;
        font-weight:400;
    }
    .txt{
        width: 520px;
        margin-top: 15px;
        overflow: hidden;
        background: #f8f8f8;
    }
    .nowprice{
        display: block;
        line-height: 100px;
        color: #f73a3a;
        font-size: 24px;
        float: left;
    }
    .nowprice a{
        font-size: 36px;
        color: #f73a3a;
    }
    .nowprice a:hover{text-decoration: none;}
    .cumulative{
        float: right;

    }
    .number{
        float: left;
        margin-top: 30px;
        padding: 0px 10px;
        border-right: #e7e7e7 solid 1px;
        font-size: 14px;
        text-align: center;
        color: #bfbfbf;
    }
    .number em{
        color: #5885c6;
        font-style:normal
    }
    .tyu{
        border: none;
    }
    .txt-h{
        width: 520px;
        overflow: hidden;
    }
    .tex-o{
        float: left;
        font-size: 14px;
        line-height: 80px;
        padding-right: 20px;
        color: #848484;
    }
    #glist{padding-top:25px;}
    #glist li{
        float: left;
        padding-right: 10px;
    }
    #glist li a{
        padding: 5px 8px;
        color: #222222;
        font-size: 16px;
        border: #e3e3e3 solid 1px;
        display: block;
    }
    #glist li a:hover{
        border: #f73a3a solid 1px;
        text-decoration: none;
        color: #f73a3a;
    }
    .gcIpt{
        height: 70px;
    }
    .guT{
        color: #848484;
        font-size: 14px;
        padding-right:18px;
        line-height: 70px;
    }
    .gcIpt input{
        border: #e3e3e3 solid 1px;
        padding: 5px 8px;
        color: #848484;
        font-size: 16px;}
    .nobdr-btns{
        padding-top: 25px;
    }
    .Hgt{ color: #424242; font-size:14px; padding-left: 10px;}
    .addcart{
        background: #fd532d;
        padding: 0px 50px;
        border-radius: 4px;
        color: #FFFFFF;
        margin-right: 10px;
        font-size:16px;
        line-height: 50px;
    }
    .yh{ background: #e60013;}
    .addcart img{vertical-align:middle;margin-bottom:3px;padding-right: 5px;}
    .guarantee{
        height: 50px;
    }
    .guarantee span{
        color: #666666;
        font-size: 14px;
        line-height: 50px;}
    .guarantee span a img{vertical-align:middle;margin-bottom:3px;}
</style>
