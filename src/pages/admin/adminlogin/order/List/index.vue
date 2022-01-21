<template>
  <a-card title="Order List" style="height: 100%">
    <a-table style="height: 100%" :pagination="false"  rowKey="id" :columns="columns" :data-source="datas">
      <span slot="totalPrice" slot-scope="text, record">
          <p style="color: #0a0a52;font-weight: bold">{{ record.totalPrice.toLocaleString('vi', {style: 'currency', currency: 'VND'}) }}</p>
      </span>
      <span slot="check_out" slot-scope="text, record">
          <p :class="record.check_out ? 'btn success' : 'btn failure'">{{record.check_out ? "Success" : "Failure"}}</p>
      </span>
      <span slot="action" slot-scope="text, record">
          <a @click="viewOrderDetail(record.id)"><a-icon type="info-circle"/></a>
          <a-divider type="vertical"/>
          <a class="ant-dropdown-link"><a-icon type="edit"/></a>
          <a-divider type="vertical"/>
          <a @click="deleteOrder(record.id)"><span style="color: red; cursor: pointer" class="ant-dropdown-link"><a-icon type="delete"/></span></a>
      </span>
    </a-table>
    <div>
      <a-pagination style="margin-top: 15px" :total="totalData" show-less-items @change="onChangePage"/>
    </div>
  </a-card>
</template>
<script>
import {getOrders,deleteOrder} from "@/pages/admin/adminlogin/order/service";

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Account ID',
    dataIndex: 'account_id',
    key: 'account_id',
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    scopedSlots: {customRender: 'totalPrice'},
  },
  {
    title: 'Check Out',
    dataIndex: 'check_out',
    key: 'check_out',
    scopedSlots: {customRender: 'check_out'},
  },
  {
    title: 'Order Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Actions',
    key: 'action',
    width: 110,
    scopedSlots: {customRender: 'action'},
  },
];
const params ={
  id:'',
  page:1,
  minPrice:undefined,
  maxPrice:undefined,
  account_id:undefined
}

export default {
  data() {
    return {
      columns,
      totalData:undefined,
      datas:[],
      params:params,
    };
  },
  created() {
    this.getData();
  },
  methods:{
    //Get All Order
    async getData(){
      try{
        const {data} = await getOrders();
        this.datas = data.datas;
        console.log(data);
        console.log(data.pagination.totalItems);
        this.totalData = data.pagination.totalItems;
      }catch (e){
        console.log(e);
      }
    },
    onChangePage(current){
      this.params.page = current;
      this.getData();
    },
    //View Detail Order
    viewOrderDetail(id){
      this.$router.push({path:`/admin/orders/detail/${id}`})
    },
    //Detail Order
    deleteOrder(id){
      deleteOrder(id);
    }
  }
};
</script>
<style scoped>
.success{
  color: green;
}
.failure{
  color: red;
}
.btn{
  padding: 5px;
  font-size: 13px;
  border-radius: 3px;
  display: inline-block;
  border: 1px solid currentColor;
}
</style>