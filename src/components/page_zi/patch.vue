<template>
    <el-header>
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="补卡" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
 
        <el-form-item label="补卡类别">
            <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
            <el-option label="上班卡" value="shanghai"></el-option>
            <el-option label="下班卡" value="beijing"></el-option>
            <el-option label="全天卡" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="补卡时间">
            <el-col :span="11">
            <el-date-picker type="datetime" placeholder="选择日期时间" v-model="sizeForm.date1" style="width: 174px;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="补卡原因">
            <el-input v-model="sizeForm.name" style="width: 174px;"></el-input>
        </el-form-item>
        
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>    
    </el-header>
 
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                value1: '',
                dialogFormVisible: false,
                formLabelWidth: '120px',
                sizeForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
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
        mounted() {
        },
        methods: {
        },
            
          
    }

</script>


<style scoped>
.el-dialog__wrapper >>> .el-dialog{
    width: 30%;
}


    

</style>
