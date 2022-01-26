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
          <p class="cart__status" v-if="this.cart != null && this.cart['listCartItems']">{{this.cart != null ? this.cart['listCartItems'].length :''}}</p>
          <i class="fas fa-shopping-cart" style="font-size: 1.3rem"></i>
          <p class="cart__name">Cart</p>
          <div v-if="this.cart != null && this.cart['listCartItems']" class="cart__container">
            <div class="cart__item-container">
              <div class="cart__item"  v-for="item in this.cart['listCartItems']" :key="item.productID">
                <div><img width="80px" height="80px" :src="item.thumbnail"/></div>
                <div class="cart__item-content">
                  <div style="display: flex;align-items: center">
                    <p class="cart__product-name">{{item.productName}}</p>
                    <span class="cart__product-price">{{item.unitPrice.toLocaleString('vi', {style: 'currency', currency: 'VND'})}}</span>
                  </div>
                  <div style="margin-top: .5rem;display: flex;justify-content: space-between">
                    <div @click="updateCartItem(item)">
                      <a-input-number size="small" id="inputNumber" @change="onChangeValueInput" :defaultValue="item.quantity" :min="1"/>
                    </div>
                  <button class="btn__removeItem" @click="removeItemOutCart(item)">x</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart__actions">
              <p>Total Price: <span style="color: #3BB77E;font-weight: bold">${{this.cart.totalPrice}}</span></p>
              <button class="btn__checkout">Check out</button>
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
import http from "@/config";
const access_token = 'abcde';

export default {
  data(){
    return{
      quantity:0,
      cart:[],
    }
  },
  created() {
    this.getCart();
  },
  methods: {
    async getCart(){
      const {data} = await http.get(`cart/getListItem?access_token=${access_token}`)
      this.cart = data.datas[0];
      console.log(this.cart);
    },

    removeItemOutCart(product){
      async function removeItem(){
        await http.get(`/cart/removeCartItem/${product.productID}?access_token=${access_token}`);
      }
      removeItem();
      setTimeout(()=>{
        this.getCart();
        this.$message.success(`Remove ${product.productName} successfully`);
      },400);
    },
    onChangeValueInput(value){
      this.quantity = value;
    },
    updateCartItem(item){
      const pro = {
        "productID": item.productID,
        "productName": item.productName,
        "thumbnail": item.thumbnail,
        "unitPrice":item.unitPrice,
        "quantity":this.quantity
      }
      async function update(){
        await http.post(`/cart/update?access_token=${access_token}`,pro);
      }
      update();
      setTimeout(()=>{
        this.getCart();
      },400);
    }

  },

}
</script>
