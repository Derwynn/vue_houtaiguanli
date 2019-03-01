<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

            <el-dialog title="奖励" :visible.sync="dialogFormVisible">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="奖励原由：" prop="name">
                            <el-input  v-model="ruleForm.name" placeholder="奖励原由：(必填)"></el-input>
                        </el-form-item>
                        <el-form-item label="奖励金额：" prop="name2">
                            <el-input  v-model="ruleForm.name2" placeholder="奖励金额：保留2位小数(必填)"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                            <el-button @click="dialogFormVisible = false">取消</el-button>
                        </el-form-item>
                    </el-form>
            </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                dialogFormVisible: false,
                formLabelWidth: '120px',
                 ruleForm: {
                    name: '',
                    name2: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入奖励原由', trigger: 'blur' },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    name2: [
                        { required: true, message: '请输入奖励金额', trigger: 'blur' },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                }
            };
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
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
        }

    }

</script>


<style scoped>
.el-dialog__wrapper >>> .el-dialog{
    width: 30%;
}

</style>
