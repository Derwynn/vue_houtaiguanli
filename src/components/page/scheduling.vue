<template>
  <el-container>
      <el-header>
          <div class="table">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <div class="block">
                    <span class="demonstration">考勤周期：</span>
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </el-form>
          </div>
      </el-header>
      <el-main>
          <div class="table">
             <div class="crumbs">
                <p>特殊日期提示</p>
                <div>
                    <el-button type="primary" icon="el-icon-plus" size="mini">新增</el-button>
                </div>
            </div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="开始时间"
            width="140">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="结束时间"
            width="140">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="日期类型"
            width="140">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="薪资调整"
            width="140">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="日期说明"
            width="140">
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
                @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
      </el-main>
       <el-main>
          <div class="table">
             <div class="crumbs">
                <p>班次设置</p>
                <div>
                    <el-button type="primary" icon="el-icon-plus" size="mini">新增</el-button>
                </div>
            </div>
            <el-table
            :data="tableData2"
            style="width: 100%">
            <el-table-column
            label="班次"
            width="140">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="开始时间"
            width="140">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="结束时间"
            width="140">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="操作"
            width="240">
            <template slot-scope="scope">
               <el-button
                size="mini"
                type="primary"
                @click="handleEdit2(scope.$index, scope.row)">修改</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
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

                    tableData2: [{
                    date: '2019-05-02',
                    name: '王小龙',
                    address: '上海市普陀区'
                    },
                    {
                    date: '2019-05-04',
                    name: '王小龙',
                    address: '上海市普陀区'
                    },],

                    formInline: {
                        user: '',
                        region: ''
                    },
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
            },

            handleEdit2(index, row) {
                console.log(index, row);
            },
            handleDelete2(index, row) {
                console.log(index, row);
            },
            onSubmit() {
                console.log('submit2!');
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
    border-bottom: 1px solid #dddddd;
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
.paixu{
    width: 140px;
    padding-left: 5px;
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
.block{
    display: inline-block;
    padding-right: 10px;
    
}
.block .el-date-editor{
    width: 240px;
}
.block .demonstration{
    color: #909399;
    font-size: 12px;
    font-weight: bold;
    padding-right: 12px;
}
    

</style>
