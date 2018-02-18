<template>
  <div class="trade">
    <el-form ref="form" :model="formData" label-width="0.5rem" @submit.native.prevent>
      <el-form-item :label="$t('txt.order_no')">
        <el-input v-model="formData.orderNo" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item :label="$t('txt.date')">
        <el-col :span="11">
          <el-date-picker type="date" :placeholder="$t('txt.select_date')" v-model="formData.startDate" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" :placeholder="$t('txt.select_date')" v-model="formData.endDate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="preSumbit" :disabled="isSubmitting">{{ lblSumbit($t('txt.searching'), $t('txt.search')) }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'

export default {
  name: 'Trade',
  mixins: [formMixin],
  data () {
    return {
      formData: {
        orderNo: '',
        startDate: '',
        endDate: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.trade {
  width: 8rem;
  background:#efeeee;

  @include if_mobile() {
    width: 100%;
  }

  .el-form {
    width: 5rem;
    padding: 0.2rem;

    @include if_mobile() {
      width: 100%;
    }

    .line {
      text-align: center;
    }
  }
}
</style>
