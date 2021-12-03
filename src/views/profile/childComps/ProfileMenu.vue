<template>
    <div class="menu">
        <ul v-for="(item,fid) in menu" :key="fid">
            <li>
                <span class="title"><i :class="item.icon"></i> {{item.name}}</span>
                <ul v-for="(child,cid) in item.childs" :key="cid">
                    <li><a :href="child.link">{{child.name}}</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProfileMenu",
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
    *{margin: 0;padding: 0;list-style: none;}
    .menu{
        background-image: url("../../../assets/background-image/1.png");
        background-color: white;
        float:left;
        width: 250px;
        height: 1000px;
        margin: 15px;
        box-shadow: 3px 3px 5px #aaaaaa;
    }
    .menu ul{width: 140px;margin: auto;}
    .menu ul .title{font-size: 24px;font-weight: bold;margin-top: 15px;}
    .menu ul li{margin-top: 20px;}
    .menu ul li ul li{margin-top: 10px;text-indent: 2em;}
    .menu ul li ul li a{color:black;font-size: 16px;text-decoration: none;}
    .menu ul li ul li a:hover{color: #67C23A;font-size: 18px;font-weight: bold}
</style>
