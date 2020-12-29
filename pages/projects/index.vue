<template>
  <div class="container">
  <div>
    <h1>Projects</h1>
    <ol>
      <li v-for="project of projects" :key="project.slug">
        <NuxtLink :to="{ name: 'projects-slug', params: { slug: project.slug } }">
          <div>
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <p>{{ project.tags }}</p>

          </div>
        </NuxtLink>
      </li>
    </ol>
  </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
export default Vue.extend({
    layout: 'default',
    async asyncData({ $content, params }) {
      const projects = await $content('projects', params.slug)
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        projects
      }
    }
  });
</script>