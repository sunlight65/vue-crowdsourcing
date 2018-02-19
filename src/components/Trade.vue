<template>
  <div class="trade">
    <el-form ref="form" :model="formData" label-width="0.5rem" :inline="true" @submit.native.prevent>
      <el-form-item :label="$t('txt.order_no')" class="no">
        <el-input v-model="formData.orderNo" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item :label="$t('txt.date')" class="date-range">
        <el-col :span="11">
          <el-date-picker type="date" :placeholder="$t('txt.select_date')" v-model="formData.startDate"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" :placeholder="$t('txt.select_date')" v-model="formData.endDate"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="preSumbit" :disabled="isSubmitting">{{ lblSumbit($t('txt.searching'), $t('txt.search')) }}</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="orderList">
      <el-table-column :label="$t('txt.order_no')" prop="no" width="200">
      </el-table-column>
      <el-table-column :label="$t('txt.date')" prop="date" width="120">
      </el-table-column>
      <el-table-column :label="$t('txt.amount')" prop="amount" width="120">
      </el-table-column>
      <el-table-column :label="$t('txt.unit_price')" prop="unit_price" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="totalCount" v-if="totalCount" @current-change="pageNoChanged">
    </el-pagination>
  </div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'
import api from '@/assets/js/api'

export default {
  name: 'Trade',
  mixins: [formMixin],
  data () {
    return {
      formData: {
        orderNo: '',
        startDate: '',
        endDate: '',
        currentPageNo: 1
      },
      orderList: [],
      totalCount: 0
    }
  },
  methods: {
    submit: function (e, postSumbit) {
      const vm = this
      vm.formData.currentPageNo = 1
      vm.getOrders(postSumbit)
    },
    getOrders: function (postSumbit) {
      const vm = this

      api.get(
        {
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/orders',
          data: {
            orderNo: vm.formData.orderNo,
            startDate: vm.formData.startDate,
            endDate: vm.formData.endDate,
            currentPageNo: vm.formData.currentPageNo
          },
          onSuccess: function ({data}) {
            data = data.data
            vm.orderList = data.orders
            vm.totalCount = data.totalCount
          },
          onFinally: postSumbit
        }
      )
    },
    pageNoChanged (val) {
      const vm = this
      vm.formData.currentPageNo = val
      vm.getOrders()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.trade {
  width: 8rem;
  margin: 0 auto;
  background:#efeeee;

  @include if_mobile() {
    width: 100%;
  }

  .el-form {
    width: 8rem;
    padding: 0.2rem;

    @include if_mobile() {
      width: 100%;
    }

    .line {
      text-align: center;
    }

    .no {
      .el-input {
        width: 1.8rem;
      }
    }

    .date-range {
      .el-input {
        width: 100%;
        max-width: 1.5rem;
      }
    }
  }
}
</style>
