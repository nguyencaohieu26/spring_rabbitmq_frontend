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
          <p>Cart</p>
          <div v-if="this.$store.state.order.orderDetails.length > 0" class="cart__container">
            <div class="cart__item-container">
              <div class="cart__item" v-for="item in this.$store.state.order.orderDetails" :key="item.id">
                <div>
                  <img width="60px" :src="item.thumbnail"/>
                </div>
                <div class="cart__item-content">
                  <p>{{item.name}}</p>
                  <p>{{item.price.toLocaleString('vi', {style: 'currency', currency: 'VND'})}}</p>
                </div>
              </div>
            </div>
            <div class="cart__actions">
              <p>Total Price <span style="color: #3BB77E;font-weight: bold">$100</span></p>
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

export default {
  data(){
    return{
    }
  },
}
</script>
<style scoped>
.header__top{
  gap: 3rem;
  display: flex;
  padding: 25px 0;
  align-items: center;
}
.header__icons-menu{
  display: flex;
}
.header__nav{
  display: flex;
  align-items: center;
  gap: 4rem;
  padding:10px 2rem;
  border: 1px solid rgba(211, 206, 206, 0.66);

}
.header__nav ul{
  gap: 40px;
  display: flex;
}
.header__nav ul li a{
  font-size: 1.1rem;
  font-weight: 600;
  color: #494949;
}
.header__nav ul li a:hover{
  color: #3BB77E;
  transition: .3s all ease;
}
.header__top .header__search{
  flex-basis: 60%;
}
.header__search form input{
  height: 3rem;
  width: 100%;
  border-radius: 3px;
  padding: 10px;
  border: 2px solid #269d26;
  outline: none;
  color: #777;
}

.header__search form input::placeholder{
  font-family: 'Poppins', sans-serif;
}
.header__icons-menu{
  gap: 1rem;
  display: flex;
  margin-left: auto;
}
.header__icons-menu i{
  color: #0a0a52;
  top: -4px;
  position: relative;
}
.header__icons-menu p{
  color: #777;
}
.nav__list-categories{
  color: white;
  padding: 10px 30px;
  border-radius: 6px;
  background: #3BB77E;
}
.nav__list-categories{
  display: flex;
  align-items: center;
  gap: 10px;
}
.button_cart,.button_account{
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>