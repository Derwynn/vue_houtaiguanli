<template>
  <el-container>
      <el-header>
          <div class="table">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <div class="imgbox">
                    <img src="../../assets/img/img.jpg" alt="">
                </div>

                <h3>生产部</h3>

                <el-form-item label="姓名/工号" >
                    <el-input class="input" v-model="formInline.user" placeholder="姓名或工号"></el-input>
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
                <p>假期新增</p>
            </div>

            <el-form class="formbox" ref="form" :model="form" label-width="80px">
                <div class="timebox">
                    <el-form-item label="开始日期">
                    <el-col>
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="结束日期">
                    <el-col>
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                </div>
                <div class="leixingbox">
                    <el-form-item label="假期类型">
                    <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="事假" value="shijia"></el-option>
                    <el-option label="婚假" value="hunjia"></el-option>
                    <el-option label="产假" value="chanjia"></el-option>
                    <el-option label="年休假" value="nianjia"></el-option>
                    <el-option label="丧假" value="sangjia"></el-option>
                    <el-option label="病假" value="bingjia"></el-option>
                    <el-option label="陪产假" value="peichanjia"></el-option>
                    <el-option label="流产假" value="liuchanjia"></el-option>
                    <el-option label="产检假" value="chanjianjia"></el-option>
                    <el-option label="工伤假" value="gongshangjia"></el-option>
                    <el-option label="哺乳假" value="purujia"></el-option>
                    <el-option label="护理假" value="hulijia"></el-option>
                    </el-select>
                </el-form-item>
                </div>
                
                <div class="shibox">
                    <el-form-item label="请假时长">
                        <el-input v-model="form.time" placeholder="小时(整时)"></el-input>
                    </el-form-item>
                    <el-form-item label="请假事由">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                </div>
                <div class="lognbox">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit2">保存</el-button>
                        <el-button>返回</el-button>
                    </el-form-item>
                </div>
                
            </el-form>

                
                
               
               
               
              
                
               
            
        </div>
        
      </el-main>
      
  </el-container>
    
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                formInline: {
                        user: '',
                        region: ''
                    },
                    form: {
                        date1: '',
                        date2: '',
                        region: '',
                        time: '',
                         desc: ''
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
            },
            onSubmit2() {
                console.log('submit2!');
            }
        },
    }

</script>


<style scoped>
.el-container >>> .el-header{
    height: 100% !important;
}
.el-form{
    display: flex;
    padding: 10px;
    
    
}
.formbox{
    display: flex;
    flex-direction:column;
    background: #fff;
}
.el-main{
    padding: 0 20px;
}
.table{
    width: 100%;
    background: #F0F6FF;
}
.imgbox{
    float: left;
    width: 50px;
    height: 50px;
}
.imgbox img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.table h3{
    float: left;
    line-height: 50px;
    color:#909399;
    padding: 0 60px 0 10px;
}
.el-form-item{
    float: left;
    margin-bottom: 0;
    line-height: 47px;
}
.el-header >>> .el-form-item__content{
    line-height: 50px;
}
.crumbs{
    background: #ececec;
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
.timebox{
    padding-bottom: 20px;
}
.el-form-item{
    padding-right: 100px;
}
.el-col{
    width: 300px;
}
.leixingbox{
    padding-bottom: 20px;
}
.leixingbox .el-select{
    width: 300px;
}
.shibox{
    padding-bottom: 20px;
}
.el-textarea{
    width: 300px;
}
.el-input{
    width: 300px;
}
.lognbox{
    margin: 0 auto;
    padding-bottom: 20px;
}





    

</style>
