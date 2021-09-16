<template>
  <Layout>
    <div>{{ name }}</div>
    <router-link :to="{name: 'second'}">second page</router-link>
  </Layout>
</template>

<script>
export default {
  components: {
    Layout: () => import("@/layout/layout.vue"),
  },
  data: () => ({
    name: "HHHH",
  }),
};
</script>