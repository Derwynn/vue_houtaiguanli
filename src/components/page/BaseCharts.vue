<template>
    <el-container>
        <el-header>
            <div class="table">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="所属公司">
                        <el-select v-model="formInline.region" placeholder="全部">
                            <el-option label="所有公司" value="suoyou"></el-option>
                            <el-option label="A公司" value="a"></el-option>
                            <el-option label="B公司" value="b"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="block">
                        <span class="demonstration">统计周期</span>
                        <el-date-picker
                        v-model="value6"
                        type="date">
                        </el-date-picker>
                    </div>
                    <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-header>
        <el-main>
           
            <div class="container">
                <div class="crumbs">
                    <p>当月出勤时间统计</p>
                </div>
                <div class="crumbs">
                    <p>当月累计出勤时间：xxx.5小时</p>
                </div>
                <div class="schart-box">
                    <schart class="schart" canvasId="pie" :data="data1" type="pie" :options="options1"></schart>
                </div>
            </div>
            
            <div class="container2">
                 <div class="crumbs">
                    <p>当月人工成本统计</p>
                </div>
                <div class="crumbs">
                    <p>当月人工成本支出累计：xxx.00元</p>
                </div>
                <div class="schart-box2">
                    <schart class="schart2" canvasId="pie2" :data="data2" type="pie" :options="options2"></schart>
                </div>
            </div>
        </el-main>
        <el-main>
            <div class="crumbs">
                <p>单位时间人工成本</p>
            </div>
            <div class="crumbs">
                <p>当月单位时间人工成本：xxx.00元/小时</p>
            </div>
        </el-main>
        
    </el-container>
</template>

<script>
    import Schart from 'vue-schart';
    export default {
        name: 'basecharts',
        components: {
            Schart
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
        data: () => ({
            formInline: {
                user: '',
                region: ''
            },
            value6: '',
            data1:[
                {name:'正常出勤时间',value:50},
                {name:'延长加班时间',value:25},
                {name:'休息日加班时间',value:25},
            ],
            data2 : [
                {name:'员工工资总额',value:75},
                {name:'企业社会保险费',value:25},
            ],
          
            options1: {
                title: '某商店各商品年度销量',
                bgColor: '#ffffff',
                titleColor: '#909399',
                legendColor: '#909399',
                radius: 120
            },
            options2: {
                title: '某商店各商品年度销量',
                bgColor: '#ffffff',
                titleColor: '#909399',
                legendColor: '#909399',
                radius: 120
            },
           
        })
    }
</script>

<style scoped>
.container{
    float: left;
    padding: 0;
    
}
.container2{
    background: #fff;
    float: right;
}
.schart{
    width: 500px;
    height: 400px;
}
.schart2{
    width: 500px;
    height: 400px;
}

.el-main{
    padding-top: 0;  
    padding-bottom: 6px; 
}
.table{
    width: 100%;
    background: #fff;
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
    width: 240px;
}
.el-form-item{
    margin-bottom: 0;
}

.block{
    display: inline-block;
    padding-right: 10px;
    padding-left: 260px;
    
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
.crumbs{
    overflow: hidden;
    padding: 8px 0;
    border-bottom: 1px solid #ebeef5;
    margin: 0;
    background: #fff;
}
.crumbs p{
    float: left;
    font-size: 12px;
    font-weight: bold;
    line-height: 23px;
    padding-left: 10px;
    color: #909399;
}

</style>