<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box">
            <div class="content">
                <transition >
                    <keep-alive >
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
 
    export default {
        data(){
            return {
            }
        },
        components:{
            vHead, vSidebar, 
        },
    }
</script>
