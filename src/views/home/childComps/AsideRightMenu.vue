<template>
    <div class="aside-right">
        <img src="../../../assets/aside-right-image/1.jpg" alt="" width="450">
        <div class="advert">
            <p class="new-title">新闻资讯</p>
            <ul v-for="(item,id) in news">
                <li :key="id">{{id+1}}.{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AsideRightMenu",
        props:{
            news:{
                type:Array,
                default(){
                    return []
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
    .aside-right{
        margin-top:5px;
        margin-left: 5px;
    }
    .advert{
        height: 240px;
        background-color: #3d4236;
        opacity: 0.5;
        color:white;
    }
    .advert .new-title{
        color:white;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }
    .advert ul li{
        width: 100%;
        line-height: 40px;
        font-size: 16px;
        text-indent: 1em;
    }

    .advert ul li:hover{
        cursor: pointer;
        color:#ccc;
    }

</style>
