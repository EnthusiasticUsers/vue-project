<template>
    <div class="profile">
        <div class="welcome">
            <span>欢迎你超级会员 administrator! 您上次登录时间为 2021/12/01 21:10</span>
        </div>
        <div class="seller-center">
            <p><i class="el-icon-sell"></i>订单中心</p>
            <div class="seller">
                <div class="number">
                    <span class="add-bold">订单编号:</span>
                    <span> 1111012121109313121</span>
                </div>
                <div class="number">
                    <span class="add-bold">订单账户:</span>
                    <span> admin</span>
                </div>
                <div class="number">
                    <span class="add-bold">订单地址:</span>
                    <span> 杭州职业技术学院</span>
                </div>
                <div class="number">
                    <span class="add-bold">商家电话:</span>
                    <span> 13258897251</span>
                </div>
            </div>
        </div>
        <div class="seller-center profile-center">
            <p><i class="el-icon-user"></i>个人中心</p>
            <div class="seller">
                <div class="number">
                    <span class="add-bold">订单编号:</span>
                    <span> 1111012121109313121</span>
                </div>
                <div class="number">
                    <span class="add-bold">订单账户:</span>
                    <span> admin</span>
                </div>
                <div class="number">
                    <span class="add-bold">订单地址:</span>
                    <span> 杭州职业技术学院</span>
                </div>
                <div class="number">
                    <span class="add-bold">商家电话:</span>
                    <span> 13258897251</span>
                </div>
            </div>
        </div>
        <div class="seller-center profile-center">
            <p><i class="el-icon-s-help"></i>售后服务</p>
            <div class="seller">
                <div class="number">
                    <span class="add-bold">订单编号:</span>
                    <span> 1111012121109313121</span>
                </div>
                <div class="number">
                    <span class="add-bold">订单账户:</span>
                    <span> admin</span>
                </div>
                <div class="number">
                    <span class="add-bold">订单地址:</span>
                    <span> 杭州职业技术学院</span>
                </div>
                <div class="number">
                    <span class="add-bold">商家电话:</span>
                    <span> 13258897251</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileData"
    }
</script>

<style scoped>
    .profile{
        background-image: url("../../../assets/background-image/2.png");
        background-size: contain;
        background-color: #e4fcfc;
        float:left;
        width: 1100px;
        height: 1000px;
        margin:15px;
        box-shadow: 3px 3px 5px #aaaaaa;
    }
    .profile .seller-center,.profile-center,.after-sale,.account-management{clear:both;height: 150px;margin-top: 5px;}
    .profile .profile-center{margin-top:160px;}
    .profile .welcome{border-bottom: solid 1px #fccfcd;padding: 15px;text-indent: 2em;}
    .profile .seller-center{width: 1000px;}
    .profile .seller-center p{font-size:32px;font-weight: bold;text-indent: 1em;}
    .profile .seller-center .seller{
        height: 200px;
        background-color: rgba(255,255,255,.7);
        box-shadow: 3px 3px 5px #aaaaaa;
        border-radius:10px;
        margin-left: 60px;
        line-height: 70px;
    }
    .profile .seller-center .seller .number {
        width: 400px;
        font-size: 20px;
        font-weight: normal;
        float: left;
        margin-top: 15px;
        margin-left: 30px;
    }
    .profile .seller-center .seller .number .add-bold{font-weight: bold;}
</style>
