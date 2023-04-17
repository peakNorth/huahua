<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *
-->

<template>
    <div>
        <router-link to="./pwdmg">
            <p v-show="!state.isLogin"> 注册</p>
        </router-link>
        <p v-show="state.isLogin"> 欢迎</p>
        {{ state.showMsg }}

    </div>
</template>

<script setup>
import { reactive, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { getMe } from '@/service/home'
import { getLocal } from '@/common/js/utils'
import { showLoadingToast, closeToast, showToast } from 'vant'

const router = useRouter()
const state = reactive({
    isLogin: false, // 是否已登录
    showMsg: "",
    loading: true
})
onMounted(async () => {
    const token = getLocal('token')
    if (token) {
        state.isLogin = true
    }
    showLoadingToast({
        message: '加载中...',
        forbidClick: true
    });
    const { data } = await getMe()
    console.log(data)
    state.showMsg = data;
    state.loading = false
    closeToast()
})

nextTick(() => {
    document.body.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrollTop > 100 ? state.headerScroll = true : state.headerScroll = false
    })
})


</script>

<style lang="less" scoped ></style>