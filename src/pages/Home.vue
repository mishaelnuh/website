<template>
  <div>
    <b-row no-gutters>
      <b-col xs="12">
        <div class="homeHeader">
          <h1>Mishael Nuh</h1>
          <p>
            Hello there! I am an Engineering Science student majoring in Infrastructure Engineering at the University of Toronto interested in the interplay between digital technologies and structural engineering. This website is aimed at showcasing some of my work. Some of them are serious and others not so much.
            <br/>
            <br/>
            <font-awesome-icon icon="globe-americas"/> Toronto, Canada
            <br/>
              <font-awesome-icon icon="coffee"/> coffee addict | 
              <font-awesome-icon icon="pen-fancy"/> fountain pen collector | 
              <font-awesome-icon icon="dog"/> dog lover
            <br/>
            <br/>
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col md="6" lg="4" xl="4" v-for="p in pages" :key="p.id">
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
    };
  },
  computed: {
    groupedPages() {
      let grouped = []
      let start = 0
      for (let i = start; i < this.pages.length; i += 3) {
        if (i + 3 > this.pages.length)
          grouped.push(this.pages.slice(i, i + this.pages.length % 3))
        else
          grouped.push(this.pages.slice(i, i + 3))
      }
      return grouped
    },
  },
  mounted() {},
  methods: {
    clickPage(page) {
      this.$router.push('/page/' + page.id)
    },
  }
};
</script>