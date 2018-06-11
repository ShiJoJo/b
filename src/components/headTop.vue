<template>
    <div class="header_container">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown trigger="click" placement="bottom" @command="handleCommand">
            <p class="el-dropdown-link">
                admin<img src="/static/img/default.jpg" class="avator">
            </p>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
export default {
    methods:{
        handleCommand(){
            this.$store.dispatch("layoutOut").then(response=>{
                console.log(response)
                if(response.status==1){
                    this.$message({
                        type: 'success',
                        message: response.message
                    });
                    this.$router.push('/login');
                }
            }).catch((err) => {
                    this.$message.error(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
    .header_container{
		height: 60px;
		background-color: #EFF2F7;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
        .el-dropdown-link{
            cursor: pointer;
            .avator{
                @include wh(36px, 36px);
                border-radius: 50%;
                margin: 0 37px 0 10px;
                vertical-align: middle;
            }
        }
    }    
	.el-dropdown-menu__item{
        white-space:nowrap; 
    }
</style>
