<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
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
            ><el-form-item label="商品名称">
              <el-input
                v-model="searchForm.keyword"
                clearable
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="colSize"
            ><el-form-item label="商品货号">
              <el-input
                v-model="searchForm.productSn"
                clearable
              ></el-input> </el-form-item
          ></el-col>
          <!--          商品分类-->
          <el-col :span="colSize"
            ><el-form-item label="商品分类">
              <el-cascader
                @change="handleCateChange"
                v-model="productCateValue"
                :options="productCateOptions"
                :props="{ expandTrigger: 'hover', label: 'name', value: 'id' }"
              ></el-cascader> </el-form-item
          ></el-col>
          <el-col :span="colSize"
            ><el-form-item label="上架状态">
              <el-select
                v-model="searchForm.publishStatus"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in publishStatusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="colSize"
            ><el-form-item label="审核状态">
              <el-select v-model="searchForm.verifyStatus" placeholder="请选择">
                <el-option
                  v-for="item in verifyStatusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="colSize"
            ><el-form-item label="商品品牌">
              <el-select v-model="searchForm.brandId" placeholder="请选择">
                <el-option
                  v-for="item in productBrandList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="position: relative;top: 7px">商品列表</span>
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
        :data="productList"
        border
        style="width: 100%"
      >
        <el-table-column align="center" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="id" label="编号" width="80">
        </el-table-column>
        <el-table-column align="center" label="图片" width="120">
          <template slot-scope="scope">
            <el-image style="height: 100px" :src="scope.row.pic"></el-image>
          </template>
        </el-table-column>
        <el-table-column align="center" label="商品名称" width="140">
          <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
            <p>品牌：{{ scope.row.brandName }}</p>
          </template>
        </el-table-column>
        <el-table-column align="center" label="价格/货号" width="100">
          <template slot-scope="scope">
            <p>价格：￥{{ scope.row.price }}</p>
            <p>货号：{{ scope.row.productSn }}</p>
          </template>
        </el-table-column>
        <el-table-column width="100" align="center" label="标签">
          <template slot-scope="scope">
            <p>
              上架：<el-switch
                v-model="scope.row.publishStatus"
                active-color="#13ce66"
                inactive-color="#ff4949"
                :active-value="1"
                :inactive-value="0"
              >
              </el-switch>
            </p>
            <p>
              新品：<el-switch
                v-model="scope.row.newStatus"
                active-color="#13ce66"
                inactive-color="#ff4949"
                :active-value="1"
                :inactive-value="0"
              >
              </el-switch>
            </p>
            <p>
              推荐：<el-switch
                v-model="scope.row.recommandStatus"
                active-color="#13ce66"
                inactive-color="#ff4949"
                :active-value="1"
                :inactive-value="0"
                @change="handleStatus('rec', scope.row)"
              >
              </el-switch>
            </p>
          </template>
        </el-table-column>

        <el-table-column align="center" prop="sort" label="排序" width="80">
        </el-table-column>
        <el-table-column align="center" label="SKU库存">
          <template>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="sale" label="销量" width="80">
        </el-table-column>
        <el-table-column align="center" label="审核状态">
          <template slot-scope="scope">
            <p>{{ scope.row.verifyStatus | verifyStatusFilter }}</p>
            <p><el-button type="text">审核详情</el-button></p>
          </template>
        </el-table-column>
        <el-table-column width="160px" align="center" label="操作">
          <template slot-scope="scope">
            <p>
              <el-button size="mini" @click="btnEdit(scope.$index, scope.row)"
                >查看</el-button
              >
              <el-button size="mini" type="danger">编辑</el-button>
            </p>
            <p>
              <el-button size="mini">日志</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="btnDelete(scope.$index, scope.row)"
                >删除</el-button
              >
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
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="productForm" label-width="80px">
        <el-form-item label="日期">
          <el-input v-model="productForm.date"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="productForm.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="productForm.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="btnSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { api_productList, api_updateProductStatus } from '@/api/product.js'
import { api_listWithChildren } from '@/api/productCate.js'
import { api_brandList } from '@/api/brand.js'

export default {
  name: 'ProductList',
  created() {
    this.handleProductList()
    this.handleProductCate()
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
      searchForm: {
        keyword: null,
        pageNum: 1,
        pageSize: 5,
        publishStatus: null,
        verifyStatus: null,
        productSn: null,
        productCategoryId: null,
        brandId: null
      },
      colSize: 8,
      value: '',
      option: [],
      publishStatusOptions: [
        {
          value: 1,
          label: '上架'
        },
        {
          value: 0,
          label: '下架'
        }
      ],
      verifyStatusOptions: [
        {
          value: 1,
          label: '审核通过'
        },
        {
          value: 0,
          label: '未审核'
        }
      ],
      productList: [],
      productBrandList: [],
      productCateValue: [],
      editRowIndex: -1,
      dialogFormVisible: false,
      productForm: {
        date: '',
        name: '',
        address: ''
      },
      productCateOptions: []
    }
  },
  filters: {
    verifyStatusFilter(value) {
      let text = '审核通过'
      if (value !== 1) {
        text = '未审核'
      }
      return text
    }
  },
  methods: {
    async handleStatus(type, row) {
      let url = ''
      if (type === 'rec') {
        //推荐
        url = 'recommendStatus'
      }
      let ids = []
      ids.push(row.id)
      const res = api_updateProductStatus(url, {
        ids: ids,
        recommendStatus: row.recommandStatus
      })
      console.log(res)
    },

    handleCurrentChange() {},

    handleCateChange(value) {
      console.log(value)
      console.log(this.productCateValue)
    },
    async handleProductList() {
      const { data: res } = await api_productList(this.searchForm)
      console.log(res)
      this.productList = res.data.list
    },

    async handleProductBrandList() {
      const { data: res } = await api_brandList({
        pageSize: 100,
        pageNum: 1
      })
      console.log(res)
      this.productBrandList = res.data.list
    },

    async handleProductCate() {
      this.productCateOptions = []
      const { data: res } = await api_listWithChildren()
      this.productCateOptions = res.data
      // console.log(res)
      /*
                分析item
                要获取结果是啥
                [
                    label: ''
                    value: ''
                    children: []
                ]
          */
      // let list = res.data
      // for(let item of list){
      //     let node = {
      //         label: '',
      //         value: -1,
      //         children: []
      //     }
      //     console.log(item)
      //     node.label = item.name
      //     node.value = item.id
      //     if(item.children != null && item.children.length > 0) {
      //         //遍历item中的children
      //         for(let child of item.children){
      //             node.children.push({
      //                 label: child.name,
      //                 value: child.id
      //             })
      //
      //             }
      //         }
      //     this.productCateOptions.push(node)
      //     }
    },

    btnSave() {
      this.dialogFormVisible = false
      if (this.editRowIndex == -1) {
        // unshift：从头部插入数据；
        // push：从尾部插入数据
        // this.tableData.push(this.productForm)
      } else {
        // this.tableData.splice(this.editRowIndex, 1, this.productForm)
      }
      // 清空表单内容
      // this.productForm = { brand_right: 0 }
    },
    btnEdit(index, row) {
      this.dialogFormVisible = true
      this.productForm.date = row.date
      this.productForm.name = row.name
      this.productForm.address = row.address
      this.editRowIndex = index
      console.log(index, row)
    },
    btnAdd() {
      this.dialogFormVisible = true
      this.editRowIndex = -1
      this.productForm = { brand_right: 0 }
    },
    btnDelete(index, row) {
      console.log(index, row)
      this.$confirm(`确认是否删除姓名为${row.name}的记录`, '删除', {
        confirmButtonText: '确定'
      }).then(() => {
        let res = this.tableData.splice(index, 1)
        let msg = '删除成功'
        if (!res) {
          msg = '删除失败'
        }
        this.$message({
          type: 'info',
          message: msg
        })
      })
    },
    btnSearch() {
      this.searchForm.productCategoryId = this.productCateValue[1]
      this.handleProductList()
    },
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
