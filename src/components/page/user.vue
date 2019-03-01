<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			 <el-table
            :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;">
            <el-table-column type="selection" width="55">
			</el-table-column>
            <el-table-column
            prop="name"
            label="所属公司"
            width="100">
            </el-table-column>
             <el-table-column
            prop="suoshu"
            label="所属公司"
            width="100">
            </el-table-column>
            <el-table-column
            prop="bumen"
            label="部门"
            width="100">
            </el-table-column>
            <el-table-column
            prop="zhiwei"
            label="职位"
            width="100">
            </el-table-column>
            <el-table-column
            prop="xingming"
            label="姓名"
            width="100">
            </el-table-column>
            <el-table-column
            label="性别"
            prop="sex"
            width="100"
             :formatter="formatSex">
            </el-table-column>
            <el-table-column
            label="身份证号"
            prop="shenfenzheng"
            width="100">
            </el-table-column>
            <el-table-column
            label="年龄"
            prop="age"
            width="100">
            </el-table-column>
            <el-table-column
            label="入职时间"
            prop="ruzhi"
            width="100">
            </el-table-column>
            <el-table-column
            label="司龄"
            prop="siling"
            width="100">
            </el-table-column>
            <el-table-column
            label="基础工资"
            prop="jichu"
            width="100">
            </el-table-column>
            <el-table-column
            label="社保基数"
            prop="shebao"
            width="100">
            </el-table-column>
            <el-table-column
            label="公积金基数"
            prop="gongjijin"
            width="100">
            </el-table-column>
            <el-table-column
            label="工资卡号"
            prop="gongzi"
            width="100">
            </el-table-column>
            <el-table-column
            label="开户银行"
            prop="kaihu"
            width="100">
            </el-table-column>
            <el-table-column
            label="员工状态"
            prop="yuangong"
            width="100">
            </el-table-column>
        </el-table>
		</template>

	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				]
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function () {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				getUserList(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
					//NProgress.done();
				});
			}
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>

</style>