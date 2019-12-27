<template>
  <div>
    <b-container class="mb-5">
      <b-row align-h="center" class="mb-5"> 
        <b-col md='4'>
          <img src="/img/headshot.jpg" width="250" height="250" class="rounded-circle" />
        </b-col>
        <b-col md='8'>
          <br/>
          <p>My name is Mishael Nuh. I am an Engineering Science student majoring in Infrastructure Engineering at the University of Toronto interested in the interplay between digital technologies and structural engineering.</p>
          <br/>
          <p>
            <font-awesome-icon icon="coffee"/> coffee addict | 
            <font-awesome-icon icon="pen-fancy"/> fountain pen collector | 
            <font-awesome-icon icon="dog"/> lover of dogs
          </p>
        </b-col>
      </b-row>
      <b-row id="projects">
        <b-col>
          <b-row v-for="(row, index) in groupedProjects" :key="index">
            <b-col md="4" v-for="p in row" :key="p.id">
              <b-card style="height: 90%;" img-bottom :img-src="p.image" @click="clickProject(p)">
                <b-card-body style="text-align: left; padding-bottom: 40px;">
                  <b-card-text>
                    <h3>{{p.title}}</h3>
                    {{p.shortDesc}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import projData from "../data/projects.json";

export default {
  name: "Home",
  data() {
    return {
      projects: projData,
    };
  },
  computed: {
    groupedProjects() {
      let grouped = []
      let start = 0
      for (let i = start; i < this.projects.length; i += 3) {
        if (i + 3 > this.projects.length)
          grouped.push(this.projects.slice(i, i + this.projects.length % 3))
        else
          grouped.push(this.projects.slice(i, i + 3))
      }
      return grouped
    },
  },
  mounted() {},
  methods: {
    clickProject(project) {
      this.$router.push('/project/' + project.id)
    },
  }
};
</script>