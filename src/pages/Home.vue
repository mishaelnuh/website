<template>
  <div>
    <b-row no-gutters>
      <b-col id="canvasSizer">
        <div id="homeHeader">
          <div>
            <b-row no-gutters class="justify-content-md-center mt-5 mb-5 ml-3 mr-3">
              <b-col md="8" xl="6">
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
                </p>
              </b-col>
            </b-row>
          </div>
          <canvas id="headerCanvas" resize="true"></canvas>
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
import paper from "paper"

export default {
  name: "Home",
  data() {
    return {
      pages: pageData,
      paperPath: null,
      intervalHandler: null,
      pathLocation: [],
      pathVelocity: [],
      canvasWidth: 0,
      canvasHeight: 0,
      numPoints: 5,
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
  created () {
  },
  mounted() {
    this.pathLocation = []
    this.pathVelocity = []

    for (let i = 0; i <= this.numPoints; i++) {
      this.pathLocation.push(0)
      this.pathVelocity.push(Math.random())
    }

    paper.install(window)
    window.addEventListener('resize', this.initCanvas)
    this.initCanvas()
  },
  updated() {
  },
  methods: {
    clickPage(page) {
      this.$router.push('/page/' + page.id)
    },
    initCanvas() {
      let canvasSizer = document.getElementById('canvasSizer')
        
      document.getElementById('headerCanvas').width = canvasSizer.offsetWidth / 2
      document.getElementById('headerCanvas').height = canvasSizer.offsetHeight / 2
      this.canvasWidth = canvasSizer.offsetWidth
      this.canvasHeight = canvasSizer.offsetHeight

      clearInterval(this.intervalHandler)

      this.$nextTick(() => {
        paper.setup(document.getElementById('headerCanvas'))
        var style = getComputedStyle(document.body)
        var primaryColor = style.getPropertyValue('--secondary')

        this.paperPath = new paper.Path();
        this.paperPath.fillColor = primaryColor;

        this.paperPath.segments = []
        this.paperPath.add(new paper.Point(0, 0))
        for (let i = 0; i <= this.numPoints; i++) {
          this.paperPath.add(new paper.Point(i * this.canvasWidth / this.numPoints, this.pathLocation[i]))
        }
        this.paperPath.add(new paper.Point(this.canvasWidth, 0))
        this.paperPath.smooth({ type: 'continuous' })

        clearInterval(this.intervalHandler)
        this.intervalHandler = setInterval(this.updateCanvas, 30)
      })
    },
    updateCanvas() {
      this.paperPath.segments = [];
      this.paperPath.add(new paper.Point(0, 0))
      for (let i = 0; i <= this.numPoints; i++) {
        this.pathLocation[i] += this.pathVelocity[i]
        if (this.pathLocation[i] < 0)
        {
          this.pathLocation[i] = 0
          this.pathVelocity[i] *= -1
        } else if (this.pathLocation[i] > this.canvasHeight)
        {
          this.pathLocation[i] = this.canvasHeight
          this.pathVelocity[i] *= -1
        }
        this.paperPath.add(new paper.Point(i * this.canvasWidth / this.numPoints, this.pathLocation[i]))
      }
      this.paperPath.add(new paper.Point(this.canvasWidth, 0))
      this.paperPath.smooth({ type: 'continuous' })
    }
  }
};
</script>