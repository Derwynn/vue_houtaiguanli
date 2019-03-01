<template>
    <el-container>
        <el-header>
            <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="待处理请假" name="qingjia">
                        <v-leave></v-leave>
                    </el-tab-pane>
                    <el-tab-pane label="待处理补打卡" name="daka">
                        <v-punch></v-punch>
                    </el-tab-pane>
                </el-tabs>
            </template>
        </el-header>
         
    </el-container>
</template>

<script>
    import vLeave from '../page_zi/leave';
    import vPunch from '../page_zi/punch.vue';
    export default {
        data() {
            return {
                activeName: 'qingjia'
            }
        },

        components:{
            vLeave,
            vPunch,
        },
        
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },
        computed: {
        }
    }

</script>

<style>
.qingjia{
    position: relative;
    float: left;
    margin-right: 10px;
}
.qingjia i{
    position: absolute;
    top: 20%;
    right: 0;
    color: #ccc;
}
.dakai{
    position: relative;
    float: left;
}
.dakai i{
    position: absolute;
    top: 20%;
    right: 0;
    color: #ccc;
}

</style>

