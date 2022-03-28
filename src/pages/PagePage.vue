<template>
  <div v-if="page">
    <b-container>
      <b-row no-gutters class="mt-5">
        <b-col>
          <div id="pageHeader">
            <h1>{{page.title}}</h1>
            <br/>
            <br/>
            <a class="pageNavIcon" @click="goToPrev"><font-awesome-icon icon="arrow-left"/></a>
            <a class="pageNavIcon" @click="goToNext"><font-awesome-icon icon="arrow-right"/></a>
          </div>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col>
          <div id="markdown" v-html="markdownContent">
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
      const renderer = {
        image(href, _, text) {
          var randId =  "img" + Math.floor(Math.random() * 1000000);

          return `
            <div class="pageImageContainer">
              <img class="pageImage" src="${href}" alt="${text}" type="button" data-bs-toggle="modal" data-bs-target="#${randId}">
            </div>
            <div id="${randId}" class="modal fade" tabindex="-1">
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body">
                    <img src="${href}" alt="${text}" style="width: 100%;" >
                  </div>
                </div>
              </div>
            </div>`;
        }
      };
      marked.use({ renderer })

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