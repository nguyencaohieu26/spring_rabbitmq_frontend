<template>
  <div style="background-color: #ececec; padding: 20px;">
    <!--##### OVERLAY LOADING #####-->
    <div class="overlay" v-if="isLoading"><div class="lds-ripple"><div></div><div></div></div></div>
    <!--##### START PRODUCT BANNER #####-->
    <Banner imgURL="imagesFile/header-bg.png" name="Products"/>
    <!--##### START PRODUCT CONTENT-->
    <div>
      <div class="products__content">
        <!--##### START PRODUCT LIST #####-->
        <div  class="products__list" v-if="products['datas']">
          <div style="display: flex;justify-content: space-between;margin-bottom: 1.2rem;align-items: center">
            <p>We found <span style="color:#3BB77E">{{products.pagination == undefined ? '0' : products.pagination.totalItems}}</span> items for you!</p>
            <div>
              <a-select style="width: 200px" v-model="params.sortType" placeholder="Sort by" @change="onHandlerSort">
                <a-select-option value="1">Name Ascending</a-select-option>
                <a-select-option value="0">Name Descending</a-select-option>
                <a-select-option value="2">Price Ascending</a-select-option>
                <a-select-option value="3">Price Descending</a-select-option>
              </a-select>
            </div>
          </div>
          <div v-if="products['datas'].length != 0" style="height: 100%;display: flex;flex-direction: column;justify-content: space-between">
            <a-row :gutter="[16,16]">
              <a-col v-for="data in products['datas']" :key ="data.id" :span="6">
                <div style="background:#ECECEC;border: 1px solid rgba(148,232,192,0.53)">
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
<!--                      <router-link :to="{name:'productdetail',params:{id:data.id}}" class="name">{{data.name}}</router-link>-->
                      <p class="name">{{data.name}}</p>
                      <div class="product__content-action">
                        <p class="price">{{data.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}) }}</p>
                        <button class="btn__addCart" @click="addToCard(data)">
                          <a-icon type="shopping-cart" />Add</button>
                      </div>
                    </div>
                  </a-card>
                </div>
              </a-col>
            </a-row>
            <div style="margin-bottom:3rem">
              <a-pagination :total="products.pagination == undefined ? 0 : products.pagination.totalItems" @change="onChangePage" />
            </div>
          </div>
          <!--##### START NODATA CONTAINER #####-->
          <div v-else class="container__nodata">
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
                <a-form class="ant-advanced-search-form" @submit.p.prevent="handleSearch">
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
    <router-view>
      <div>"Admin" page content</div>
    </router-view>
  </div>
</template>
<script>
import Banner from "@/components/Banner";
import LayoutDefault from "@/layouts/LayoutDefault";
const params ={
  name:'',
  id:'',
  sortType:undefined,
  page:1,
  minPrice:undefined,
  maxPrice:undefined,
  category_id:undefined
}
export default {
  components: {Banner},
  data(){
    return{
      isLoading:false,
      value: [],
      params:params,
    }
  },
  mounted() {
    this.$store.dispatch('getProducts',this.params);
    this.$store.dispatch('getCategories');
  },
  computed:{
    newProductsData(){
      return this.$store.state.newProductsData;
    },
    plainOptions(){
      return this.$store.state.plainOptions;
    },
    products(){
      return this.$store.state.products;
    },
    categories(){
      return this.$store.state.categories;
    },
  },
  created() {
    this.$emit('update:layout',LayoutDefault)
  },
  methods:{
    onChangeCheckbox(checkedValues) {
      console.log('checked = ', checkedValues);
    },
    onPriceChange(value) {
      this.params.minPrice = value[0];
      this.$store.dispatch('getProducts',this.params);
    },
    onPriceAfterChange(value) {
      this.params.maxPrice = value[1];
      this.$store.dispatch('getProducts',this.params);
    },
    onHandlerSort(value){
      this.params.sortType = value;
      this.$store.dispatch('getProducts',this.params);
    },
    onChangePage(current){
      this.params.page = current;
      this.$store.dispatch('getProducts',this.params);
    },
    handleCate(cate){
      this.params.category_id = parseInt(cate)
      this.$store.dispatch('getProducts',this.params);
    },
    addToCard(product){
      const productConvert = this.formatItemProduct(product)
      this.$message.success(`Add ${productConvert.productName} successful`);
      this.$store.dispatch('addProductToCart',{product:productConvert});
    },
    formatItemProduct(product){
      const id = product.id;
      const quantity = 1;
      const unitPrice = product.price;
      const namePro = product.name;
      const thumbnail = product.thumbnail;
      return {
        "id":1,
        "productID":id,
        "productName":namePro,
        "thumbnail":thumbnail,
        "quantity":quantity,
        "unitPrice":unitPrice
      }
    },
    handleSearch(){
      this.params.page = 1;
      this.$store.dispatch('getProducts',this.params);
    },
    handleReset() {
      this.params.minPrice = undefined;
      this.params.maxPrice = undefined;
      this.params.category_id = undefined;
      this.params.sortType = undefined;
      this.params.id = '';
      this.params.name = '';
      this.$store.dispatch('getProducts',this.params);
    },
  }
}
</script>
