<template>
    <b-container>
        <b-row class="login_content">
            <!--登录&注册-->
            <div class="col-12 col-md-8 text-left">
                <div class="login_box">
                    <b-row>

                        <!--登录-->
                        <b-col class="col-12 col-md-6 ">
                            <h5>登录</h5>
                            <p class=" description_text">到现有的 Sbeam 帐户</p>
                            <b-form>
                                <b-form-group label="账户邮箱" label-class="text-white" label-for="input-account">
                                    <b-form-input
                                            id="input-account"
                                            v-model="form.account"
                                            type="email"
                                            required
                                            placeholder="输入邮箱"></b-form-input>
                                </b-form-group>
                                <b-form-group label="密码" label-class="text-white">
                                    <b-form-input id="input-password"
                                                  v-model="form.password"
                                                  type="password"
                                                  required
                                                  placeholder="输入密码"></b-form-input>
                                </b-form-group>
                                <b-row>
                                    <div class="col-12 col-md-4">
                                        <b-button type="submit" variant="secondary" class="btn-block">登 录</b-button>
                                    </div>
                                </b-row>
                            </b-form>
                        </b-col>
                        <!--注册-->
                        <b-col class="col-12 col-md-6">
                            <h5>注册</h5>
                            <p class="description_text">一个新的免费帐户</p>
                            <p class="description_text">
                                欢迎免费加入及轻松使用。继续创建 Sbeam 帐户并获取 Sbeam - 适合 PC 和 Mac 玩家的前沿数字解决方案。
                            </p>
                            <b-row class="btn_md_bottom">
                                <div class="col-12 col-md-6">
                                    <b-button variant="secondary" class="btn-block">加入 Sbeam</b-button>
                                </div>
                            </b-row>
                        </b-col>

                    </b-row>
                </div>
            </div>
            <!--建议-->
            <div class="col-12 col-md-4">
                <div class="advice_box text-left">
                    <h5>为什么加入 SBEAM？</h5>
                    <b-list-group flush="true" class="why_list">
                        <b-list-group-item class="why_item">购买和下载完整零售游戏</b-list-group-item>
                        <b-list-group-item class="why_item">加入 Sbeam 社区</b-list-group-item>
                        <b-list-group-item class="why_item">游戏时与好友聊天</b-list-group-item>
                        <b-list-group-item class="why_item">在任何电脑上都能玩</b-list-group-item>
                        <b-list-group-item class="why_item">安排游戏、比赛或 LAN 聚会</b-list-group-item>
                        <b-list-group-item class="why_item">获取自动游戏更新以及更多！</b-list-group-item>
                    </b-list-group>

                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "LoginContent",
        data() {
            return {
                //登录数据
                form: {
                    account: '',
                    password: ''
                }
            }
        }
    }
</script>

<style scoped>
    h5 {
        color: white;
        margin-top: 3%;
    }

    .login_box {
        background: #2a2a2a;
        padding: 4% 4% 8% 4%;
    }

    .advice_box {
        background: #2a2a2a;
        padding: 4% 4% 8% 4%;
    }

    @media (min-width: 768px) {
        .btn_md_bottom {
            position: absolute;
            width: 100%;
            bottom: 0;
        }
    }

    .description_text {
        display: block;
        font-size: 13px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        color: #bcbcbc;
    }

    .why_list {
        font-size: 13px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        color: #bcbcbc;
    }

    .why_item {
        background-color: #2a2a2a;
    }
    .login_content{
        margin-top: 6%;
        margin-bottom: 5%;
    }

</style>