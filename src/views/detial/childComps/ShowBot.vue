<template>
    <div class="showbot">
        <div id="showbox">
            <img src="../../../assets/images/photos/img01.png" width="400" height="400" id="imgbox" />
        </div><!--展示图片盒子-->
        <div id="showsum">
            <img src="../../../assets/images/photos/img01.png" />
            <img src="../../../assets/images/photos/img02.png" />
            <img src="../../../assets/images/photos/img03.png" />
            <img src="../../../assets/images/photos/img04.png" />
            <img src="../../../assets/images/photos/img05.png" />
        </div>
        <p class="showpage">
            <a href="#" id="showlast"> < </a>
            <a href="#" id="shownext"> > </a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ShowBot"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .showbot{float: left;}
    #showbox img{ width:400px;height: 400px;}
    #showsum { left:25px; margin-top:10px; padding-left: 35px}
    #showsum img { border:1px solid #ddd;}
    #showsum img{width: 60px;height: 70px;}

    .showpage { width:400px; position:relative;}
    .showpage a { display:block; width:15px; border:1px solid #ddd; height:70px; line-height:70px; background:#eee; text-align:center; font-size:18px; position:absolute; left:0; top:-76px; text-decoration:none; color:#999;}
    .showpage a#shownext { left:auto; right:0;}
    .showpage a:hover { background:#ccc; color:#777;}
</style>
