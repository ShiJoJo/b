<template>
    <div class="fillcontain">
        <div>
            <img src="../image/404.png" class="img_404">
        </div>
        <a href="/companyFile" class="return_home">返回首页</a>
    </div>
</template>
<style lang="scss" scoped>
    @import '../style/mixin';
    .fillcontain{
        background-image: url(../image/sky.jpg);
        background-size: cover;
        text-align: center;
        .img_404{
            padding: 150px 0;
        }
        .return_home{
            padding: 10px 18px;
            border-radius: 10px;
            background-color: #fff;
            color:black;
        }
    }
</style>
