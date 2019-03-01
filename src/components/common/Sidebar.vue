<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>

    export default {
        data() {
            return {
               items: [
                    {
                        icon: 'el-icon-lx-people',
                        index: 'information',
                        title: '员工管理',
                        subs: [
                            {
                                index: 'information',
                                title: '员工信息'
                            },
                        ]
                    },
                     {
                        icon: 'el-icon-bell',
                        index: 'message',
                        title: '消息提醒',
                         subs: [
                            {
                                index: 'message',
                                title: '待处理'
                            },
                        ]
                    },
                     {
                        icon: 'el-icon-lx-punch',
                        index: '3',
                        title: '考勤管理',
                         subs: [
                            {
                                index: '3-2',
                                title: '考勤',
                                subs:[
                                    {
                                        index: 'attendance',
                                        title: '考勤汇总', 
                                    },
                                    {
                                        index:'detailed',
                                        title:'明细',
                                    },
                                    {
                                        index:'patch',
                                        title:'补卡'
                                    },
                                ]
                            },
                            {
                                index:'originalattendance',
                                title:'原始考勤'
                            },
                            {
                                index:'vacation',
                                title:'假期管理',
                                subs:[
                                    {
                                        index: 'jiaqixinzeng',
                                        title: '假期新增', 
                                    }]
                            }
                        ]
                    },
                   
                    {
                        icon: 'el-icon-lx-recharge',
                        index: 'xinchou',
                        title: '薪酬管理',
                        subs:[
                            {
                                index:'salary',
                                title:'薪酬明细'
                            },
                             {
                                index:'reward',
                                title:'奖励-扣款-补贴'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-edit',
                        index: 'paiban',
                        title: '排班管理',
                        subs:[
                            {
                                index:'scheduling',
                                title:'排班设置',
                                subs:[{
                                    index:'xinzengteshu',
                                    title:'新增特殊日期',
                                }]
                            },
                             {
                                index:'arrange',
                                title:'排班安排'
                            }
                        ]
                    },

                    {
                        icon: 'el-icon-lx-rank',
                        index: 'charts',
                        title: '报表管理',
                        subs:[
                            {
                                index:'charts',
                                title:'管控报表'
                            }
                        ]
                    },
                    {
                        index:'table',
                        title:'基础表格(备用)'
                    },
                     {
                        index:'icon',
                        title:'自定义图标(参考)'
                    },
                    
                  
                   
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;     
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
