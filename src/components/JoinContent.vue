<template>
    <b-container>
        <b-row class="join_content">
            <!--创建账户-->
            <div class="col-12 col-md-8 text-left">
                <div class="join_box">
                    <b-row>
                        <b-col class="col-12 col-md-10">
                            <h5>创建账户</h5>
                            <b-form @submit="onSubmit">
                                <b-form-group label="账户名" label-class="text-white" label-for="input-1" >
                                    <b-row>
                                        <b-col class="col-12 col-md-7">
                                            <b-form-input
                                                    id="input-1"
                                                    size="sm"
                                                    v-model="form.name"
                                                    required
                                                    placeholder="输入账户名"
                                                    :state="nameState">
                                            </b-form-input>
                                        </b-col>
                                        <b-col class="col-12 col-md-5">
                                            <span v-if="nameState==null"></span>
                                            <span v-else-if="nameState==true" class="text-info">用户名可以使用</span>
                                            <span v-else-if="nameState==false" class="text-danger">用户名长度在2到8位之间</span>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                                <b-form-group label="邮箱地址" label-class="text-white" label-for="input-2">
                                    <b-row>
                                        <b-col class="col-12 col-md-7">
                                            <b-form-input
                                                    size="sm"
                                                    id="input-2"
                                                    v-model="form.email"
                                                    type="email"
                                                    required
                                                    placeholder="输入邮箱地址"
                                                    :state="emailState">
                                            </b-form-input>
                                        </b-col>
                                        <b-col class="col-12 col-md-5">
                                            <span v-if="emailState==null"></span>
                                            <span v-else-if="emailState==true" class="text-info">该邮箱可以使用</span>
                                            <span v-else-if="emailState==false" class="text-danger">请输入有效的邮箱地址</span>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                                <b-form-group label="密码" label-class="text-white" label-for="input-3">
                                    <b-row>
                                        <b-col class="col-12 col-md-7">
                                            <b-form-input
                                                    size="sm"
                                                    id="input-3"
                                                    type="password"
                                                    v-model="form.password"
                                                    required
                                                    placeholder="输入密码"
                                                    :state="passwordState">
                                            </b-form-input>
                                        </b-col>
                                        <b-col class="col-12 col-md-5">
                                            <span v-if="passwordState==null"></span>
                                            <span v-else-if="passwordState==true" class="text-info">密码格式正确</span>
                                            <span v-else-if="passwordState==false" class="text-danger">密码长度在3到30位之间</span>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                                <b-form-group label="再次输入密码" label-class="text-white" label-for="input-4">
                                    <b-row>
                                        <b-col class="col-12 col-md-7">
                                            <b-form-input
                                                    size="sm"
                                                    id="input-4"
                                                    v-model="form.repeat_password"
                                                    type="password"
                                                    required
                                                    placeholder="输入密码"
                                                    :state="repasswordState">
                                            </b-form-input>
                                        </b-col>
                                        <b-col class="col-12 col-md-5">
                                            <span v-if="passwordState==null"></span>
                                            <span v-else-if="repasswordState==true" class="text-info">两次输入的密码一致</span>
                                            <span v-else-if="repasswordState==false" class="text-danger">两次输入的密码不一致</span>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                                <b-form-group label="验证码" label-class="text-white" label-for="input-5" >
                                    <b-row>
                                        <b-col class="col-12 col-md-7">
                                            <b-form-input id="input-5" v-model="form.verifyCode"  required trim placeholder="输入验证码">
                                            </b-form-input>
                                        </b-col>
                                        <b-col class="col-12 col-md-5">
                                            <b-img :src="verifyImg" @click="refreshVerifyImg"></b-img>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                                <b-row>
                                    <b-col class="col-12 col-md-7">
                                        <b-button type="submit" class="btn-block">注 册</b-button>
                                        <!--注册成功-->
                                        <b-modal ref="join-modal" hide-footer title="Sbeam">
                                            <div class="d-block text-left"><h6 class="text-black">
                                                注册成功，点击确认跳转至首页。</h6></div>
                                            <b-button block to="/">确 认</b-button>
                                        </b-modal>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <!--why-->
            <div class="col-12 col-md-4">
                <WhyBox></WhyBox>
            </div>
        </b-row>
    </b-container>
</template>

<script>
    import WhyBox from "@/components/WhyBox";
    import {getVerifyCodeImg, register} from "@/apis/api";

    export default {
        name: "JoinContent",
        components: {WhyBox},
        computed : {
            nameState() {
                if (this.form.name.length >=2 && this.form.name.length <=8){
                    return true
                }else if (this.form.name.length >0){
                    return false
                }
                return null
            },
            emailState() {
                var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                if (this.form.email != '' && reg.test(this.form.email)){
                    return true
                }else if (this.form.email != '' && !reg.test(this.form.email)){
                    return false
                }
                return null
            },
            passwordState(){
                if (this.form.password.length >=3 && this.form.password.length <=30){
                    return true
                }else if (this.form.password.length >0){
                    return false
                }
                return null
            },
            repasswordState(){
                if (this.form.repeat_password == this.form.password && this.form.repeat_password.length >0){
                    return true
                }else if (this.form.repeat_password != this.form.password && this.form.repeat_password.length >0){
                    return false
                }
                return null
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    repeat_password: '',
                    verifyCode:'',
                },
                verifyImg:''
            }
        },
        methods: {
            onSubmit() {
                register(this.form).then(resp => {
                    if (resp.status != 200)
                        window.console.log(resp.data)
                    if (resp.data.ret == 0) {
                        this.$refs['join-modal'].show()
                    } else
                        window.console.log(resp.data.msg)
                })
            },
            refreshVerifyImg(){
                getVerifyCodeImg().then(resp=>{
                    this.verifyImg=resp.data
                })
            }

        },
        mounted(){
            this.refreshVerifyImg()
        }
    }
</script>

<style scoped>
    h5 {
        color: white;
    }

    .join_box {
        background: #2a2a2a;
        padding: 4% 4% 8% 4%;
    }

    .join_content {
        margin-top: 6%;
        margin-bottom: 5%;
    }
</style>