<template>
  <el-container>
      <el-header>
          <div class="table">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <div class="block">
                    <span class="demonstration">时间周期</span>
                    <el-date-picker
                    v-model="value6"
                    type="date">
                    </el-date-picker>
                </div>
                <el-form-item label="工号">
                    <el-input v-model="formInline.user" placeholder="工号"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="formInline.user" placeholder="姓名"></el-input>
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
                <p>薪酬明细(10)</p>
                <div>
                    <el-button type="primary" icon="el-icon-plus" size="mini">导出</el-button>
                </div>
            </div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="所属公司"
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
            label="工号"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="姓名"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="基本工资"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="工作日加班费"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="周末加班日"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="节假日加班费"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="扣款小计"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="社保"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="公积金"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="个税"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="奖励小计"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="补贴小计"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="实发薪资"
            width="100">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="操作"
            width="240">
            <template slot-scope="scope">
               <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">奖励</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleEdit(scope.$index, scope.row)">扣款</el-button>
                <el-button
                size="mini"
                type="success"
                @click="handleEdit(scope.$index, scope.row)">补贴</el-button>
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
                    }
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
.block{
    display: inline-block;
    padding-right: 10px;
    
}
.block .demonstration{
    color: #909399;
    font-size: 12px;
    font-weight: bold;
    padding-right: 12px;
}
    

</style>
