<template>
  <div v-if="page">
    <b-row no-gutters>
      <b-col>
        <div class="sticky-top" style="text-align: left; background-color: white; padding: 30px 0; border-bottom: 3px solid #007bff;">
          <h2>{{page.title}}</h2>
          <br/>
          <a href="#/" style="color: #333333; cursor: pointer; margin-right: 20px;"><font-awesome-icon icon="home"/></a>
          <a @click="goToPrev" style="color: #333333; cursor: pointer; margin-right: 20px;"><font-awesome-icon icon="arrow-left"/></a>
          <a @click="goToNext" style="color: #333333; cursor: pointer;"><font-awesome-icon icon="arrow-right"/></a>
        </div>
        <br>
        <div id="markdown" v-html="markdownContent">
        </div>
      </b-col>
    </b-row>
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