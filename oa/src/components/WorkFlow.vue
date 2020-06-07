<template>
  <div>{{banners}}
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getBannersByCode} from '@/api/common';
  export default {
    name: "WorkFlow",
    data() {
      return {
        tableData:[],
        banners: []
      }
    },
    mounted() {
      // this.getBanner()
    },
    methods:{
      getBanner() {
        getBannersByCode({code: '302'}).then(res => {
          if (res.code === '100'&&res.data && res.data.length>0 ) {
            this.banners = res.data;
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
