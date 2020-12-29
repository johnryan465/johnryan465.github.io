<template>
    <v-app-bar
      app
      dense
      color=var(--colour-2)
    >
        <v-app-bar-title>johnryan.tech
          <v-icon
            medium
          >mdi-android-studio</v-icon>
        </v-app-bar-title>
        
        <v-spacer></v-spacer>

        <v-btn
          v-for="link in links"
          :key="link[0]"
          :to="link[1]"
          text
        >
          {{ link[0] }}
        </v-btn>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      links: [
        ['Home','/'],
        ['About', '/about'],
        ['Posts', '/posts'],
        ['Projects', '/projects'],
      ],
    }),
  }
</script>