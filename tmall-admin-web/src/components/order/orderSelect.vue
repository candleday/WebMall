<template>
  <!--搜索栏-->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="position: relative; top: 7px; font-size: 14px">搜索</span>
      <el-button-group style="float: right; padding: 3px 0">
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          @click="btnSearch"
          >搜索</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-refresh"
          size="mini"
          @click="btnReset"
          >重置</el-button
        >
      </el-button-group>
    </div>

    <el-form :inline="true" size="mini">
      <el-row :gutter="20">
        <el-col :span="colSize">
          <el-form-item label="订单编号">
            <el-input v-model="searchForm.orderSn" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="colSize">
          <el-form-item label="收货人">
            <el-input v-model="searchForm.receiverName" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="colSize">
          <el-form-item label="提交时间" prop="createTime">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="searchForm.createTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="colSize">
          <el-form-item label="订单状态">
            <el-select v-model="searchForm.status" placeholder="全部">
              <el-option
                v-for="item in orderStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="colSize">
          <el-form-item label="订单分类">
            <el-select v-model="searchForm.orderType" placeholder="全部">
              <el-option
                v-for="item in orderTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="colSize"
          ><el-form-item label="订单来源">
            <el-select v-model="searchForm.sourceType" placeholder="全部">
              <el-option
                v-for="item in sourceTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select> </el-form-item
        ></el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'order',
  data() {
    return {
      OrderCateOptions: [],
      searchForm: {
        pageNum: 1,
        pageSize: 5,
        orderSn: null,
        createTime: null,
        receiverName: null,
        status: null,
        orderType: null,
        sourceType: null
      },
      colSize: 8,
      sourceTypeOptions: [
        {
          value: 0,
          label: 'PC订单'
        },
        {
          value: 1,
          label: 'app订单'
        }
      ],
      orderTypeOptions: [
        {
          value: 0,
          label: '正常订单'
        },
        {
          value: 1,
          label: '秒杀订单'
        }
      ],
      orderStatusOptions: [
        {
          value: 0,
          label: '待收款'
        },
        {
          value: 1,
          label: '待发货'
        },
        {
          value: 2,
          label: '已发货'
        },
        {
          value: 3,
          label: '已完成'
        },
        {
          value: 4,
          label: '已关闭'
        },
        {
          value: 5,
          label: '无效订单'
        }
      ]
    }
  },
  methods: {
    //搜索
    btnSearch() {},
    //重置
    btnReset() {}
  }
}
</script>
<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin-top: 20px;
}
</style>
