import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/information'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '首页' },
            children:[
                {
                    path: '/information',
                    component: resolve => require(['../components/page/information.vue'], resolve),
                    meta: { title: '员工信息' }
                },
                {
                    path: '/message',
                    component: resolve => require(['../components/page/message.vue'], resolve),
                    meta: { title: '消息提醒' },
                },
                {
                    path: '/attendance',
                    component: resolve => require(['../components/page/attendance.vue'], resolve),
                    meta: { title: '考勤汇总' }
                },
                {
                    path: '/originalattendance',
                    component: resolve => require(['../components/page/originalattendance.vue'], resolve),
                    meta: { title: '原始考勤' }
                },
                {
                    path: '/vacation',
                    component: resolve => require(['../components/page/vacation.vue'], resolve),
                    meta: { title: '假期管理' }
                },
                {
                    path: '/jiaqixinzeng',
                    component: resolve => require(['../components/page_zi/jiaqixinzeng.vue'], resolve),
                    meta: { title: '假期新增' }
                },
                
                {
                    path: '/detailed',
                    component: resolve => require(['../components/page/detailed.vue'], resolve),
                    meta: { title: '明细' },
                },
                {
                    path: '/patch',
                    component: resolve => require(['../components/page_zi/patch.vue'], resolve),
                    meta: { title: '补卡' }
                },
                {
                    path: '/salary',
                    component: resolve => require(['../components/page/salary.vue'], resolve),
                    meta: { title: '薪酬明细' }
                },
                {
                    path: '/reward',
                    component: resolve => require(['../components/page_zi/reward.vue'], resolve),
                    meta: { title: '奖励-扣款-补贴' }
                },
                {
                    path: '/scheduling',
                    component: resolve => require(['../components/page/scheduling.vue'], resolve),
                    meta: { title: '排班设置' }
                },
                {
                    path: '/xinzengteshu',
                    component: resolve => require(['../components/page_zi/xinzengteshu.vue'], resolve),
                    meta: { title: '新增特殊日期' }
                },
                {
                    path: '/arrange',
                    component: resolve => require(['../components/page/arrange.vue'], resolve),
                    meta: { title: '排班安排' }
                },
                

                
                
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },

                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // vue-自定义图标
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
               
              
               
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
              
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
