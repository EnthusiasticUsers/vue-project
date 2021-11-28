<template>
    <div class="aside-menu">
        <ul v-for="(item,id) in menu">
            <li :key="id" class="item">
                <a :href="'#' + item.name">
                    <div class="sign"><i :class="item.sign"></i></div>
                    <div class="title">{{item.title}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AsideMenu",
        props:{
            menu:{
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
    .aside-menu{
        position: fixed;
        left:94%;
        top:60%;
        width: 80px;
        height: 180px;
        border:solid 2px #ccc;
        /*box-shadow: 2px 2px 3px #aaaaaa;*/
    }
    .aside-menu ul li a{
        color: white;
        text-decoration: none;
    }
    .aside-menu ul li{
        width: 80px;
        height: 60px;
        text-align: center;
        background-color: #ddd;
        border-top: solid 1px #ccc;
        color:white;
        font-weight: bold;
    }
    .aside-menu ul li a .sign{
        font-size: 20px;
    }
    .aside-menu ul li.active{
        background-color: #4ac265;
        color:white;
    }
    .aside-menu ul li a:hover{
        background-color: red;
        cursor: pointer;
    }
</style>
