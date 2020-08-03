<template>
  <div>
    <b-row no-gutters style="position: fixed" id="homeHeader" v-show="showHeader">
      <b-col xs="10" sm="8" align-self="center">
        <div id="homeHeaderContent">
          <h1>mishael nuh</h1>
          <p>
            Hello there! I am an Engineering Science student majoring in Infrastructure Engineering at the University of Toronto interested in the interplay between digital technologies and structural engineering. This website is aimed at showcasing some of my work. Some of them are serious and others not so much.
            <br/>
            <br/>
            <font-awesome-icon icon="globe-americas"/> Toronto, Canada
            <br/>
              <font-awesome-icon icon="coffee"/> coffee addict | 
              <font-awesome-icon icon="pen-fancy"/> fountain pen collector | 
              <font-awesome-icon icon="dog"/> dog lover
          </p>
          <br/>
          <div style="width: 100%; text-align: center; background-color: yellow;">
          </div>
        </div>
        <div style="text-align: center;" class="mt-5">
          <div class="chevron"></div>
          <br/>
          scroll
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters id="homeHeaderSpacer">
    </b-row>
    <b-row class="py-3 pl-5" ref="portfolioHeader" style="background-color: white;">
      <b-col>
        <h1>portfolio</h1>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col :md="p.width" v-for="p in filteredPages" :key="p.id">
          <b-card class="hoverCard" style="height: 100%;" img-bottom :img-src="p.image" @click="clickPage(p)">
            <b-card-body style="text-align: left;">
              <b-card-text>
                <h3>{{p.title}}</h3>
                {{p.shortDesc}}
              </b-card-text>
            </b-card-body>
          </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import pageData from "../data/pages.json";

export default {
  name: "Home",
  data() {
    return {
      pages: pageData,
      showHeader: true,
    };
  },
  computed: {
    filteredPages() {
      var filteredPages = JSON.parse(JSON.stringify(this.pages))

      var currAllowance = 12
      const widthRange = [3, 5]

      filteredPages.forEach((p, ) => {
        p.width = Math.floor(Math.random()*(widthRange[1] - widthRange[0])) + widthRange[0]
        if (currAllowance - p.width < widthRange[0]) {
          p.width = currAllowance
          currAllowance = 12
        } else {
          currAllowance -= p.width
        }
      })

      return filteredPages
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  updated() {
  },
  methods: {
    clickPage(page) {
      this.$router.push('/page/' + page.id)
    },
    handleScroll () {
      const portfolioTop = this.$refs.portfolioHeader.getBoundingClientRect().top

      this.showHeader = portfolioTop > 0
    }
  }
};
</script>