<template>
    <div class="extInfo">
        <div class="brand-logo">
            <a href="" title="奥影汽车影音">
                <img src="../../../assets/images/ho_03.png"/>
            </a>
        </div>
        <div class="seller-pop-box">
            <span class="tr">商家名称：BookStore</span>
            <span class="tr">商家等级：初级店铺</span>
            <span class="tr">客家电话：15012365897</span>
            <span class="tr hoh">
            	            		<a title="河南郑州市航海路57号河南郑州市航海路57号" href="">所在地区：河南郑州市航海路57号河南郑州市航海路57号</a>
            	            	</span>
        </div>
        <div class="seller-phone">
            	            	<span class="pop im">
            	            		<a href="" data-name="联系卖家"><img src="../../../assets/images/phon.png"/>联系卖家</a>
            	            	</span>
            <span class="pop in">
            	            		<a href="" data-name="咨询卖家"><img src="../../../assets/images/qq.png"/>咨询卖家</a>
            	            	</span>
            <span class="pop in">
            	            		<a href="" data-name="进店逛逛"><img src="../../../assets/images/shop-line.png"/>进店逛逛</a>
            	            	</span>
            <span class="pop in">
            	            		<a href="" data-name="关注店铺"><img src="../../../assets/images/staar.png"/>关注店铺</a>
            	            	</span>
        </div>
        <div class="jd-service">
            <a href="">
                <img src="../../../assets/images/ho_07.png"/>
            </a>
        </div>
        <div class="suport-icons">
            <h4>扫一扫<br />手机下单更优惠</h4>
            <img src="../../../assets/images/ho_11.jpg"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExtInfo"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .extInfo{
        width:220px;
        height: 520px;
        float: right;
    }
    .brand-logo a img{
        margin-top: 10px;
    }
    .seller-pop-box{
        width:200px;
        overflow: hidden;
        padding:10px 0px 10px 20px;
    }
    .tr{
        color: #666666;
        display: block;
        width:200px;
        font-size:14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 2;
    }
    .tr.hoh a{color:#005aa0;}
    .tr.hoh a:hover{text-decoration: none;}
    .seller-phone{
        width: 220px;
        height:85px;
        overflow: hidden;

    }
    .pop{
        float: left;
        margin: 0px 0px 10px 18px;
    }
    .pop a{
        color: #666666;
        background: #f9f9f9;
        border: #cdcdcd solid 1px;
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;}
    .pop a:hover{ color: #000000; text-decoration: none;}
    .pop a img{vertical-align:middle;margin-bottom:3px; margin-right:4px;}
    .jd-service{
        width: 220px;
        text-align: center;
        margin-top: 10px;
    }
    .jd-service img:hover{transform:rotateY(360deg);
        transition:1s;}
    .suport-icons{
        width: 220px;
        text-align: center;
    }
    .suport-icons h4{
        color: #666666;
    }
    .suport-icons img{ padding-top: 10px;}
    .suport-icons img:hover{transform: scale(1.1); transition: 1s;}
</style>
