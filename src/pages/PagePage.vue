<template>
  <div v-if="page">
    <b-container style="margin: 0; padding: 0;">
      <b-row>
        <b-col :md="12" :lg="4">
          <div id="pageContent">
            <h1>{{page.title}}</h1>
            <div id="markdown" v-html="markdownContent">
            </div>
            <b-row no-gutters id="pageNav">
              <b-col>
                <a @click="goToPrev" type="button">{{this.pageIndex == 0 ? 'home' : 'previous'}}</a>
              </b-col>
              <b-col style="text-align: right;">
                <a @click="goToNext" type="button">{{this.pageIndex >= this.pages.length - 1 ? 'home' : 'next'}}</a>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col :md="12" :lg="8" style="padding-top: 70px">
          <div class="pageImageContainer mt-2" v-for="i in page.images" :key="i">
            <img class="pageImage" :src="i" :alt="i"/>
          </div>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
import pageData from "../data/pages.json"
import { marked } from "marked"

export default {
  name: 'PagePage',
  data() {
    return {
      pages: pageData,
      selectedId: '',
      markdownContent: ''
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
    window.scrollTo(0, 0);
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
        this.markdownContent = marked.parse(http.responseText)
      }
  
      console.log(this.images)
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