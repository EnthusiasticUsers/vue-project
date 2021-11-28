<template>
    <div class="back" @click="backTop">
        <div class="sign"><i class="el-icon-top"></i></div>
        <div class="title">回到顶部</div>
    </div>
</template>

<script>
    export default {
        name: "Back",
        methods:{
            backTop(){
                let timer = null;
                const that = this;
                cancelAnimationFrame(timer);
                timer = setInterval(() => {
                    let ispeed = Math.floor(-that.scrollTop / 5);
                    document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
                    if (that.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 3000);
            }
        },
        mounted() {
            window.addEventListener("scroll", this.backTop);
        },
        destroyed() {
            window.removeEventListener("scroll", this.backTop);
        }

    }
</script>

<style scoped>
    .back{
        position: fixed;
        left:94%;
        top:90%;
        width: 80px;
        height: 40px;
        border:solid 2px #ccc;
        font-size: 14px;
        text-align: center;
        background-color: #dd8075;
        border-top: solid 1px #ccc;
        color:white;
        font-weight: bold;
    }
    .back:hover{
        background-color: red;
        cursor: pointer;
    }
</style>
