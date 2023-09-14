<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article class="p-3 container mx-auto">
        <h1 class="font-bold">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
        <div v-if="doc.libraries.includes('katex')">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.css"
            integrity="sha512-h7nl+xz8wgDlNM4NqKEM4F1NkIRS17M9+uJwIGwuo8vGqIl4BhuCKdxjWEINm+xyrUjNCnK5dCrhM0sj+wTIXw=="
            crossorigin="anonymous" />
        </div>        
      </article>
    </ContentDoc>
  </main>
</template>
