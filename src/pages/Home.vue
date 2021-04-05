<template>
  <div>
    <b-row no-gutters id="homeHeader" v-show="showHeader">
      <b-col lg="12">
        <div ref="homeHeader">
          <h1>Mishael Nuh</h1>
          <p>
            I am a PhD candidate in the Department of Engineering at the University of Cambridge under the supervision of Dr. John Orr, working on the reuse of concrete components. My interest lies in the application of optimisation and automation to concrete structures to minimise the embodied carbon of our built environment.
            <br/>
            <br/>
            Before joining the University of Cambridge, I graduated from the Engineering Science undergraduate program at the University of Toronto with a 4.0 cGPA. I have also worked at Arup as both a structural engineering intern and a software development intern.
            <br/>
            <br/>
            <font-awesome-icon icon="globe-americas"/> Cambridge, UK
            <br/>
              <font-awesome-icon icon="coffee"/> coffee addict | 
              <font-awesome-icon icon="pen-fancy"/> fountain pen collector | 
              <font-awesome-icon icon="dog"/> dog obsessed
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row class="sticky-top contentHeader" ref="portfolioHeader">
      <b-col>
        <h1>Portfolio</h1>
        <div id="filterContainer">
          <b-badge :variant="filteredTags.includes(t) ? 'highlight' : 'light'" v-for="t in tags" :key="t" class="mr-2 mb-2" @click="setTag(t)">{{t}}</b-badge>
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters ref="portfolioSelector">
      <b-col id="portfolioSelectorContainer">
        <b-row no-gutters id="portfolioSelector">
          <b-col :md="p.width" v-for="p in filteredPages" :key="p.id">
              <b-card class="hoverCard" style="height: 100%;" img-top :img-src="p.image" @click="clickPage(p)">
                <b-card-body style="text-align: left;">
                  <b-card-text>
                    <h3>{{p.title}}</h3>
                    <div v-if="p.tags">
                      <b-badge :variant="filteredTags.includes(t) ? 'highlight' : 'light'" v-for="t in p.tags.sort()" :key="t" class="mr-2 mb-2">{{t}}</b-badge>
                    </div>
                    <br/>
                    {{p.shortDesc}}
                  </b-card-text>
                  
                </b-card-body>
              </b-card>
          </b-col>
          <b-col v-if="filteredPages.length === 0" style="text-align: center;">
            no matches
          </b-col>
        </b-row>
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
      scrollThreshold: 0,
      pages: pageData,
      showHeader: true,
      filteredTags: []
    };
  },
  computed: {
    filteredPages() {
      var filteredPages = JSON.parse(JSON.stringify(this.pages))
      
      if (this.filteredTags.length > 0) {
        console.log(this.filteredTags)
        filteredPages = filteredPages.filter(p => 
          this.filteredTags.every(t => p.tags.includes(t))
        )
      }
      
      var currAllowance = 12
      const widthRange = [4, 6]

      filteredPages.forEach(p => {
        p.width = Math.floor(Math.random()*(widthRange[1] - widthRange[0])) + widthRange[0]
        if (currAllowance - p.width < widthRange[0]) {
          p.width = currAllowance
          currAllowance = 12
        } else {
          currAllowance -= p.width
        }
      })

      return filteredPages
    },
    tags() {
      var tags = []
      this.pages.forEach(p => {
        tags.push(...p.tags)
      })
      var uniqueTags = [...new Set(tags)]
      return uniqueTags.sort()
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
    handleScroll() {
      const homeHeaderTop = this.$refs.homeHeader.getBoundingClientRect().top
      const portfolioTop = this.$refs.portfolioHeader.getBoundingClientRect().top

      if (!this.showHeader) {
        this.showHeader = this.scrollThreshold < portfolioTop
      } else {
        this.showHeader = homeHeaderTop < portfolioTop
        this.scrollThreshold = homeHeaderTop
      }
    },
    setTag(tag) {
      if (this.filteredTags.includes(tag)) {
        this.filteredTags.splice(this.filteredTags.indexOf(tag), 1)
      } else {
        this.filteredTags.push(tag)
      }
      const portfolioHeaderBounds = this.$refs.portfolioHeader.getBoundingClientRect()
      if (portfolioHeaderBounds.top === 0) {
        this.$refs.portfolioSelector.scrollIntoView(true)
        window.scrollBy(0, - portfolioHeaderBounds.height + 1)
      }
    }
  }
};
</script>