<template>
	<div class="fillcontain">
        <el-row style="min-width:1200px;height:100%;">
            <el-col :span="4"  style="height:100%; background-color: #545c64;">
                <el-menu text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" style="min-height:100%;" :default-active="$route.path" router>
                    <template v-for="(item,indexs) in role">
						<el-submenu v-if="item.children" :index="item.path" :key="indexs"> 
							<template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>
							<el-menu-item :index="chilrenItem.path" v-for="chilrenItem in item.children" :key="chilrenItem.component">{{chilrenItem['meta'][1]}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-else :index="item.path" :key="indexs">
							<span slot="title"><i class="el-icon-tickets"></i>{{item.name}}</span>
						</el-menu-item>
					</template>
                </el-menu>
            </el-col>
			<el-col :span="20" style="height:100%;overflow:auto;">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-col>
        </el-row>
	</div>
</template>
<style lang="scss" scoped>
.el-submenu .el-menu-item{
	min-width: 0;
}
</style>
<script>
import { mapGetters } from 'vuex'
import {getCookie} from '../config/cookie.js';
export default {
	data(){
		return {
			router:[]
		}
	},
	computed:{
		...mapGetters(["role"]),
	}
}
</script>

