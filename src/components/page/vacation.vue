<template>
  <el-container>
      <el-header>
          <div class="table">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                 <el-form-item label="所属部门" >
                    <el-select class="input" v-model="formInline.region" placeholder="请选择">
                    <el-option label="部门一" value="chidao"></el-option>
                    <el-option label="部门二" value="kuanggong"></el-option>
                    <el-option label="部门三" value="zaotui"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工号" >
                    <el-input class="input" v-model="formInline.user" placeholder="工号"></el-input>
                </el-form-item>
                <el-form-item label="姓名" >
                    <el-input class="input" v-model="formInline.user" placeholder="姓名"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
          </div>
      </el-header>
      <el-main>
          <div class="table">
             <div class="crumbs">
                <p>假期列表(10)</p>
                <div>
                    <el-button type="primary" icon="el-icon-plus" size="mini">新增</el-button>
                </div>
            </div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="申请人"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="工号"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="部门"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="提交日期"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="开始日期"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="结束日期"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
             <el-table-column
            label="假期类型"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
             <el-table-column
            label="时长"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="状态"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
             <el-table-column label="操作" width="180">
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                 <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
      </el-main>
      
  </el-container>
    
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                value6: '',
                 tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                    },],
                    formInline: {
                        user: '',
                        region: ''
                    },
                     options: [{
                        value: '选项1',
                        label: '出勤日期'
                        }, {
                        value: '选项2',
                        label: '时间'
                        }, {
                        value: '选项3',
                        label: '出勤日期+时间'
                        }],
                    value8: '',
            }
        },
        components: {},
        computed: { },
        created(){
        },
        activated(){
        },
        deactivated(){
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
                },
            handleDelete(index, row) {
                console.log(index, row);
                },
            onSubmit() {
                console.log('submit!');
                }
        },
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
    background: #fff;
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
    padding-top: 2px;
}
.crumbs .el-select{
    float: left;
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
.el-header >>> .input{
    width: 138px;
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
