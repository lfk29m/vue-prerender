<template>
  <div>
    <LayoutHeader />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  components: {
    LayoutHeader: () => import("./header.vue"),
    LayoutFooter: () => import("./footer.vue"),
  },
};
</script>