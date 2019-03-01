<template>
  <el-container>
      <el-header>
          <div class="table">
            <el-form :inline="true" :model="filters" class="toolbar">
                <el-form-item label="所属部门">
                    <el-input v-model="filters.suoshu" placeholder="所属部门"></el-input>
                </el-form-item>
                <el-form-item label="职位">
                    <el-input v-model="filters.zhiwei" placeholder="职位"></el-input>
                </el-form-item>
                <el-form-item label="工号">
                    <el-input v-model="filters.gonghao" placeholder="工号"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="filters.xingming" placeholder="姓名"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="getUsers">查询</el-button>
                </el-form-item>
            </el-form>
          </div>
      </el-header>
      <el-main>
          <div class="table">
            <div class="crumbs">
                <p>员工信息明细(50)</p>
                <div>
                    <el-form :inline="true" :model="filters">
                     <el-button type="primary" icon="el-icon-plus" size="mini"  @click="handleAdd">新增</el-button>
                     <el-button type="primary" icon="el-icon-plus" size="mini" @click="exportExcel()">导出</el-button>
                    </el-form>
                    
                </div>
            </div>  
            <!--新增界面-->
                      <el-dialog title="新增" :visible.sync="addFormVisible">
                        <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                             <el-form-item label="所属公司" prop="suoshu">
                                <el-input v-model="addForm.suoshu"></el-input>
                            </el-form-item>
                             <el-form-item label="部门" prop="bumen">
                                <el-input v-model="addForm.bumen"></el-input>
                            </el-form-item>
                             <el-form-item label="职位" prop="zhiwei">
                                <el-input v-model="addForm.zhiwei"></el-input>
                            </el-form-item>
                             <el-form-item label="姓名" prop="xingming">
                                <el-input v-model="addForm.xingming"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-radio-group v-model="addForm.sex">
                                    <el-radio class="radio" :label="1">男</el-radio>
                                    <el-radio class="radio" :label="0">女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                             <el-form-item label="身份证号" prop="shenfenzheng">
                                <el-input v-model="addForm.shenfenzheng"></el-input>
                            </el-form-item>
                            <el-form-item label="年龄">
                                <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
                            </el-form-item>
                            <el-form-item label="入职时间">
                                <el-date-picker type="date" placeholder="选择日期" v-model="addForm.ruzhi"></el-date-picker>
                            </el-form-item>
                             <el-form-item label="司龄">
                                <el-input-number v-model="addForm.siling" :min="0" :max="200"></el-input-number>
                            </el-form-item>
                             <el-form-item label="基础工资" prop="jichu">
                                <el-input v-model="addForm.jichu"></el-input>
                            </el-form-item>
                             <el-form-item label="社保基数" prop="shebao">
                                <el-input v-model="addForm.shebao"></el-input>
                            </el-form-item>
                             <el-form-item label="公积金" prop="gongjijin">
                                <el-input v-model="addForm.gongjijin"></el-input>
                            </el-form-item>
                             <el-form-item label="工资卡号" prop="gongzi">
                                <el-input v-model="addForm.gongzi"></el-input>
                            </el-form-item>
                             <el-form-item label="开户银行" prop="kaihu">
                                <el-input v-model="addForm.kaihu"></el-input>
                            </el-form-item>
                             <el-form-item label="员工状态" prop="yuangong">
                                <el-input v-model="addForm.yuangong"></el-input>
                            </el-form-item>
                            
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click.native="addFormVisible = false">取消</el-button>
                            <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                        </div>
                    </el-dialog>

                    <!--编辑界面-->
                      <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
                        <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                             <el-form-item label="所属公司" prop="suoshu">
                                <el-input v-model="editForm.suoshu"></el-input>
                            </el-form-item>
                             <el-form-item label="部门" prop="bumen">
                                <el-input v-model="editForm.bumen"></el-input>
                            </el-form-item>
                             <el-form-item label="职位" prop="zhiwei">
                                <el-input v-model="editForm.zhiwei"></el-input>
                            </el-form-item>
                             <el-form-item label="姓名" prop="xingming">
                                <el-input v-model="editForm.xingming"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-radio-group v-model="editForm.sex">
                                    <el-radio class="radio" :label="1">男</el-radio>
                                    <el-radio class="radio" :label="0">女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                             <el-form-item label="身份证号" prop="shenfenzheng">
                                <el-input v-model="editForm.shenfenzheng"></el-input>
                            </el-form-item>
                            <el-form-item label="年龄">
                                <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
                            </el-form-item>
                            <el-form-item label="入职时间">
                                <el-date-picker type="date" placeholder="选择日期" v-model="editForm.ruzhi"></el-date-picker>
                            </el-form-item>
                             <el-form-item label="司龄">
                                <el-input-number v-model="editForm.siling" :min="0" :max="200"></el-input-number>
                            </el-form-item>
                             <el-form-item label="基础工资" prop="jichu">
                                <el-input v-model="editForm.jichu"></el-input>
                            </el-form-item>
                             <el-form-item label="社保基数" prop="shebao">
                                <el-input v-model="editForm.shebao"></el-input>
                            </el-form-item>
                             <el-form-item label="公积金" prop="gongjijin">
                                <el-input v-model="editForm.gongjijin"></el-input>
                            </el-form-item>
                             <el-form-item label="工资卡号" prop="gongzi">
                                <el-input v-model="editForm.gongzi"></el-input>
                            </el-form-item>
                             <el-form-item label="开户银行" prop="kaihu">
                                <el-input v-model="editForm.kaihu"></el-input>
                            </el-form-item>
                             <el-form-item label="员工状态" prop="yuangong">
                                <el-input v-model="editForm.yuangong"></el-input>
                            </el-form-item>
                            
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click.native="editFormVisible = false">取消</el-button>
                            <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                        </div>
                    </el-dialog>
            <!--列表-->

            <el-table
            id="out-table"
            :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
            <el-table-column type="selection" width="55">
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
            <el-table-column label="操作" width="180">
            <template scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>

        <!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

      </el-main>
      
  </el-container>
    
</template>

<script>
    import util from '../../util/js/util'
	//import NProgress from 'nprogress'
    import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'

    
    export default {
        data() {
            return {
                filters: {
                    name:'',
                    xingming: '',
                    suoshu:'',
                    zhiwei:'',
                    gonghao:'',
                },
                users: [],
				total: 0,
				page: 1,
				listLoading: false,
                sels: [],//列表选中列
                
                addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
                },
                //新增界面数据
				addForm: {
                    name: '',
                    suoshu:'',
                    bumen:'',
                    zhiwei:'',
                    xingming:'',
                    sex: -1,
                    shenfenzheng:'',
                    age: 0,
                    ruzhi:'',
                    siling: 0,
                    jichu:'',
                    shebao:'',
                    gongjijin:'',
                    gongzi:'',
                    kaihu:'',
                    yuangong:'',
					
                },
                editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
                    suoshu:'',
                    bumen:'',
                    zhiwei:'',
                    xingming:'',
                    sex: -1,
                    shenfenzheng:'',
                    age: 0,
                    ruzhi:'',
                    siling: 0,
                    jichu:'',
                    shebao:'',
                    gongjijin:'',
                    gongzi:'',
                    kaihu:'',
                    yuangong:'',
				},
                
                
              
            }
        },
        
        components: {},
        computed: {},
        created(){
        },
        activated(){
        },
        deactivated(){
        },
        methods: {
             exportExcel () {
                /* generate workbook object from table */
                var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
                /* get binary string as output */
                var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
                try {
                    FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'liebiao.xlsx')
                } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
                return wbout
            },

    
            //性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
            },
            
            //获取用户列表
			getUsers() {
				let para = {
					page: this.page,
                    name: this.filters.name,
                    suoshu: this.filters.suoshu,
                    zhiwei: this.filters.zhiwei,
                    gonghao: this.filters.gonghao,
                    xingming: this.filters.xingming,
				};
				this.listLoading = true;
				//NProgress.start();
				getUserListPage(para).then((res) => {
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
					//NProgress.done();
				});
            },
            
            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    name: '',
                    suoshu:'',
                    bumen:'',
                    zhiwei:'',
                    xingming:'',
                    sex: -1,
                    shenfenzheng:'',
                    age: 0,
                    ruzhi:'',
                    siling: 0,
                    jichu:'',
                    shebao:'',
                    gongjijin:'',
                    gongzi:'',
                    kaihu:'',
                    yuangong:'',
                };
            },

            //新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.addForm);
							para.ruzhi = (!para.ruzhi || para.ruzhi == '') ? '' : util.formatDate.format(new Date(para.ruzhi), 'yyyy-MM-dd');
							addUser(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
            },
            selsChange: function (sels) {
				this.sels = sels;
            },
            
            //显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
            },
            
            //编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.ruzhi = (!para.ruzhi || para.ruzhi == '') ? '' : util.formatDate.format(new Date(para.ruzhi), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
            
            //删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
            
            //批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},

            // handleEdit(index, row) {
            //     console.log(index, row);
            //     },
            // handleDelete(index, row) {
            //     console.log(index, row);
            //     },
            // onSubmit() {
            //     console.log('submit!');
            //     }
        },
        mounted() {
			this.getUsers();
		}
    }

</script>


<style scoped>
.el-main{
    padding: 0 20px;
}
.table{
    width: 100%;
    background: #fff;
}
.crumbs{
    overflow: hidden;
    padding: 8px 0;
    border-bottom: 1px solid #ebeef5;
    margin: 0;
  

    }
.crumbs p{
    float: left;
    font-size: 12px;
    font-weight: bold;
    line-height: 23px;
    padding-left: 10px;
    color: #909399;
}
.crumbs div{
    float: right;
    padding-right: 50px;

}
.el-form{
    padding: 10px
}
.el-header >>> .el-form-item__label{
    color: #909399;
    font-size: 12px;
    font-weight: bold;
}
.el-header >>> .el-input__inner{
    width: 170px;
}
.el-form-item{
    margin-bottom: 0;
}
.el-tag{
    border: none;
    background-color: #fff;
    color: #606266;
}
    

</style>
