<template>
  <div>
    <BreadCrimb></BreadCrimb>
    <OrderSelect></OrderSelect>
    <OrderList></OrderList>
  </div>
</template>

<script>
import BreadCrimb from '@/components/order/breadCrimb'
import OrderList from '@/components/order/orderList'
import OrderSelect from '@/components/order/orderSelect'
export default {
  name: 'order',
  components: { BreadCrimb, OrderSelect, OrderList}
}
</script>

<style scoped></style>
