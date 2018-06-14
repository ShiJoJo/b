<template>
	<el-container>
		<el-aside width="200px" style="height:100%; background-color: #545c64;">
			<el-menu text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" style="min-height:100%;" :default-active="($route.path.match(/\/\S*?(?=\/)|\/\S*/))[0]" router>
				<template v-for="(item,indexs) in menu">
					<el-submenu v-if="item.children" :index="item.path" :key="indexs"> 
						<template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>
						<el-menu-item :index="chilrenItem.path" v-for="chilrenItem in item.children" :key="chilrenItem.component">{{chilrenItem['name']}}</el-menu-item>
					</el-submenu>
					<el-menu-item v-else :index="item.path" :key="indexs">
						<span slot="title"><i class="el-icon-tickets"></i>{{item.name}}</span>
					</el-menu-item>
				</template>
			</el-menu>
		</el-aside>
		<el-container style="min-width:1000px;">
			<el-header><headTop></headTop></el-header>
			<el-main>
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-main>				
		</el-container>
	</el-container>
</template>
<style lang="scss" scoped>
.el-container{
	height: 100%;
	.el-header{
		padding: 0;
	}
	.el-main{
		padding: 0;
	}
}
.el-submenu .el-menu-item{
	min-width: 0;
}
</style>
<script>
import {mapGetters} from "vuex";
import {getCookie} from '../config/cookie.js';
import headTop from './headTop';
export default {
	data(){
		return {
			router:[]
		}
	},
	computed:{
		...mapGetters(["menu"]),
	},
	components:{
		headTop
	}
}
</script>

