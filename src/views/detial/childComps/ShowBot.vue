<template>
    <div class="showbot">
        <div id="showbox">
            <img :src="good.childImage[0].image" width="400" height="400" id="imgbox" />
        </div><!--展示图片盒子-->
        <div id="showsum">
            <ul v-for="(item,id) in good.childImage">
                <li class="good-image" @mouseover="changeGood(id)">
                    <img :src="item.image" />
                </li>
            </ul>
        </div>
        <p class="showpage">
            <a href="#" id="showlast" @click="prev"> < </a>
            <a href="#" id="shownext" @click="next"> > </a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ShowBot",
        data(){
            return {}
        },
        props: {
            good: {
                type: Object,
                default() {
                    return {
                        index:0
                    }
                }
            }
        },
        methods: {
            setGood(){
                let box = document.getElementById("showbox").children[0];
                let goodImageList = document.getElementsByClassName("good-image");
                for(var i = 0; i < goodImageList.length; i++){
                    if(this.index === i){
                        goodImageList[this.index].style.opacity = 1;
                    }else{
                        goodImageList[i].style.opacity = 0.5;
                    }
                }
                let src = goodImageList[this.index].children[0].getAttribute("src");
                box.setAttribute("src", src);
            },
            changeGood(index) {
                this.index = index;
                this.setGood();
            },
            prev(){
                this.index = this.index > 0 ? --this.index : this.index;
                this.setGood();
            },
            next(){
                let goodImageList = document.getElementsByClassName("good-image");
                this.index = this.index < goodImageList.length-1 ? ++this.index : this.index;
                this.setGood();
            }
        }
    }
</script>

<style scoped>
    *{margin: 0;padding: 0;list-style: none;}
    .showbot{float: left;}
    #showbox img{ width:400px;height: 400px;}
    #showsum ul li{float: left;opacity: .5}
    #showsum { left:25px; margin-top:10px; padding-left: 35px}
    #showsum ul li img { border:1px solid #ddd;}
    #showsum ul li img{width: 60px;height: 70px;}

    .showpage { width:400px; position:relative;}
    .showpage a { display:block; width:15px; border:1px solid #ddd; height:70px; line-height:70px; background:#eee; text-align:center; font-size:18px; position:absolute; left:0; top:-76px; text-decoration:none; color:#999;}
    .showpage a#shownext { left:auto; right:0;}
    .showpage a:hover { background:#ccc; color:#777;}
</style>
