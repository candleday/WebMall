<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>商品类型</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="position: relative;top: 7px">数据列表</span>
        <el-button-group class="login-btn" style="float: right; padding: 3px 0">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-circle-plus-outline"
            @click="btnAdd"
            >添加</el-button
          >
          <el-button type="danger" size="mini" icon="el-icon-delete"
            >批量删除</el-button
          >
        </el-button-group>
      </div>
      <el-table
        height="250"
        fit
        size="mini"
        :data="productAttributeList"
        border
        style="width: 100%"
      >
        <el-table-column align="center" type="selection" width="85">
        </el-table-column>
        <el-table-column align="center" prop="id" label="编号" width="100">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="类型名称"
          width="200"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="attributeCount"
          label="属性数量"
          width="180"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="paramCount"
          label="参数数量"
          width="180"
        >
        </el-table-column>
        <el-table-column width="200px" align="center" label="设置">
          <template slot-scope="scope">
            <p>
              <el-button size="mini" @click="btnEdit(scope.$index, scope.row)"
                >属性列表</el-button
              >
              <el-button size="mini">参数列表</el-button>
            </p>
          </template>
        </el-table-column>
        <el-table-column width="160px" align="center" label="操作">
          <template slot-scope="scope">
            <p>
              <el-button size="mini" @click="btnEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button size="mini" type="danger">删除</el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
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
  </div>
</template>

<script>
import { api_productAttributelist } from '@/api/productAttribute.js'

export default {
  name: '',
  created() {
    this.handleProductAttributeList()
  },
  data() {
    return {
      page: {
        pageNum: 1,
        pageSize: 5,
        totalPage: 3,
        total: 8
      },
      productAttributeList: []
    }
  },
  methods: {
    async handleProductAttributeList() {
      const { data: res } = await api_productAttributelist()
      console.log('类型数据')
      console.log(res)
      this.productAttributeList = res.data.list
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 20px;
}
</style>
