<template>
  <el-container>
      <el-header>
          <div class="table">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="所属部门">
                    <el-input v-model="formInline.user" placeholder="所属部门"></el-input>
                </el-form-item>
                <el-form-item label="职位">
                    <el-input v-model="formInline.user" placeholder="职位"></el-input>
                </el-form-item>
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
                <p>排班安排(50)</p>
            </div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="所属公司"
            width="120">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="部门"
            width="120">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="工号"
            width="120">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="职位"
            width="120">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="姓名"
            width="120">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="性别"
            width="120">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column label="排班安排" width="180">
            <template slot-scope="scope">
                <el-select v-model="scope.row.options" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
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
                
                options: [{
                    value: '选项1',
                    label: '白班'
                    }, {
                    value: '选项2',
                    label: '夜班'
                    }],
                value: '',
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
    

</style>
