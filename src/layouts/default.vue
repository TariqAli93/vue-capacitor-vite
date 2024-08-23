<template>
  <div class="default-layout">
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <component :is="Component" :key="route" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import uniqueRoutes from "@/plugins/routes";
import { ref } from "vue";

const routes = ref(uniqueRoutes().sort((a, b) => a.meta.order - b.meta.order));
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
