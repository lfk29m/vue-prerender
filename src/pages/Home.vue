<template>
  <Layout>
    <div>{{ name }}</div>
  </Layout>
</template>

<script>
export default {
  components: {
    Layout: () => import("@/layout/layout.vue"),
  },
  data: ()=>({
    name: 'HHHH'
  }),
};
</script>