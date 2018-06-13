<template>
    <div class="fillcontain">
        <div>
            <img src="../image/404.png" class="img_404">
        </div>
        <router-link to="/companyFile" class="return_home">返回首页</router-link>
    </div>
</template>

<style lang="scss" scoped>
    @import '../style/mixin';
    .fillcontain{
        background-image: url(../image/sky.jpg);
        background-size: cover;
        text-align: center;
        min-height: 550px;
        min-width: 419px;
        .img_404{
            padding: 150px 0;
        }
        .return_home{
            padding: 10px 18px;
            border-radius: 10px;
            background-color: #fff;
            color:black;
            margin-bottom: 20px;
        }
    }
</style>
