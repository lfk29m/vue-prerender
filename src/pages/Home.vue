<template>
  <div>
    <Layout>
      <div>{{ name }}</div>
    </Layout>
    <p>PPPPP</p>
  </div>
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