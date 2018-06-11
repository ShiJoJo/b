<template>
    <div>
        <div class="componyFile">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="中文名">
                    <el-input v-model="form.name" class="inputWid" :disabled="formName"></el-input><el-button @click.prevent="editInput('formName',$event)">编辑</el-button>
                </el-form-item>
                <el-form-item label="英文名">
                    <el-input v-model="form.esName" class="inputWid" :disabled="formEsName"></el-input><el-button @click.prevent="editInput('formEsName',$event)">编辑</el-button>
                </el-form-item>
                <div class="edit_container">
                    <quill-editor ref="myQuillEditor" :options="editorOption" v-model="content" class="editer">

                    </quill-editor>
                </div>
                <el-form-item>
                    <el-button @click="clickSubmit(form)">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import headTop from '../components/headTop'
import { quillEditor } from 'vue-quill-editor'
import {saveCompanyFile} from '../api/getDate'
export default {
    data(){
        return {
            content:"",
            editorOption: {},
            form:{
                name:"1",
                esName:"1"
            },
            formName:true,
            formEsName:true
        }
    },
    components:{
        headTop,
        quillEditor
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods:{
        async clickSubmit(form){
            const res = await saveCompanyFile({name: this.form.name, esName: this.form.esName,content:this.content})
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
        .edit_container{
            margin-bottom: 80px;
            .editer{
                height: 350px;
            }
        }
    }
</style>


