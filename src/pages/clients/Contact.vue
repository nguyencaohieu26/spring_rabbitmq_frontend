<template>
  <div class="main__contact">
    <div class=" container-custom">
      <h4>How can help you?</h4>
      <div class="contact-top">
        <div class="left">
          <h3>Let us know how we can help you</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div class="right">
          <div>
            <h6>01. Visit Feedback</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div>
            <h6>02. Employer Services</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div>
            <h6>03. Billing Inquiries</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div>
            <h6>04. General Inquires</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-map">
      <div class="contact-map-container">
        <img width="100%" src="https://1.bp.blogspot.com/-HdNHJlsmXds/XvumdRYDavI/AAAAAAAAKlM/D3z9u12AQRIFs44d8OeXoXmjOSg_ank9gCK4BGAsYHg/s1870/Screen%2BShot%2B2020-06-30%2Bat%2B4.14.29%2BPM.png"/>
      </div>
      <div class="container-custom contact-map-info">
        <div v-for="item in dataPlaceLocation" :key="item.title">
          <h4>{{item.title}}</h4>
          <div>
            <ul>
              <li>{{item.line1}}</li>
              <li>{{item.line2}}</li>
              <li>{{item.line3}}</li>
              <li>{{item.line4}}</li>
            </ul>
            <router-link class="btn-view-map" to="/contact"> <i class="fa-solid fa-map-pin"></i>{{item.buttonName}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-form container-custom">
      <div>
        <h4>Contact form</h4>
        <h5>Drop Us A Line</h5>
        <p>Your email address will not be published. Required fields are marked *</p>
        <template>
          <a-form :form="form" @submit.prevent="handleSubmit">
            <a-form-item  >
              <a-input
                  placeholder="Enter first name"
                  v-decorator="['firstname', { rules: [{ required: true, message: 'Please input your firstname!' }] }]"
              />
            </a-form-item>
            <a-form-item >
              <a-input
                  placeholder="Enter last name"
                  v-decorator="['lastname', { rules: [{ required: true, message: 'Please input your lastname!' }] }]"
              />
            </a-form-item>
            <a-form-item >
              <a-input
                  placeholder="Enter your phone"
                  v-decorator="['phone', { rules: [{ required: true, message: 'Please input your phone!' }] }]"
              />
            </a-form-item>
            <a-form-item >
              <a-input
                  placeholder="Enter your subject"
                  v-decorator="['subject', { rules: [{ required: true, message: 'Please input your subject!' }] }]"
              />
            </a-form-item>
            <a-form-item>
              <div>
                <a-textarea
                    placeholder="Message" allow-clear @change="onChange"
                    v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
                />
              </div>
            </a-form-item>
            <a-form-item>
              <a-button  html-type="submit">
                Submit
              </a-button>
            </a-form-item>
          </a-form>
        </template>
      </div>
      <div class="img">
        <img width="100%" src="imagesFile/contact-img.jpg">
      </div>
    </div>
  </div>
</template>
<script>
import LayoutDefault from "@/layouts/LayoutDefault";
let dataLocation = [
  {
    title: 'Office',
    line1: '205 North Michigan Avenue, Suite 810',
    line2: 'Chicago, 60601, USA',
    line3: 'Phone: (123) 456-1202',
    line4: 'Email: contact@Evara.com',
    buttonName: 'View map'
  },{
    title: 'Studio',
    line1: '4583 Conifer Drive',
    line2: 'Chicago, 60601, USA',
    line3: 'Phone: (123) 456-7890',
    line4: 'Email: contact@Evara.com',
    buttonName: 'View map'
  },{
    title: 'Shop',
    line1: '274 Clair Street',
    line2: 'Pennsylvania, 60602, USA',
    line3: 'Phone: (123) 456-7999',
    line4: 'Email: support@gmail.com',
    buttonName: 'View map'
  },
]
export default {
  data(){
    return{
      dataPlaceLocation:dataLocation,
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods:{
    handleSubmit(){
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    onChange(e) {
      console.log(e);
    },
  },
  created() {
    this.$emit('update:layout',LayoutDefault)
  }
}
</script>