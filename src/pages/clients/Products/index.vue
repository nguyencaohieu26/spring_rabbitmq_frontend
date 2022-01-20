<template>
  <div style="background-color: #ececec; padding: 20px;">
    <!--##### OVERLAY LOADING #####-->
    <div class="overlay" v-if="isLoading"><div class="lds-ripple"><div></div><div></div></div></div>
    <!--##### START PRODUCT BANNER #####-->
    <div class="products__banner">
      <img src="../../../assets/images/header-bg.png">
      <div class="products__banner-content">
        <h1>Products</h1>
        <router-link to="/">
          <a-icon type="home" /> Home
        </router-link><span style="color: #3a3535"> > Products</span>
      </div>
    </div>
    <!--##### START PRODUCT CONTENT-->
    <div>
      <div class="products__content">
        <!--##### START PRODUCT LIST #####-->
        <div  class="products__list">
          <div v-if="datas.length > 0" style="display: flex;justify-content: space-between;margin-bottom: 1.2rem;align-items: center">
            <p>We found <span style="color:#3BB77E">{{totalData}}</span> {{datas.length  == 1 ? "item" : "item"}} for you!</p>
            <div>
              <a-select style="width: 200px" v-model="params.sortType" placeholder="Sort by" @change="onHandlerSort">
                <a-select-option value="1">Name Ascending</a-select-option>
                <a-select-option value="0">Name Descending</a-select-option>
                <a-select-option value="2">Price Ascending</a-select-option>
                <a-select-option value="3">Price Descending</a-select-option>
              </a-select>
            </div>
          </div>
          <div v-if="datas.length > 0" style="height: 100%;display: flex;flex-direction: column;justify-content: space-between">
            <a-row :gutter="[16,16]">
              <a-col v-for="data in datas" :key ="data.id" :span="6">
                <div style="background:#ECECEC">
                  <a-card :bordered="false">
                    <div class="product__thumbnail">
                      <img :src="data.thumbnail"/>
                    </div>
                    <div class="product__content">
                      <div style="display: flex;justify-content: space-between">
                        <p style="font-family: cursive;color: #888;font-size: 13px">{{data.category_id == 1 ? "Meat"  : (data.category_id == 2 ? "Vegetable" : (data.category_id == 3 ? "Seafood" : "Fruit")) }}</p>
                        <div>
                          <a-icon type="star" theme="filled"  style="color: #FFDD00"/>
                          <a-icon type="star" theme="filled" style="color: #FFDD00"/>
                          <a-icon type="star" theme="filled" style="color: #FFDD00"/>
                        </div>
                      </div>
                      <p class="name">{{data.name}}</p>
                      <div class="product__content-action">
                        <p class="price">{{ data.price.toLocaleString('vi', {style: 'currency', currency: 'VND'}) }}</p>
                        <button class="btn__addCart" @click="addToCard(data)">
                          <a-icon type="shopping-cart" />Add</button>
                      </div>
                    </div>
                  </a-card>
                </div>
              </a-col>
            </a-row>
            <div style="margin-bottom:3rem">
              <a-pagination :total="totalData" @change="onChangePage" />
            </div>
          </div>
          <!--##### START NODATA CONTAINER #####-->
          <div v-else class="container__nodata" style="height: 100%">
            <a-icon style="font-size: 40px" type="inbox" />
            <p>No data found!</p>
          </div>
        </div>
        <!--##### START RIGHT HAND SIDE FILTER #####-->
        <div  class="product__filter">
          <!--##### START BLOCK FILTER 1 #####-->
          <div class="product__filter-1">
            <h3 class="text__underline--green text__underline--green">Product Search</h3>
            <div>
              <div id="components-form-demo-advanced-search" style="margin-bottom: 15px;margin-top: 30px">
                <a-form class="ant-advanced-search-form" @submit="handleSearch">
                  <a-row>
                    <a-col>
                      <a-form-item>
                        <a-input v-model="params.id" placeholder="Search by id..."/>
                      </a-form-item>
                    </a-col>
                    <a-col>
                      <a-form-item>
                        <a-input v-model="params.name" placeholder="Search by name..."/>
                      </a-form-item>
                    </a-col>
                    <a-col>
                      <a-form-item>
                        <a-select  @change="handleCate" v-model="params.category_id" placeholder="Select category">
                          <a-select-option v-for="cate in categories" :key="cate.id" :value="cate.id">
                            {{ cate.name }}
                          </a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <a-row>
                    <a-col :style="{ textAlign: 'right' }">
                      <a-button type="primary" html-type="submit">Search</a-button>
                      <a-button :style="{ marginLeft: '8px' }" @click="handleReset">Clear</a-button>
                    </a-col>
                  </a-row>
                </a-form>
              </div>
            </div>
          </div>
          <!--##### START BLOCK FILTER 2 #####-->
          <div class="product__filter-2">
              <h3 class="text__underline--green text__underline--green">Fill by price</h3>
              <div class="product__filter-price">
                <a-slider
                    range :default-value="[0, 140]"
                    :max = 1000
                    :tooltip-visible="true"
                    @change="onPriceChange"
                    @afterChange="onPriceAfterChange"
                />
              </div>
              <div class="product__filter-3" style="margin-top:20px">
                <h3>Items</h3>
                <a-checkbox-group
                    v-model="value"
                    name="checkboxgroup"
                    :options="plainOptions"
                    @change="onChangeCheckbox"
                />
                <button class="btn__filter">
                  <span class="move">
                    <a-icon type="filter" />
                    <span>Filter</span>
                  </span>
                </button>
              </div>
          </div>
        <!--##### END BLOCK FILTER 2 #####-->
          <!--##### START NEW PRODUCTS #####-->
          <div class="new__products">
            <h3 class="text__underline--green text__underline--green">New Products</h3>
            <div v-for="product in newProductsData" :key ="product.name" class="new__products-item">
              <div><img width="80px" :src="product.imgURL"/></div>
              <div>
                <router-link :to="product.urlLink">
                  <p>{{product.name}}</p>
                </router-link>
                <p>{{product.price.toLocaleString('vi', {style: 'currency', currency: 'VND'})}}</p>
                <div>
                  <a-icon type="star" theme="filled"  style="color: #FFDD00"/>
                  <a-icon type="star" theme="filled" style="color: #FFDD00"/>
                  <a-icon type="star" theme="filled" style="color: #FFDD00"/>
                </div>
              </div>
            </div>
          </div>
        <!--#### END NEW PRODUCTS #####-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LayoutDefault from "@/layouts/LayoutDefault";
import {getProducts} from "@/pages/clients/Products/service";
import {getCategories} from "@/pages/clients/Category/service";

const plainOptions = ['Chicken', 'Beef', 'Duck','Goat','Orange','Apple','Banana','Crab','Lobster'];
const params ={
  name:'',
  id:'',
  sortType:undefined,
  page:1,
  minPrice:undefined,
  maxPrice:undefined,
  category_id:undefined
}
const newProductsData = [
  {
    imgURL: "https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
    name:'Mango Chia Pudding',
    price:30,
    urlLink:'/products'
  },
  {
    imgURL: "https://images.unsplash.com/photo-1632151944296-033b364f44b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    name:'Watermelon Popsicles',
    price:23,
    urlLink:'/products'
  },
  {
    imgURL: "https://images.unsplash.com/photo-1592839971356-a9a5d258c1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    name:'Fresh Orange juice',
    price:13,
    urlLink:'/products'
  }
]
export default {
  data(){
    return{
      plainOptions,
      isLoading:false,
      datas:[],
      countNum:0,
      categories:[],
      value: [],
      orderDetails:[],
      newProductsData:newProductsData,
      params:params,
      totalData:undefined,
      dataGet:{"account_id":1,"orderDetails":[]}
    }
  },
  created() {
    this.$emit('update:layout',LayoutDefault)
    this.getData();
  },
  methods:{
    //handler for group checkbox
    onChangeCheckbox(checkedValues) {
      console.log('checked = ', checkedValues);
      console.log('value = ', this.value);
    },
    //handler for get data
    async getData(){
      try{
        this.isLoading = true;
        const {data} = await getProducts(this.params);
        this.datas = data.datas;
        const categoryGet = await getCategories();
        this.categories =  categoryGet.data.datas;
        console.log(data.pagination);
        this.totalData = data.pagination.totalItems;
        setTimeout(()=>{this.isLoading = false},500)
      }catch (e){
        console.log(e);
        setTimeout(()=>{this.isLoading = false},500)
      }
    },
    //handler for price slider
    onPriceChange(value) {
      this.params.minPrice = value[0];
      setTimeout(()=>{this.getData();},500)
      console.log(this.params);
    },
    onPriceAfterChange(value) {
      this.params.maxPrice = value[1];
      setTimeout(()=>{this.getData();},500)
      console.log(this.params);
    },
    onHandlerSort(value){
      this.params.sortType = value;
      this.getData();
    },
    //handler for change pages
    onChangePage(current){
      this.params.page = current;
      this.getData();
    },
    //handler for select category
    handleCate(cate){
      this.params.category_id = parseInt(cate)
      this.getData()
    },
    //handler action add to card
    addToCard(product){
      const listProducts = this.$store.state.order.orderDetails;
      let isExist = listProducts.find(pro => pro.id == product.id);
      if(isExist){
        this.$message.error(`The ${product.name} already added`);
        return;
      }else{
        this.$message.success(`Add successfully ${product.name} into card`)
        this.$store.state.order.orderDetails.push(product);
        localStorage.setItem('cart',JSON.stringify(this.$store.state.order));
      }

    },
    formatItemProduct(product){
      const id = product.id;
      const quantity = 1;
      const unitPrice = product.price;
      const namePro = product.name;
      const thumbnail = product.thumbnail;
      return {
        "orderDetailKey":{
          "productID":id,
        },
        name:namePro,
        thumbnail:thumbnail,
        "quantity":quantity,
        "unitPrice":unitPrice
      }
    },
    //handler search form
    handleSearch(e){
      e.preventDefault();
      this.params.page = 1;
      this.getData();
    },
    //handler reset search form
    handleReset() {
      this.params.minPrice = undefined;
      this.params.maxPrice = undefined;
      this.params.category_id = undefined;
      this.params.sortType = undefined;
      this.params.id = '';
      this.params.name = '';
      this.getData();
    },
  }
}
</script>
