<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p class="login-tipss" @mouseenter='isshow=true' @mouseleave="isshow=false">忘记密码?</p>
                <p class="login-tipsss" v-if="isshow">请联系管理员找回密码.</p>
                <p class="login-tips">提示 : 用户名:admin;密码:123123</p>
            </el-form>
        </div>
        <div class="ms-logo-left">logo-left</div>
        <div class="ms-logo-right">logo-right</div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                isshow:false,
                ruleForm: {
                    username: 'admin',
                    password: '123123',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',this.ruleForm.username);
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../../assets/img/login-bg.jpg);
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-logo-left{
        position: absolute;
        left:0;
        top:0;
        width:100px;
        height: 100px;
        background: rgba(255,255,255, 0.5);

    }
    .ms-logo-right{
        position: absolute;
        right:0;
        top:0;
        width:100px;
        height: 100px;
        background: rgba(255,255,255, 0.5);
    
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:rgb(68, 68, 68);
    }
    .login-tipss{
        display: inline-block;
        font-size:16px;
        line-height:30px;
        color:rgb(68, 68, 68);
        cursor:pointer; 
        position: relative;
    }
    .login-tipsss{
        position: absolute;
        bottom: 59px;
        left: 112px;
        font-size:14px;
        line-height:30px;
        color:rgb(68, 68, 68);
        cursor:pointer; 
        
    }
</style>