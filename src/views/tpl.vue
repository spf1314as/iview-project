
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1" to="/tpl/form">
                            <Icon type="ios-navigate"></Icon>
                            form
                        </MenuItem>
                        <MenuItem name="2" to="/tpl/table">
                            <Icon type="ios-keypad"></Icon>
                            table
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">{{new Date().getFullYear()}} &copy; double bean</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data2:
                [
                    {
                        name:'kkk',
                        age: 18,
                        sexy:'female'
                    }
                ],
                self: this,
                count: 0,
                mycolumn:[
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title:'性别',
                        key: 'sexy'
                    },
                    {
                        title: '操作',
                        key: 'do',
                        render:(h, params) => {
                            let that = this;
                            return h('i-switch',{
                                on:{
                                    'on-change':(state) =>{
                                        if(!state) return
                                        this.getData().then( res => {
                                            that.data2[0].age = res 
                                        })
                                    }
                                }
                            })
                        }
                    }
                ]
            }
        },
        methods: {
            getData(){
                let that = this;
                return new Promise(resolve => {
                   setTimeout( _ => {
                       resolve(new Date().getFullYear())
                   },3*1000)
                })
            }
        }
    }
</script>
<style scoped lang="less">
   .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
