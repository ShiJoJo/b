<template>
    <div>
        <headTop></headTop>
        <div class="componyFile">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="中文名">
                    <el-input v-model="form.name" class="inputWid" :disabled="formName"></el-input><el-button @click.prevent="editInput('formName',$event)">编辑</el-button>
                </el-form-item>
                <el-form-item label="英文名">
                    <el-input v-model="form.esName" class="inputWid" :disabled="formEsName"></el-input><el-button @click.prevent="editInput('formEsName',$event)">编辑</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="clickSubmit(form)">提交</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData">
                <el-table-column prop="index" label="序列号" width='70'></el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="detail" label="内容"></el-table-column>
                <el-table-column label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import headTop from '../components/headTop'
import {saveCulture} from '../api/getDate'
export default {
    data(){
        return {
            form:{
                name:"1",
                esName:"1"
            },
            formName:true,
            formEsName:true,
            tableData:[{
                index:3,
                title:"企业愿景3",
                detail:'成为受世人尊重的，可以信赖的电子商务合作伙伴和数据营销整体解决方案提供商'
            },{
                index:1,
                title:"企业愿景1",
                detail:'成为受世人尊重的，可以信赖的电子商务合作伙伴和数据营销整体解决方案提供商'
            },{
                index:2,
                title:"企业愿景2",
                detail:'成为受世人尊重的，可以信赖的电子商务合作伙伴和数据营销整体解决方案提供商'
            }]
        }
    },
    components:{
        headTop
    },
    computed: {
    },
    methods:{
        async clickSubmit(form){
            const res = await saveCulture({name: this.form.name, esName: this.form.esName})
           if (res.status == 1) {
                this.$message({
                    type: 'success',
                    message: '提交成功'
                });
            }else{
                this.$message({
                    type: 'error',
                    message: res.message
                });
            } 
        },
        editInput(formName,e){
            this[formName]=!this[formName];
            this[formName]?e.target.innerHTML="编辑":e.target.innerHTML="保存"
        }
    }
}
</script>
<style lang="scss" scoped>
    .componyFile{
        padding: 40px;
        .inputWid{
            width: 270px;
            margin-right: 30px;
        }
        .demo-table-expand .el-form-item {
            margin-right: 0;
            margin-bottom: 0;
            width: 50%;
            float: left;
        }
    }
</style>


