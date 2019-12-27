<template>
  <div v-if="project">
    <b-container>
      <b-row>
        <b-col md='1'>
        </b-col>
        <b-col md='10'>
          <div mb-5>
            <h1 style="text-align: left;">{{project.title}}</h1>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md='1'>
        </b-col>
        <b-col md='10'>
          <br>
          <div id="markdown" v-html="markdownContent">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md='1'>
        </b-col>
        <b-col md='10'>
          <a @click="goToPrev" style="color: black; cursor: pointer; margin-right: 20px;">&lt; previous</a>
          <a @click="goToNext" style="color: black; cursor: pointer;">next &gt;</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import projData from "../data/projects.json"
import marked from "marked"

export default {
  name: "Project",
  data() {
    return {
      projects: projData,
      selectedId: '',
      markdownContent: '',
    };
  },
  computed: {
    project() {
      return this.projects.find(x => x.id === this.selectedId)
    },
    projIndex() {
      return this.projects.findIndex(x => x.id === this.selectedId)
    }
  },
  mounted() {
    if (this.$route.params.projectId)
    {
      this.selectedId = this.$route.params.projectId
      if (!this.project) {
        this.$router.push('/')
      }
      const http = new XMLHttpRequest()
      http.open('GET', this.project.content)
      http.send()
      http.onreadystatechange = () => {
        this.markdownContent = marked(http.responseText)
      }
    }
    else
      this.$router.push('/')
  },
  methods: {
    goToPrev() {
      if (this.projIndex >= 1)
        this.$router.push({ name: 'project', params: { projectId: this.projects[this.projIndex - 1].id }})
      else
        this.$router.push('/')
    },
    goToNext() {
      if (this.projIndex < this.projects.length - 1)
        this.$router.push({ name: 'project', params: { projectId: this.projects[this.projIndex + 1].id }})
      else
        this.$router.push('/')
    }
  }
};
</script>