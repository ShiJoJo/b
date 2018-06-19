<template>
    <div class="adminForm">
        <el-form :model="registForm" :rules="rules" ref="registForm"   @keyup.enter.native="submitForm('registForm')">
            <el-form-item prop="username"><el-input placeholder="用户名" v-model="registForm.username" class="fromInput"></el-input></el-form-item>
            <el-form-item prop="password" v-if="isAdd"><el-input type="password" placeholder="密码" v-model="registForm.password" class="fromInput"></el-input></el-form-item>
            <template v-for="item in role">
                <el-checkbox :indeterminate="item.all" @change="handleCheckAllChange(item.id,item.checkAll)" v-model="item.checkAll" class="headerCheck">{{item.name}}</el-checkbox>
                <el-checkbox-group v-model="item.checkedRole" @change="handleCheckedRolesChange(item.checkedRole,item.id)" class="mainCheck">
                    <el-checkbox v-for="(roleC,index) in item.children" :key="index" :label="roleC.id">{{roleC.name}}</el-checkbox>
                </el-checkbox-group>
            </template>
            <el-form-item><el-button type="primary" @click="submitForm('registForm')">保存</el-button></el-form-item>
        </el-form>
    </div>
</template>
<script>
import {register,editAdmin,editSave} from '../../api/getDate'
import roles from '@/config/admin'
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
                    {required:true,message:'请输入密码',tigger:'blur'},
                    {min:6,message:"最少6位字符",tigger:'blur'}
                ]
            },
            role:[],
            formJson:{},
            isAdd:true
        }
    },
    mounted:function(){
        editAdmin({id:this.$route.query.id});
        this.$route.query.id?this.isAdd=false:"";
        this.role = roles;
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate(async(valid)=>{
                if(valid){
                    let formJson = JSON.stringify(this.formJson);
                    if(this.isAdd){
                        const res = await register({username:this.registForm.username,password:this.registForm.password,role:formJson});
                    }else{
                        const res = await editSave({username:this.registForm.username,role:formJson});
                    }                    
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
        },
        handleCheckAllChange(index,value){
            this.role[index]["checkedRole"]=value?this.role[index]['roleArr']:[];
            this.formJson[index]=value?this.role[index]['roleArr']:[];
            this.role[index]["all"]=false;
        },
        handleCheckedRolesChange(val,id){
            let checkedCount = val.length;
            this.formJson[id]=val;
            this.role[id]["checkAll"]=checkedCount==this.role[id]["roleArr"].length;
            this.role[id]["all"]=checkedCount>0&&checkedCount<this.role[id]["roleArr"].length;
        },
    }
}
</script>
<style lang="scss" scoped>
    @import '../../style/mixin';
    .adminForm{
        position:absolute;
        top: 40px;
        left: 40px;
        z-index: 1;
        background-color: #fff;
        @include wh(100%,100%);
        .fromInput{
            width: 250px;
        }
        .headerCheck{
            margin-bottom: 15px;
        }
        .mainCheck{
            margin-bottom: 25px;
            margin-left: 25px;
        }
    }
</style>
