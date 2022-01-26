<template>
  <div class="header">
    <div class="header__top container">
      <div class="header__logo">
        <router-link to="/">
          <img src="../assets/images/logo.svg"/>
        </router-link>
      </div>
      <div class="header__search">
        <form>
          <input type="text" placeholder="Search for item...">
        </form>
      </div>
      <div class="header__icons-menu">
        <div class="button_cart">
          <p class="cart__status" v-if="this.$store.state.order.orderDetails.length > 0">{{this.$store.state.order.orderDetails.length}}</p>
          <i class="fas fa-shopping-cart" style="font-size: 1.3rem"></i>
          <p class="cart__name">Cart</p>
          <div  v-if="this.$store.state.order.orderDetails.length > 0" class="cart__container">
            <div class="cart__item-container">
              <div class="cart__item"  v-for="item in this.$store.state.order.orderDetails" :key="item.id">
                <div><img width="80px" height="80px" :src="item.thumbnail"/></div>
                <div class="cart__item-content">
                  <div style="display: flex;align-items: center">
                    <p class="cart__product-name">{{item.name}}</p>
                    <span class="cart__product-price">{{item.unitPrice.toLocaleString('vi', {style: 'currency', currency: 'VND'})}}</span>
                  </div>
                  <div style="margin-top: .5rem;display: flex;justify-content: space-between">
                    <div @click="onChangeQuantity(item.orderDetailKey.productID)" >
                      <a-input-number size="small" id="inputNumber" :min="1"  :defaultValue="item.quantity" @change="onQuantityChange" />
                    </div>
                  <button class="btn__removeItem"  @click="onRemoveItem(item.orderDetailKey.productID)">x</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart__actions">
              <p>Total Price: <span style="color: #3BB77E;font-weight: bold">${{
                  this.$store.state.order.orderDetails.reduce((pre,ite)=>{return pre += (ite.unitPrice * ite.quantity)},0)
                }}</span></p>
              <button class="btn__checkout" @click="onSubmitOrder">Check out</button>
            </div>
          </div>
        </div>
        <div class="button_account">
          <i class="far fa-user fa-2x" style="font-size: 1.3rem"></i>
          <p>Account</p>
        </div>
      </div>
    </div>
    <!--  nav  -->
    <nav class="header__nav">
      <div class="nav__list-categories">
        <i class="fas fa-bars"></i>
        <p>Browse All Categories</p>
        <i class="fas fa-chevron-down" style="font-size: 10px"></i>
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  data(){
    return{
      quantity:0,
      idProduct:'',
    }
  },
  methods: {
    // onQuantityChange(value) {
    //   this.quantity = value;
    // },
    // onChangeQuantity(item){
    //   this.idProduct = item;
    //   this.onAddItem();
    // },
      /* Commit is a method that vuex give you on it store
      *  commit take the name of the mutation you want to perform -> a name should be provided as a string
      * */
    // onRemoveItem(id){
    //   this.$store.commit('removeItem',{id});
    // },
    // onHandlerChange(data){
    //   this.$store.commit('increaseQuantity',{...data,quantity:this.quantity});
    //   console.log(data);
    // },
    // onSubmitOrder(){
    //   console.log(this.$store.state.order);
    //   createOrder(this.$store.state.order);
    //   const hide = this.$message.loading('Order in progress..', 0);
    //   setTimeout(hide, 3000);
    //   this.$store.commit('clearOrder');
    //   localStorage.clear();
    // },
    // onAddItem(){
    //   this.$store.commit('addQuantity',{id:this.idProduct,quantity:this.quantity});
    // }
  },

}
</script>
