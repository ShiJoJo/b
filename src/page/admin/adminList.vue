<template>
    <div class="adminList">
        <el-button size="mini" style="margin-bottom:10px;">新增管理员</el-button>
        <el-table :data="tableData" border>
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="name" label="登录名"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                    <el-button size="mini" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tableData:[{
                id:'1',
                name:"燃萌"
            }],
        }
    },
    methods:{
        edit(row){
            let path = "/listAdmin/addAdmin?id="+row.id;
            this.$router.push(path);
        }
    }
}
</script>
<style lang="scss" scoped>
    .adminList{
        padding: 40px;
        position: relative;
    }
</style>
