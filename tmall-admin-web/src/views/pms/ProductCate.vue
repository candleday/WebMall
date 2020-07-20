<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
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
        :data="productCateGoryList"
        border
        style="width: 100%"
      >
        <el-table-column align="center" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="id" label="编号" width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="keywords"
          label="分类名称"
          width="120"
        >
        </el-table-column>
        <el-table-column align="center" prop="level" label="级别" width="85">
        </el-table-column>
        <el-table-column
          align="center"
          prop="productCount"
          label="商品数量"
          width="100"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="productUnit"
          label="数量单位"
          width="100"
        >
        </el-table-column>
        <el-table-column width="100" align="center" label="导航栏">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.navStatus"
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
        <el-table-column align="center" prop="sort" label="排序" width="80">
        </el-table-column>
        <el-table-column width="200px" align="center" label="设置">
          <template slot-scope="scope">
            <p>
              <el-button size="mini" @click="btnEdit(scope.$index, scope.row)"
                >查看下级</el-button
              >
              <el-button size="mini">转移商品</el-button>
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
import { api_productCateGorylist } from '@/api/productCate'
export default {
  name: '',
  created() {
    this.handleProductCateGoryList()
  },
  data() {
    return {
      page: {
        pageNum: 1,
        pageSize: 5,
        totalPage: 3,
        total: 8
      },
      productCateGoryList: [],
      navStatus: null,
      showStatus: null
    }
  },
  methods: {
    async handleProductCateGoryList() {
      // console.log('得到数据')
      const { data: res } = await api_productCateGorylist()
      console.log(res)
      this.productCateGoryList = res.data.list
    },
    btnSearch() {}
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 20px;
}
</style>
