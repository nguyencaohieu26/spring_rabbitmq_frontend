<template>
  <div class="LayoutDefault">
      <!--   START NAVBAR   -->
       <Navbar/>
      <!--   START MAIN  -->
      <main class="LayoutDefault_main"><slot/></main>
      <!--    -->
      <div class="LayoutDefault_sendEmail">
        <div style="height: 100%" class="LayoutDefault_sendEmail__theme">
          <img class="image1" src="/imagesFile/footer_bg.png"/>
          <img class="image2" src="/imagesFile/banner-9.png"/>
        </div>
      </div>
      <!--##### START GUARANTEE #####-->
      <div class="LayoutDefault__guarantee">
        <div class="LayoutDefault__guarantee-item" v-for="item in servicesCommit" :key="item.name">
            <div>
              <img v-bind:src="item.iconLink"/>
            </div>
          <div>
            <h3>{{item.name}}</h3>
            <p>{{item.des}}</p>
          </div>
        </div>
      </div>
      <!-- START FOOTER  -->
      <footer class="LayoutDefault_footer">
        <!--##### START FOOTER TOP-->
         <div class="LayoutDefault_footer__top">
            <div class="LayoutDefault_footer__top-container">
              <!--##### START FOOTER LOGO #####-->
              <div class="footer__logo">
                <router-link to="/">
                  <img src="../assets/images/logo.svg"/>
                </router-link>
                <p>Awesome grocery store website</p>
                <ul>
                  <li><i class="fas fa-map-pin"></i>  <strong>Address: </strong>
                    87 - 89 Khuat Duy Tien, Thanh Xuan, Ha Noi
                  </li>
                  <li><i class="fas fa-phone-volume"></i>  <strong>Call us: </strong>
                    +1900 6666
                  </li>
                  <li><i class="fas fa-envelope-square"></i>  <strong>Email: </strong> support@gmail.com</li>
                  <li><i class="far fa-clock"></i> <strong>Hours:  </strong>10:00 - 18:00, Monday - Saturday</li>
                </ul>
              </div>
              <!--##### START COMPANY #####-->
               <div>
                 <h3>Company</h3>
                 <ul class="footer__nav">
                   <li><router-link to="#">About us</router-link></li>
                   <li><router-link to="#">Delivery Information</router-link></li>
                   <li><router-link to="#">Privacy Policy</router-link></li>
                   <li><router-link to="#">Terms & Conditions</router-link></li>
                   <li><router-link to="#">Contact Us</router-link></li>
                   <li><router-link to="#">Support Center</router-link></li>
                   <li><router-link to="#">Careers</router-link></li>
                 </ul>
               </div>
               <!--##### START ACCOUNT #####-->
               <div>
                 <h3>Account</h3>
                 <ul class="footer__nav">
                  <li><router-link to="#">Sign In</router-link></li>
                   <li><router-link to="#">View Cart</router-link></li>
                   <li><router-link to="#">My Wishlist</router-link></li>
                   <li><router-link to="#">Track My Order</router-link></li>
                   <li><router-link to="#">Help Ticket</router-link></li>
                 </ul>
               </div>
               <!--##### START CORPORATE #####-->
               <div>
                 <h3>Corporate</h3>
                 <ul class="footer__nav">
                   <li><router-link to="#">Become A Vendor</router-link></li>
                   <li><router-link to="#">Affiliate Program</router-link></li>
                   <li><router-link to="#">Farm Business</router-link></li>
                   <li><router-link to="#">Farm Careers</router-link></li>
                   <li><router-link to="#">Our Suppliers</router-link></li>
                 </ul>
               </div>
               <!--##### START POPULAR #####-->
               <div>
                 <h3>Popular</h3>
                 <ul class="footer__nav">
                   <li><router-link to="#">Milk & Flavoured Milk</router-link></li>
                   <li><router-link to="#">Butter and Margarine</router-link></li>
                   <li><router-link to="#">Eggs Substitutes</router-link></li>
                   <li><router-link to="#">Marmalades</router-link></li>
                   <li><router-link to="#">Sour Cream and Dips</router-link></li>
                   <li><router-link to="#">Cheese</router-link></li>
                 </ul>
               </div>
            </div>
         </div>
        <!--##### START FOOTER MIDDLE #####-->
        <div class="footer__middle" style="padding:0 1.5rem 1.5rem">
          <h3 style="font-size: 22px">INSTALL APP</h3>
          <div>
            <h4 style="font-weight: 400">From App Store or Google Play</h4>
            <div style="display: flex">
              <div class="method__pay" style="margin-right: 20px"><img width="120px" src="../assets/images/app-store.jpg"/></div>
              <div class="method__pay"><img width="120px" src="../assets/images/google-play.jpg"/></div>
            </div>
          </div>
          <div style="margin-top: 1.5rem">
            <h4 style="font-weight: 400">Secured Payment Gateways</h4>
            <div><img src="../assets/images/payment-method.png"></div>
          </div>
        </div>
        <!--##### START FOOTER BOTTOM #####-->
         <div class="LayoutDefault_footer__bottom">
           <div>
            <p>&copy; <span style="color: #3BB77E">Nest</span> Grocery Store</p>
            <p>Made with love. All rights reserved!</p>
           </div>
           <div class="footer__hotline">
             <i class="fas fa-phone-volume fa-2x"></i>
             <p>1900 - 6666</p>
           </div>
           <div class="footer__bottom-socials">
             <p style="padding-top: 6px;">Follow Us</p>
             <ul style="margin-left: 10px">
               <li><router-link to="#">
                 <i class="fab fa-facebook-f"></i>
               </router-link></li>
               <li><router-link to="#">
                 <i class="fab fa-twitter"></i>
               </router-link></li>
               <li>
                 <router-link to="#">
                   <i class="fab fa-instagram"></i>
                 </router-link>
               </li>
               <li>
                 <router-link to="#">
                   <i class="fab fa-pinterest-p"></i>
                 </router-link>
               </li>
               <li>
                 <router-link to="#">
                   <i class="fab fa-youtube">
                   </i></router-link>
               </li>
             </ul>
           </div>
         </div>
      </footer>
      <!--#### START BACK TO TOP #####-->
      <div>
        <a-back-top :visibilityHeight="30">
          <div class="ant-back-top-inner">UP</div>
        </a-back-top>
      </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
const servicesCommit = [
  {
    name:'Best prices & offers',
    des:'Orders 50đ or more',
    iconLink:'imagesFile/icon-commit.svg',
  },
  {
    name:'Free delivery',
    des:'24/7 amazing services',
    iconLink:'imagesFile/icon-commit2.svg',
  },
  {
    name:'Great daily deal',
    des:'When you sign up',
    iconLink:'imagesFile/icon-commit3.svg',
  },
  {
    name:'Wide assortment',
    des:'Mega discounts',
    iconLink:'imagesFile/icon-commit4.svg',
  },
  {
    name:'Easy returns',
    des:'Within 30 days',
    iconLink:'imagesFile/icon-commit5.svg',
  },
]
export default {
  components: {Navbar},
  data(){
    return{
      servicesCommit:servicesCommit,
    }
  }
}
</script>
