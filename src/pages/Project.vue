<template>
  <div v-if="project">
    <b-container>
      <b-row> 
        <b-col>
          <div mb-5>
            <h1 style="text-align: left;">{{project.title}}</h1>
            <p style="text-align: left;">{{project.shortDesc}}</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <br>
          <p style="text-align: left;">
            {{project.content}}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import projData from "../data/projects.json";

export default {
  name: "Project",
  data() {
    return {
      projects: projData,
      selectedId: '',
      showPopup: false,
    };
  },
  computed: {
    project() {
      return this.projects.find(x => x.id === this.selectedId)
    }
  },
  mounted() {
    if (this.$route.params.projectId)
    {
      this.selectedId = this.$route.params.projectId
      if (!this.project) {
        this.$router.replace('/')
      }
    }
    else
      this.$router.replace('/')
  },
  methods: {
  }
};
</script>