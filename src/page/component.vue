<template>
	<div class="fillcontain">
        <el-row style="min-width:1200px;height:100%;">
            <el-col :span="4"  style="height:100%; background-color: #545c64;">
                <el-menu text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" style="min-height:100%;" :default-active="$route.path.replace('/','')" router>
                    <el-submenu index="manage">
						<template slot="title"><i class="el-icon-menu"></i>关于我们</template>
						<el-menu-item index="companyFile">公司简介</el-menu-item>
						<el-menu-item index="culture">企业文化</el-menu-item>
						<el-menu-item index="chart">组织架构</el-menu-item>
						<el-menu-item index="course">发展历程</el-menu-item>
					</el-submenu>
					<el-menu-item index="3">
						<span slot="title"><i class="el-icon-tickets"></i>主营业务</span>
					</el-menu-item>
					<el-menu-item index="4">
						<span slot="title"><i class="el-icon-news"></i>新闻中心</span>
					</el-menu-item>
					<el-menu-item index="5">
						<span slot="title"><i class="el-icon-phone"></i>招贤纳士</span>
					</el-menu-item>
					<el-menu-item index="6">
						<span slot="title"><i class="el-icon-star-on"></i>案例展示</span>
					</el-menu-item>
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
