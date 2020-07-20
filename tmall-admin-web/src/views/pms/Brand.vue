<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>品牌管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="position: relative;top: 7px">搜索</span>
        <el-button-group class="login-btn" style="float: right; padding: 3px 0">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-search"
            @click="btnSearch"
            >搜索</el-button
          >
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-refresh"
            @click="btnReset"
            >重置</el-button
          >
        </el-button-group>
      </div>
      <el-form :model="searchForm" :inline="true" size="mini">
        <el-row :gutter="20">
          <el-col :span="colSize"
            ><el-form-item label="品牌名称">
              <el-input
                v-model="searchForm.name"
                clearable
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
    </el-card>
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
        :data="productBrandList"
        border
        style="width: 100%"
      >
        <el-table-column align="center" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="id" label="编号" width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="品牌名称"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="firstLetter"
          label="品牌首字母"
          width="140"
        >
        </el-table-column>
        <el-table-column align="center" prop="sort" label="排序" width="80">
        </el-table-column>
        <el-table-column width="100" align="center" label="品牌制造商">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.factoryStatus"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column width="100" align="center" label="是否显示">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.showStatus"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column align="center" label="相关">
          <template slot-scope="scope">
            商品：{{ scope.row.productCount }} 评价：{{
              scope.row.productCommentCount
            }}
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
import { api_brandList } from '@/api/brand'

export default {
  name: '',
  created() {
    this.handleProductBrandList()
  },
  data() {
    return {
      page: {
        pageNum: 1,
        pageSize: 5,
        totalPage: 3,
        total: 11
      },
      searchForm: [],
      productBrandList: []
    }
  },
  methods: {
    async handleProductBrandList() {
      const { data: res } = await api_brandList({
        pageSize: 100,
        pageNum: 1
      })
      console.log(res)
      this.productBrandList = res.data.list
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 20px;
}
</style>
