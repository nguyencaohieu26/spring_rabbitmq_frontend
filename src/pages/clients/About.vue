<template>
  <div class="main__about container">
    <div class="main__about-top container-custom">
      <div>
        <img width="100%" src="imagesFile/about-img.png" alt="blog-img"/>
      </div>
      <div>
        <h4>Welcome to Nest</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
        </p>
        <p>
          Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
        </p>
      </div>
    </div>
    <div class="about-provide container-custom">
      <h4>What We Provide?</h4>
      <div class="wave-img"><img width="120px" src="imagesFile/wave.png" alt="wave"/></div>
      <div class="about-provide-container">
        <div v-for="item in provideService" :key="item.title">
          <div>
            <img width="90px" :alt="item.title" :src="item.image"/>
          </div>
          <div>
              <h6>{{item.name}}</h6>
              <p>{{item.content}}</p>
              <router-link :to="item.linkURL">Read more</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="about-performance container-custom">
      <div class="about-performance-top">
        <div>
          <div>
            <img width="100%" src="imagesFile/about-img-performance.png" alt="about-performance-image"/>
          </div>
        </div>
        <div>
          <h4>Our performance</h4>
          <h3>Your Partner for e-commerce grocery solution</h3>
          <p>
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          </p>
          <p>
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>
      <div class="about-performance-bottom">
        <div>
          <h5>Who are we</h5>
          <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
        </div>
        <div>
          <h5>Our history</h5>
          <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
        </div>
        <div>
          <h5>Our mission</h5>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
          </p>
        </div>
      </div>
    </div>
    <div class="about-count-data" :style="{backgroundImage:`url(${image})`}">
      <div class="content">
        <div>
          <p class="number">12+</p>
          <h6>Glorious years</h6>
        </div>
        <div>
          <p class="number">36+</p>
          <h6>Happy clients</h6>
        </div><div>
        <p class="number">57+</p>
        <h6>Projects complete</h6>
      </div><div>
        <p class="number">24+</p>
        <h6>Team advisor</h6>
      </div><div>
        <p class="number">26+</p>
        <h6>Products Sale</h6>
      </div>
      </div>
    </div>
    <div class="about-our-team container-custom">
        <h4>What We Provide?</h4>
        <div class="wave-img"><img width="120px" src="imagesFile/wave.png" alt="wave"/></div>
      <div class="about-our-team-container">
        <div>
          <p class="green">Our Team</p>
          <h5>Meet Our Expert Team</h5>
          <p>
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
          </p>
          <p>
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
          </p>
          <router-link to="/">View All Members</router-link>
        </div>
        <div class="team-info-container">
            <div>
              <img alt="out-team-img1" width="100%" height="100%" src="imagesFile/out-team-img1.png"/>
              <div class="info-team">
                <p class="team-name">H.Merinda</p>
                <p class="team-position">CEO & Co-Founder</p>
                <ul>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                  <li><i class="fa-brands fa-youtube-square"></i></li>
                </ul>
              </div>
            </div>
            <div>
              <img alt="out-team-img2" width="100%" height="100%" src="imagesFile/out-team-img2.png"/>
              <div class="info-team">
                <p class="team-name">Dilan Specter</p>
                <p class="team-position">Head Engineer</p>
                <ul>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                  <li><i class="fa-brands fa-youtube-square"></i></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LayoutDefault from "@/layouts/LayoutDefault";
let provideServices = [
  {
    image: `imagesFile/icon-commit.svg`,
    title: 'Best Price & Offers',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    linkURL: '/about',
  },{
    image: `imagesFile/icon-commit2.svg`,
    title: 'Wide Assortment',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    linkURL: '/about',
  },{
    image: `imagesFile/icon-commit3.svg`,
    title: 'Free Delivery',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    linkURL: '/about',
  },{
    image: `imagesFile/icon-commit4.svg`,
    title: 'Easy Returns',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    linkURL: '/about',
  },{
    image: `imagesFile/icon-commit5.svg`,
    title: '100% Satisfaction',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    linkURL: '/about',
  },{
    image: `imagesFile/icon-commit6.svg`,
    title: 'Great Daily Deal',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    linkURL: '/about',
  },
]
export default {
  data(){
    return{
      image:"imagesFile/about-count.png",
      provideService:provideServices,
    }
  },
  created() {
    this.$emit('update:layout',LayoutDefault)
  }
}
</script>