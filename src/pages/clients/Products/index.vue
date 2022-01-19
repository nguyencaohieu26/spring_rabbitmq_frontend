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
          <div v-if="datas.length > 0">
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
            <div style="margin-top: 1.5rem">
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
                    range :default-value="[20, 140]"
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
  page:1,
  minPrice:undefined,
  maxPrice:undefined,
  category_id:undefined
}

export default {
  data(){
    return{
      plainOptions,
      isLoading:false,
      datas:[],
      categories:[],
      value: [],
      params:params,
      totalData:undefined,
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
        this.totalData = data.pagination.totalItems;
        setTimeout(()=>{this.isLoading = false},500)
      }catch (e){
        console.log(e);
      }
    },
    //handler for price slider
    onPriceChange(value) {
      this.params.minPrice = value[0];
      setTimeout(()=>{this.getData();},500)
    },
    onPriceAfterChange(value) {
      this.params.minPrice = value[1];
      setTimeout(()=>{this.getData();},500)
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
      console.log(product);
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
      this.params.id = '';
      this.params.name = '';
      this.getData();
    },
  }
}
</script>
