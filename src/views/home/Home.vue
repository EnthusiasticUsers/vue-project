<template>
    <div>
       <nav-bar class="nav">
           <div slot="left">
              <ul>
                  <li>首页</li>
                  <li>香辣</li>
                  <li>香甜</li>
              </ul>
           </div>
       </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Home",
        components:{
            NavBar
        }
    }
</script>

<style scoped>
    *{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .nav{
        width: 100%;
        height: 60px;
        background-color: #c9eeff;
    }
    .nav ul li{
        float:left;
        margin-left: 30px;
    }

</style>
