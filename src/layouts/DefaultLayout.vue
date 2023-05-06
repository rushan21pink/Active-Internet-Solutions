<template>
  <div class="pb-8">
    <RouterView v-slot="{ Component: page }" class="px-5 container mx-auto">
      <Transition>
        <Component :is="page" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
