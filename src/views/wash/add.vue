<template>
  <div class="page wash-add">
    <div class="titlebar">
      <p class="title">基本信息</p>
    </div>
    <div class="forms">
      <el-form :inline="true">
        <el-form-item label="客户姓名">
          <el-input placeholder="客户姓名" v-model="forms.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input placeholder="联系方式" v-model="forms.phone" clearable></el-input>
        </el-form-item>
        <el-form-item label="会员卡号">
          <el-input placeholder="会员卡号" v-model="forms.vipNo" clearable></el-input>
        </el-form-item>
        <el-form-item label="办卡金额">
          <el-input placeholder="办卡金额" v-model="forms.money" clearable></el-input>
        </el-form-item>
        <el-form-item label="赠送次数">
          <el-input placeholder="赠送次数" v-model="forms.times" clearable></el-input>
        </el-form-item>
        <el-form-item label="过期时间">
          <el-date-picker type="date" placeholder="过期时间" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" v-model="forms.deadline"></el-date-picker>
        </el-form-item>
        <el-form-item label="卡类型">
          <el-select v-model="forms.type" clearable placeholder="卡类型">
            <el-option v-for="item in types" :key="item.key" :label="item" :value="item">
              <span>{{ item }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="titlebar">
      <p class="title">车辆信息</p>
    </div>
    <div class="forms">
      <el-form :inline="true">
        <el-form-item label="车牌号">
          <el-input placeholder="车牌号" v-model="forms.carNo" clearable></el-input>
        </el-form-item>
        <el-form-item label="品牌">
          <el-select v-model="forms.carBrand" clearable placeholder="车品牌">
            <el-option v-for="item in brands" :key="item.key" :label="item" :value="item">
              <span>{{ item }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车型">
          <el-select v-model="forms.carSize" clearable placeholder="车型">
            <el-option v-for="item in sizes" :key="item.key" :label="item" :value="item">
              <span>{{ item }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注信息">
          <el-input type="textarea" placeholder="备注信息" v-model="forms.carTips"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="btns">
      <el-button type="danger" @click="add" class="btn">确定新增</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import baseUrl from '../../utils/api';
import { post } from '../../utils/ajax';
import moment from 'moment';
export default {
  data() {
    return {
      brands: ['奔驰', '宝马', '奥迪', '保时捷', '大众', 'smart', '西雅图', '本田', '丰田', '雷克萨斯',
        '铃木', '马自达', '讴歌', '日产', '斯巴鲁', '三菱', '英菲尼迪', '起亚', '现代', '别克', '道奇', '福特',
        'Jeep', '特斯拉', '雪弗兰', '凯迪拉克', '标志', '雷诺', '雪铁龙', '捷豹', '路虎', '迷你', '菲亚特', '沃尔沃',
        '红旗', '中华', '比亚迪', '吉利', '北汽', '长安', '长城', '东风', '金杯', '荣威', '腾势', '一汽', 'WEY', '其他'],
      sizes: ['房车', '大车', '小车', '摩托车'],
      types: ['精洗卡', '大车卡', '小车卡', '摩托车卡'],
      forms: { // 搜索初始化
        name: '', // 客户姓名
        phone: '', // 联系方式
        vipNum: '', // 会员卡号
        deadline: '', // 过期时间
        money: '', // 金额
        times: '', // 赠送次数
        carNo: '', // 车牌号
        carBrand: '', // 车牌
        carSize: '', // 车型
        tips: '', // 客户备注信息
        carTips: '', // 车辆备注信息
      },
      adding: false, // 正在添加
    };
  },
  methods: {
    ...mapMutations(['setVipNo', 'setNavType']),
    regxpTest(post) {
      if (!post.phone) {
        this.$message.error('手机号是必填项');
        return false;
      }
      if (!post.vipNo) {
        this.$message.error('会员卡号是必填项');
        return false;
      }
      if (!post.money) {
        this.$message.error('办卡金额是必填项');
        return false;
      }
      if (!post.times) {
        this.$message.error('赠送次数是必填项');
        return false;
      }
      if (!post.deadline) {
        this.$message.error('过期时间是必填项');
        return false;
      }
      if (!post.cars[0].number) {
        this.$message.error('车牌号是必填项');
        return false;
      }
      if (!post.cars[0].size) {
        this.$message.error('车型为必填项');
        return false;
      }
      return true;
    },
    add() {
      if (this.adding) {
        return false;
      }
      this.adding = true;
      const date = moment().format('YYYY-MM-DD');
      // 提交数据
      const params = {
        name: this.forms.name.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
        phone: this.forms.phone.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
        vipNo: this.forms.vipNo.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
        createTime: date,
        updateTime: date,
        deadline: this.forms.deadline,
        money: this.forms.money.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
        times: this.forms.times.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
        tips: this.forms.tips.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
        cars: [{
          number: this.forms.carNo.toUpperCase().replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
          brand: this.forms.carBrand.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
          size: this.forms.carSize.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, ''),
          tips: this.forms.carTips.replace(/''/g, ''),
        }],
      };
      // 对输入进行验证
      if (!this.regxpTest(params)) {
        return false;
      }
      // 验证成功发送请求
      post(baseUrl + '/wash/add', params)
        .then((res) => {
          if (res.data.success) {
            this.$message.success(res.data.message);
            setTimeout(() => {
              this.setVipNo(params.vipNo);
              this.setNavType('wash/get');
              this.$router.replace({ path: '/wash/get' });
            }, 1000);
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
.wash-add {
  padding-top: 30px;
  .titlebar {
    padding: 0 24px;
    font-size: 20px;
  }
  .title {
    border-left: 6px solid rgb(255, 208, 75);
    padding-left: 6px;
  }
  .forms {
    padding: 30px 30px 0;
  }
  .btns {
    text-align: center;
  }
  .btn {
    margin: 0 30px;
  }
}
</style>
