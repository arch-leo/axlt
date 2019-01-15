<template>
  <div id="app">
    <div class="header">
      <div class="inner">
        <img class="icon" src="./assets/safe.png" alt="安全保障">
        <span class="title">安行乐途-后台管理系统</span>
      </div>
    </div>
    <!-- 侧边栏 -->
    <div class="main">
      <el-row class="sidebar">
        <el-col :span="5" class="left">
          <el-menu :default-active="navType" @select="select" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="wash">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">洗车美容服务</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="wash/get">刷卡计次</el-menu-item>
                <el-menu-item index="wash/add">新增会员</el-menu-item>
                <el-menu-item index="wash/update">会员续费</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">维修保养服务</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="19" class="right">
          <router-view class="page" />
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <div class="">北京安行乐途汽车服务有限公司</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(['navType']),
  },
  methods: {
    ...mapMutations(['setNavType']),
    select(path) {
      this.$router.replace({ path: '/' + path });
      this.setNavType(path);
    },
  },
};
</script>
<style lang="scss">
html {
  font-size: 100px;
  line-height: normal;
}

body,
ul,
ol,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
img,
div,
button {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-rendering: geometricPrecision;
  -webkit-user-select: none;
  user-select: none;
}

input,
textarea {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-rendering: geometricPrecision;
  -webkit-user-select: text;
  user-select: text;
  -webkit-appearance: none;
  border-radius: 0;
  font-family: "微软雅黑", Arial, Helvetica, sans-serif;
}

body {
  text-align: left;
  font-family: "微软雅黑", Arial, Helvetica, sans-serif, "Hiragino Sans GB";
  color: #474747;
  background-color: #fff;
  font-size-adjust: none;
  -webkit-text-size-adjust: none;
  font-size: 12px;
}

ul,
li,
dl,
dt,
dd {
  list-style: none;
}

a,
a:visited {
  text-decoration: none;
  color: #474747;
}

img {
  vertical-align: middle;
}

html,
body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  // 头部
  .header {
    font-size: 24px;
    background: #fff;
    border-bottom: 1px solid #d2d6de;
    height: 48px;
    line-height: 48px;
    .inner {
      margin: 0 auto;
      width: 1000px;
    }
    .icon {
      height: 24px;
      vertical-align: middle;
      margin-right: 8px;
    }
    .title {
      font-style: italic;
    }
  }
  // 主题
  .main {
    flex: 1;
    background: #fff;
  }
  .sidebar {
    height: 100%;
    .left {
      height: 100%;
    }
    .right {
      height: 100%;
    }
    .el-menu {
      height: 100%;
    }
  }
  // 底部
  .footer {
    font-size: 16px;
    text-align: center;
    background: #000;
    border-top: 1px solid #d2d6de;
    height: 60px;
    line-height: 60px;
    color: #999;
  }
}
</style>
