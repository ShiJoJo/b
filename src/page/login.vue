<template>
    <div class="layoutBg fillcontain">
        <transition mode="in-out" name="form">
            <div class="formCenter">
                <el-header>XXX管理系统</el-header>
                <el-main>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm"  @keyup.enter.native="submitForm('loginForm')">
                        <el-form-item prop="username"><el-input placeholder="用户名" v-model="loginForm.username"></el-input></el-form-item>
                        <el-form-item prop="password"><el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input></el-form-item>
                        <el-form-item><el-button type="primary" @click="submitForm('loginForm')">登录</el-button></el-form-item>
                    </el-form>
                </el-main>
            </div>
        </transition>
    </div>
</template>
<script>
import {login} from '../api/login'
import {setCookie,getCookie} from '../config/cookie'
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            loginForm:{
                username:"",
                password:"",
            },
            rules:{
                username:[
                    {required:true,message:'请输入用户名',tigger:'blur'}
                ],
                password:[
                    {required:true,message:'请输入密码',tigger:'blur'}
                ]
            }
        }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate(async(valid)=>{
                if(valid){
                    const res = await login({username:this.loginForm.username,password:this.loginForm.password})
                    if (res.status==1) {
                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        });
                        this.$store.dispatch("setToken",res.token);
                        this.$router.push('/');
                    }else{
                        this.$message({
                            type: 'error',
                            message: res.message
                        });
                    }
                }
            })
        },
    }
}
</script>
<style lang="scss" scoped>
    @import '../style/mixin';
    .layoutBg{
        background-color: #324057;
        .formCenter{
            @include wh(320px, 286px);
            @include ctp(370px, 336px);
            padding: 25px;
            border-radius: 5px;
            text-align: center;
            background-color: #fff;
        }
    }
</style>

