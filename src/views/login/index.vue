<!--
 * @Author: zhangjiarun
 * @Date: 2022-05-07 15:02:30
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-13 15:28:38
 * @Description: 登录入口
-->
<template>
    <div class="login-container">
        <header class="header">
            <i class="iconfont icon-logo" />
            <strong>基于CIM的智慧社区综合信息服务系统</strong>
        </header>
        <el-main class="content">
            <h3 class="title">用户登录</h3>
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="account">
                    <el-input
                        v-model="form.username"
                        placeholder="请输入内容"
                        clearable
                    >
                        <i
                            slot="prefix"
                            class="el-input__icon el-icon-user-solid"
                        />
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="form.password"
                        placeholder="请输入内容"
                        type="password"
                        show-password
                        clearable
                    >
                        <i slot="prefix" class="el-input__icon el-icon-lock" />
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn" @click="login">
                        立即登录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </div>
</template>

<script>
import md5 from 'js-md5'
import md3 from './sm3/sm3.js'
// import { SM4Util } from './sm3/sm4.js'
import { toLogin } from '@/net/api/login/login.js'
import entryApi from '@/net/api/entry/entry'
export default {
    data() {
        return {
            rules: {
                username: '',
                password: ''
            },
            form: {}
        }
    },
    methods: {

        /**
         * @Author: caizm;
         * @description: 登录
         * @param {*}
         * @return {*}
         */
        setUserData(res) {
            // TODO: 暂时不知道数据拿来做什么 后续可按需要添加
            const data = res.opusLoginUser
            this.$store.commit('user/setUserData', {
                userInfo: data.user,
                userId: data.user.userId,
                token: res.token_type + ' ' + res.access_token
            })
        },
        async login() {
            // eslint-disable-next-line no-undef
            const sm4 = new SM4Util()
            const tmpPassword = JSON.parse(JSON.stringify(this.form.password))
            const param = {
                username: sm4.encryptData_ECB(this.form.username),
                proPassword: md3(sm4.encryptData_ECB(tmpPassword)),
                password: md3(md5.hex(tmpPassword)),
                isPcGetToken: true,
                autoLogin: true
            }
            this.$store.commit('user/removeUserData')
            const res = await toLogin(param)

            // console.log('登录')
            // console.log(res)
            this.setUserData(res.content)

            const sysRes = await entryApi.getSystems({
                loginName: res.content.opusLoginUser?.user?.loginName
            })
            // console.log(sysRes)
            this.$store.commit('user/setUserSystems', sysRes.content)
            if (sysRes.content.length === 0) {
                this.$message.warning(
                    '当前账户暂无系统权限，请联系系统管理员添加。'
                )
                return
            }
            if (sysRes.content.length > 1) {
                this.$router.push('/entry')
            } else {
                this.$router.push('/home')
            }
        }
    }
}
</script>

<style scoped lang="scss">
.login-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('~@/assets/img/login/login-bg.png') no-repeat center bottom;

    .header {
        position: absolute;
        top: 10%;
        width: 100%;
        height: 50px;
        text-align: center;
        color: #fff;

        .iconfont {
            font-size: 40px;
        }

        strong {
            padding-left: 20px;
            font-size: 40px;
        }
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: initial;
        margin-top: -160px;
        margin-left: -200px;
        border-radius: 20px;
        padding-top: 50px;
        width: 400px;
        height: 320px;
        background-color: #394059;

        .title {
            position: absolute;
            top: -30px;
            left: 50%;
            margin-left: -90px;
            border-radius: 32px;
            width: 180px;
            height: 60px;
            font-size: 24px;

            // font-weight: bold;
            text-align: center;
            background: #25bbf6;
            line-height: 60px;
        }

        .btn {
            width: 100%;
        }
    }
}
</style>
