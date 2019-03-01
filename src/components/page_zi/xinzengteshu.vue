<template>
    <el-header>
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="新增特殊日期" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        
         <el-form-item label="特殊日期">
            <el-col :span="11">
            <el-date-picker type="daterange" v-model="sizeForm.date1" style="width: 174px;"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"></el-date-picker>
            </el-col>
        </el-form-item>
 
        <el-form-item label="日期类型">
            <el-select v-model="sizeForm.region" placeholder="请选择">
            <el-option label="法定节假日" value="fading"></el-option>
            <el-option label="临时加班" value="linshi"></el-option>
            <el-option label="无薪休假" value="wuxin"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="薪资调整">
            <el-select v-model="sizeForm.region2" placeholder="请选择">
            <el-option label="3倍" value="san"></el-option>
            <el-option label="2倍" value="er"></el-option>
            <el-option label="1.5倍" value="yidianwu"></el-option>
            <el-option label="1倍" value="yi"></el-option>
            <el-option label="0倍" value="ling"></el-option>
            </el-select>
        </el-form-item>
       
        <el-form-item label="日期说明">
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
                    region2: '',
                    date1: '',
                    delivery: false,
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
