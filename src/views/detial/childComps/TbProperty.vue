<template>
    <div class="tb-property">
        <div class="tr-nobdr">
            <h3> {{good.name}}</h3>
        </div>
        <div class="txt">
            <span class="nowprice">￥<a href="">{{good.price}}</a></span>
            <div class="cumulative">
                <span class="number ty1">{{title.sales}}<br /><em id="add_sell_num_363">{{good.sales}}</em></span>
                <span class="number tyu">{{title.assess}}<br /><em id="add_sell_num_25">{{good.assess}}</em></span>
            </div>
        </div>
        <div class="txt-h">
            <span class="tex-o">{{title.clazz}}</span>
            <ul  class="glist" id="glist" data-monitor="goodsdetails_fenlei_click">
                <li v-for="(item,id) in good.assessList"><span  :title="id" class="clazz" @click="selectGood(id)">{{item}}</span></li>
            </ul>
        </div>
        <div class="gcIpt">
            <span class="guT">{{title.number}}</span>
            <input id="reduce" class="btn" name="" type="button" value="-" @click="reduce" />
            <input id="text_box" name="" type="text" v-model="goodnumber" style="width:30px; text-align: center; color: #0F0F0F;"/>
            <input id="add" class="btn" name="" type="button" value="+" @click="add" />
            <span class="Hgt">{{title.stock}}（{{good.stock}}）</span>
        </div>
        <div class="nobdr-btns">
            <button class="addcart hu" @click="sendGood"><i class="el-icon-shopping-cart-full"></i>{{title.toCart}}</button>
            <button class="addcart yh" @click="sendGood"><i class="el-icon-star-on"></i>{{title.emp}}</button>
        </div>
        <div class="guarantee">
            <span>{{title.postage.msg}} <a href=""><img :src="title.postage.image"/></a></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TbProperty",
        props:{
            good:{
                type:Object,
                default(){
                    return {}
                }
            },
            title:{
                type:Object,
                default() {
                    return {}
                }
            }
        },
        data(){
            return {
                goodnumber:1,
                fid:this.$route.query.fid,
                cid:this.$route.query.cid,
                goods:JSON.parse(window.localStorage.getItem("goods")) || []
            }
        },
        methods:{
            reduce(){
                this.goodnumber = this.goodnumber <= 1 ? this.goodnumber : --this.goodnumber;
            },
            add(){
                this.goodnumber = this.goodnumber >= this.good.stock ? this.goodnumber : ++this.goodnumber;
            },
            selectGood(index){
                let clazzList = document.getElementsByClassName("clazz");
                for(let i = 0; i < clazzList.length; i++){
                    if(index === i){
                        clazzList[index].className = "clazz active";
                    }else{
                        clazzList[i].className = "clazz";
                    }
                }
            },
            sendGood(){
                var item = this.getGood();
                if(item){
                    console.log("yes:" + this.good);
                    item.number =  Number(item.number) + this.goodnumber;
                    item.msg = "加入购物车成功";
                    this.$emit("sendGood", item);
                }else{
                    console.log("error:" + this.good);
                    this.good.fid = this.$route.query.fid;
                    this.good.cid = this.$route.query.cid;
                    this.good.number = this.goodnumber;
                    this.good.msg = "加入购物车成功";
                    this.goods.push(this.good);
                    this.$emit("sendGood", this.good);
                }

                window.localStorage.setItem("goods", JSON.stringify(this.goods));
            },
            getGood(){
                var good = null;
                this.goods.forEach(item => {
                    if(item.fid === this.fid && item.cid === this.cid){
                        good = item;
                    }
                });
                return good;
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
    .tb-property {
        width: 530px;
        height: 520px;
        margin-left: 50px;
        float: left;
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
    .txt-h #glist li .clazz.active{
        text-decoration: none;
        color:red;
        border:solid 1px #fa1816;
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
    #glist li span{
        padding: 5px 8px;
        color: #222222;
        font-size: 16px;
        border: #e3e3e3 solid 1px;
        display: block;
    }
    #glist li span:hover{
        border: #f73a3a solid 1px;
        text-decoration: none;
        color: #f73a3a;
        cursor: pointer;
    }
    .gcIpt{
        height: 70px;
    }
    .gcIpt .btn:hover{
        background-color: #ddd;
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
    .addcart:hover{cursor: pointer;background-color: #fd4315;}
    .yh{ background: #e60013;}
    .addcart i{font-size: 30px;}
    .addcart img{vertical-align:middle;margin-bottom:3px;padding-right: 5px;}
    .guarantee{height: 50px;}
    .guarantee span{color: #666666;font-size: 14px;line-height: 50px;}
    .guarantee span a img{vertical-align:middle;margin-bottom:3px;}
</style>
