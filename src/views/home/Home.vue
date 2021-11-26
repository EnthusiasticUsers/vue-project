<template>
    <div>
       <nav-bar class="nav">
           <div slot="left">
               <h1>left</h1>
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
    .nav{
        width: 100%;
        height: 60px;
        background-color: #cccccc;
    }
</style>
