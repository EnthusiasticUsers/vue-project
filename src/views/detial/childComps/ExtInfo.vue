<template>
    <div class="extInfo">
        <div class="brand-logo">
            <a href="" title="奥影汽车影音">
                <img :src="store.logo"/>
            </a>
        </div>
        <div class="seller-pop-box">
            <span class="tr">商家名称：{{store.name}}</span>
            <span class="tr">商家等级：{{store.grade}}</span>
            <span class="tr">客家电话：{{store.telephone}}</span>
            <span class="tr hoh">
            	            		<a :title="store.location" href="">所在地区：{{store.location}}</a>
            	            	</span>
        </div>
        <div class="seller-phone">
            <span v-for="(item,id) in seller" class="pop in" :data-name="item.name"><a href=""><img :src="item.image" alt="">{{item.name}}</a></span>
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
        name: "ExtInfo",
        props:{
            store:{
                type:Object,
                default(){
                    return {}
                }
            },
            seller:{
                type:Array,
                default() {
                    return [];
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
