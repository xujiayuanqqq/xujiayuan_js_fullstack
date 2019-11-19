<template>
  <div id="app">
    <header class="header">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-mnu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">活动发布</el-menu-item>
          <el-menu-item index="2">活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :space="200" :active="step">
            <el-step title="活动信息"></el-step>
            <el-step title="报名签到"></el-step>
            <el-step title="分享设置"></el-step>
            <el-step title="个性设置"></el-step>
          </el-steps>
          <div class="step1">
            <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name" size="larget"></el-input>
              </el-form-item>

              <el-form-item label="" prop="fenLei">
                <el-row style="height:35px;" type="flex" align="middle">
                  <el-col :span="3" style="width:90px;">
                    <div class="el-form-item_label">活动分类</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button type="text" @click.prevent="dialogFormFenLeiVisible=true">设置</el-button>
                  </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.fenLei">
                  <el-radio v-for="item of ruleForm.fenLeis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="活动标签" prop="biaoQian">
                <el-tag :span="2" v-for="item of ruleForm.biaoQian" type="primary" :key="item.name" @close="biaoQianClose(item)" closable>
                  {{item.label}}</el-tag>
                <el-button @click.prevent="dialogFormbiaoQianVisible=true" class="el-button el-button--default el-button--large" style="vertical-align: middle; margin: 10px;">
                  <i class="el-icon-plus"></i>
                </el-button>
              </el-form-item>

              <el-form-item label="活动时间" prop="time">
                <el-col :span="4">
                  <el-form-item prop="date1">
                    <el-date-picker type="date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="0.5" style="text-align: center">-</el-col>
                <el-col :span="4">
                  <el-form-item prop="date2">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                  </el-form-item>
                </el-col>

                <el-col class="line" :span="2" style="text-align: center">——</el-col>

                <el-col :span="4">
                  <el-form-item prop="date1">
                    <el-date-picker type="date" v-model="ruleForm.date3" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="0.5" style="text-align: center">-</el-col>
                <el-col :span="4">
                  <el-form-item prop="date2">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date4" style="width: 100%;"></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>


              <el-form-item label="报名时间" prop="time">
                <el-col :span="4">
                  <el-form-item prop="date1">
                    <el-date-picker type="date" v-model="ruleForm.date5" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="0.5" style="text-align: center">-</el-col>
                <el-col :span="4">
                  <el-form-item prop="date2">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date6" style="width: 100%;"></el-time-picker>
                  </el-form-item>
                </el-col>

                <el-col class="line" :span="2" style="text-align: center">——</el-col>

                <el-col :span="4">
                  <el-form-item prop="date1">
                    <el-date-picker type="date" v-model="ruleForm.date7" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="0.5" style="text-align: center">-</el-col>
                <el-col :span="4">
                  <el-form-item prop="date2">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date8" style="width: 100%;"></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>

              <el-form-item label="报名地点" prop="address">
                <el-col :span="4">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="0.5">-</el-col>
                <el-col :span="4">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="2" style="text-align: center">-</el-col>
                <el-col :span="12">
                  <el-input placeholder="江西财经大学"></el-input>
                </el-col>
              </el-form-item>

              <el-form-item label="活动人数">
                <el-radio-group v-model="form.resource">
                  <el-radio label="无限制"></el-radio>
                  <el-radio label="限制"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-col :span="6">
                <el-input placeholder="0" v-model="input">
                  <template slot="append">人</template>
                </el-input>
              </el-col>
            </el-form>

            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
              <el-form>
                <el-form-item>
                  <el-tag v-for="fenLei of ruleForm.fenLeis" type="primary" :key="fenLei.name" @close="handleClose(fenLei)" closable>
                    {{fenLei.name}}</el-tag>
                </el-form-item>
                <el-input v-model="ruleForm.name" placeholder="请输入活动内容"></el-input>

                <el-button class="el-button" @click.prevent="cancel">取消</el-button>
                <el-button type="primary" @click.prevent="add">添加</el-button>
              </el-form>
            </el-dialog>

            <el-dialog title="添加活动标签" :visible.sync="dialogFormbiaoQianVisible">
              <el-form>
                <el-input v-model="ruleForm.name" placeholder="请输入活动内容"></el-input>
                <el-button class="el-button" @click.prevent="biaoQiancancel">取消</el-button>
                <el-button type="primary" @click.prevent="biaoQianadd">添加</el-button>
              </el-form>
            </el-dialog>

          </div>

          <!-- 按钮组 上一步 下一步 发布活动 -->
          <el-buttonGroup>
            <el-button type="primary" v-show="preStep" @click.native.prevent="handlePreStep">上一步</el-button>
            <el-button type="primary" v-show="nextStep" @click.native.prevent="handleNextStep">下一步</el-button>
            <el-button type="primary">发布活动</el-button>
          </el-buttonGroup>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        disabled: false,
        isLoading: false,
        step: 2,
        preStep: true,
        nextStep: true,
        dialogFormFenLeiVisible: false,
        dialogFormbiaoQianVisible: false,
        input: '',
        form: {
          resource: ''
        },
        ruleForm: {
          name: "",
          fenLeis: [
            {
              name: "未发布"
            },
            {
              name: "测试活动"
            },
            {
              name: "精彩活动"
            }
          ],
          biaoQian: [
            { label: "上市" }
          ],
          fenLei: "测试活动",
          tags: []
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    },
    components: {
      // 'el-button': ElButton,
      // 'el-button-group': ElButtonGroup
    },
    mounted() {
      setTimeout(() => {
        this.disabled = true;
      }, 2000);
    },
    methods: {
      doLoading() {
        console.log("aaa");
      },
      doSumbit(evt) {
        console.log(evt);
      },
      handlePreStep() {
        this.step--;
        this.goStep(this.step);
      },
      handleNextStep() {
        this.step++;
        this.goStep(this.step);
      },
      goStep(n) {
        switch (n) {
          case 1:
            this.preStep = false;
            this.nextStep = true;
            break;
          case 2:
          case 3:
            this.preStep = true;
            this.nextStep = true;
            break;
          case 4:
            this.preStep = true;
            this.nextStep = false;
        }
      },
      handleClose(tag) {
        // console.log(tag);
        this.ruleForm.fenLeis.splice(this.ruleForm.fenLeis.indexOf(tag), 1);
        // this.dialogFormFenLeiVisible = false
      },
      biaoQianClose(tag) {
        // console.log(tag)
        this.ruleForm.biaoQian.splice(this.ruleForm.biaoQian.indexOf(tag), 1)
      },
      add() {
        var a = {
          name: this.ruleForm.name
        };
        this.ruleForm.fenLeis.push(a);
        this.ruleForm.name = null;
        console.log(this.ruleForm.name);
      },
      cancel() {
        this.dialogFormFenLeiVisible = false;
      },
      biaoQiancancel() {
        this.dialogFormbiaoQianVisible = false;
      },
      biaoQianadd() {
        var b = {
          label: this.ruleForm.name
        }
        this.ruleForm.biaoQian.push(b);
        this.ruleForm.name = null;
        this.dialogFormbiaoQianVisible = false;
      }
    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: sans-serif;
  }

  header {
    z-index: 1000;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: 4px solid #3091f2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  }

  header.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  header.el-menu-demo {
    padding-left: 300px !important;
  }

  main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    border: solid 40px #e9ecf1;
    background-color: #fcfcfc;
  }

  main .main-left {
    text-align: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
  }

  main .main-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #fff;
    padding: 50px 70px;
  }

  main .el-menu {
    background-color: transparent !important;
  }
</style>