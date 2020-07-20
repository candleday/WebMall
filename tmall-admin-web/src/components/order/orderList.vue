<template>
  <!--商品列表-->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="position: relative;top: 7px">商品列表</span>
      <el-button-group class="login-btn" style="float: right; padding: 3px 0">
        <el-button
          type="primary"
          size="mini"
          @click="btnAdd"
          icon="el-icon-circle-plus-outline"
          >添加</el-button
        >
        <el-button type="primary" size="mini" icon="el-icon-delete"
          >批量删除</el-button
        >
      </el-button-group>
    </div>
    <!--商品展示栏-->
    <el-table size="mini" :data="orderList" border style="width: 100%">
      <el-table-column align="center" type="selection" width="55">
      </el-table-column>
      <el-table-column align="center" prop="id" label="编号" width="60">
      </el-table-column>
      <el-table-column align="center" prop="orderSn" label="订单编号" width="300">
      </el-table-column>
      <el-table-column align="center" prop="createTime" label="提交时间" width="300">
      </el-table-column>
      <el-table-column align="center" prop="memberUsername" label="用户账号" width="200">
      </el-table-column>
      <el-table-column align="center" prop="payAmount" label="订单金额" width="200">
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      style="margin-top: 20px"
      background
      @size-change="btnSearch"
      @current-change="handleCurrentChange"
      :current-page="page.pageNum"
      :page-sizes="[5, 10, 15]"
      :page-size="page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import { api_orderList } from '@/api/order'
export default {
  name: 'orderSelect',
  created(){
    this.handleOrderList()
  },
  data(){
    return {
      page: {
        pageNum: 1,
        pageSize: 5,
        totalPage: 3,
        total: 11
      },
      orderList:[]
    }
  },
  methods: {
    async handleOrderList() {
      const { data: res } = await api_orderList()
      console.log(res)
      this.orderList = res.data.list
    },
    handleCurrentChange() {},
    //添加
    btnAdd() {},
    btnSearch() {},
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
