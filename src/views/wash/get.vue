<template>
  <div class="page wash-get">
    <!-- 头部搜索 -->
    <div class="searchs">
      <el-radio-group v-model="post.type" class="navs">
        <el-radio label="1">会员卡号</el-radio>
        <el-radio label="2">手机号</el-radio>
        <el-radio label="3">车牌号</el-radio>
      </el-radio-group>
      <el-input v-model="post.val" placeholder="请输入要查询的内容" clearable>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <!-- 搜索结果 -->
    <div class="result">
      <el-table :data="result" border tooltip-effect="dark">
        <el-table-column prop="vipNo" label="会员卡号" fixed></el-table-column>
        <el-table-column prop="name" label="会员姓名" fixed></el-table-column>
        <el-table-column prop="phone" label="手机号" fixed></el-table-column>
        <el-table-column prop="money" label="办卡金额" fixed></el-table-column>
        <el-table-column prop="times" label="剩余次数" fixed></el-table-column>
        <el-table-column prop="tips" label="备注信息" fixed></el-table-column>
        <el-table-column prop="deadline" label="过期时间" fixed></el-table-column>
        <el-table-column prop="updateTime" label="上次消费" fixed></el-table-column>
        <el-table-column label="操作" fixed>
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="doCut(scope.row.vipNo)">刷卡</el-button>
            <el-button type="primary" size="mini" @click="doUpdate(scope.row.vipNo)">修改会员信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import baseUrl from '../../utils/api';
import { post } from '../../utils/ajax';

export default {
  data() {
    return {
      post: { // 搜索初始化
        type: '1',
        val: '',
      },
      result: [], // 搜索结果
    };
  },
  computed: {
    ...mapState(['vipNo']),
  },
  created() {
    if (this.vipNo) {
      this.post.val = this.vipNo;
      this.getWashInfo();
    }
  },
  methods: {
    ...mapMutations(['setVipNo']),
    search() { // 执行搜索
      console.log(this.post);
    },
    getWashInfo() { // 获取洗车卡信息
      const params = {
        vipNo: this.vipNo,
      };
      // 验证成功发送请求
      post(baseUrl + '/wash/get', params)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.data);
            this.result = [res.data.data];
          } else {
            return Promise.reject(res.data.message);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.wash-get {
  .searchs {
    padding: 36px 60px;
    .navs {
      padding: 12px 0;
    }
  }
  .result {
    padding: 0 24px;
  }
}
</style>
