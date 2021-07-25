<template>
  <div class="flex flex-col justify-evenly items-stretch h-screen font-sans">
    <the-header class="h-20" />
    <div class="bg-blue-300 flex-grow">
      <router-view />
    </div>
    <the-footer class="bg-green-300 h-28" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import Home from "@/views/Home.vue";

@Options({
  components: {
    TheHeader,
    TheFooter,
    Home,
  },
})
export default class App extends Vue {}
</script>
