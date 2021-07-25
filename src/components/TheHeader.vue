<template>
  <div class="flex justify-between items-center p-3">
    <h1 class="text-2xl font-semibold">1PodNat</h1>
    <base-button label="Sign In" @click="onClick" />
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    BaseButton,
  },
})
export default class TheHeader extends Vue {
  onClick() {
    this.$router.push("/signin");
  }
}
</script>
