<template>
  <div v-if="page">
    <b-container>
      <b-row>
        <b-col md='1'>
        </b-col>
        <b-col md='10'>
          <div mb-5>
            <h2 style="text-align: left;">{{page.title}}</h2>
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
import pageData from "../data/pages.json"
import marked from "marked"

export default {
  name: "Page",
  data() {
    return {
      pages: pageData,
      selectedId: '',
      markdownContent: '',
    };
  },
  computed: {
    page() {
      return this.pages.find(x => x.id === this.selectedId)
    },
    pageIndex() {
      return this.pages.findIndex(x => x.id === this.selectedId)
    }
  },
  mounted() {
    if (this.$route.params.pageId)
    {
      this.selectedId = this.$route.params.pageId
      if (!this.page) {
        this.$router.push('/')
      }
      const http = new XMLHttpRequest()
      http.open('GET', this.page.content)
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
      if (this.pageIndex >= 1)
        this.$router.push({ name: 'page', params: { pageId: this.pages[this.pageIndex - 1].id }})
      else
        this.$router.push('/')
    },
    goToNext() {
      if (this.pageIndex < this.pages.length - 1)
        this.$router.push({ name: 'page', params: { pageId: this.pages[this.pageIndex + 1].id }})
      else
        this.$router.push('/')
    }
  }
};
</script>