<template>
    <div>
        <el-form :model="registForm" :rules="rules" ref="registForm">
            <el-form-item prop="username"><el-input placeholder="用户名" v-model="registForm.username"></el-input></el-form-item>
            <el-form-item prop="password"><el-input type="password" placeholder="密码" v-model="registForm.password"></el-input></el-form-item>
            <el-form-item><el-button type="primary" @click="submitForm('registForm')">保存</el-button></el-form-item>
        </el-form>
    </div>
</template>
<script>
import {register} from '../../api/getDate'
export default {
    data(){
        return{
            registForm:{
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
                    const res = await register({username:this.registForm.username,password:this.registForm.password})
                    if (res.status == 1) {
                        this.$message({
                            type: 'success',
                            message: res.message
                        });
                        this.$router.push('')
                    }else{
                        this.$message({
                            type: 'error',
                            message: res.message
                        });
                    }
                }
            })
        }
    }
}
</script>
