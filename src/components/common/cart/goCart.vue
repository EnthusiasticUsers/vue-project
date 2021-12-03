<template>
        <div class="cart" >
            <span>{{good.msg}}</span>
        </div>
</template>

<script>
    export default {
        name: "goCart",
        props:{
            good:{
                type:Object,
                default(){
                    return {}
                }
            },

        }
    }
</script>

<style scoped>
    .cart{
        position: fixed;
        top:20%;
        left:50%;
        padding: 8px;
        height:40px;
        z-index: 999;
        background-color: black;
        opacity: 0.8;
        color:white;
        font-size:16px;
        line-height: 40px;
        text-align: center;
    }

</style>
