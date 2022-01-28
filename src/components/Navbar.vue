<template>
  <div class="header">
    <div class="header__top container">
      <div class="header__logo">
        <router-link to="/">
          <img src="../assets/images/logo.svg"/>
        </router-link>
      </div>
      <div class="header__search">
        <form><input type="text" placeholder="Search for item..."></form>
      </div>
      <div class="header__icons-menu">
        <div class="button_cart">
          <p class="cart__status" v-if="cartItemCount > 0">{{cartItemCount}}</p>
          <i class="fas fa-shopping-cart" style="font-size: 1.3rem"></i>
          <p class="cart__name">Cart</p>
          <div  class="cart__container" v-if="cartItemCount > 0">
            <div class="cart__item-container" >
              <div class="cart__item" v-for="item in cart['listCartItems']" :key="item.id">
                <div><img width="80px" height="80px" :src="item.thumbnail"/></div>
                <div class="cart__item-content">
                  <div style="display: flex;align-items: center">
                    <p class="cart__product-name">{{item.productName}}</p>
                    <span class="cart__product-price">{{item.unitPrice.toLocaleString('vi', {style: 'currency', currency: 'VND'})}}</span>
                  </div>
                  <div style="margin-top: .5rem;display: flex;justify-content: space-between">
                    <div>
                      <a-input-number @change="updateCart(item)" size="small" id="inputNumber" v-model="item.quantity" :min="1"/>
                    </div>
                    <button class="btn__removeItem" @click="removeProduct(item.productID)">x</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart__actions">
              <p>Total Price: <span style="color: #3BB77E;font-weight: bold">${{cart.totalPrice}}</span></p>
              <div style="display: flex;gap: 10px">
                <button class="btn__checkout" >Check out</button>
                <button class="btn__clear" @click="clearCart">Clear</button>
              </div>
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
    return{}
  },
  computed:{
    cart(){
      return this.$store.state.cart;
    },
    cartItemCount(){
      return this.$store.getters.cartItemCount;
    }
  },
  mounted() {
    this.$store.dispatch('getCart');
  },
  methods: {
    removeProduct(id){
      this.$store.dispatch('removeProduct',id);
    },
    clearCart(){
      this.$store.dispatch('clearCart');
    },
    updateCart(item){
      const product = {
        "productID": item.productID,
        "productName": item.productName,
        "thumbnail": item.thumbnail,
        "unitPrice":item.unitPrice,
        "quantity":item.quantity
      }
      this.$store.dispatch('updateCart',product);
    }
  },
}
</script>
