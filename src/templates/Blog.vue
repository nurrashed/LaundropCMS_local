<template>
  <Layout>
    <div class="h-1/3 w-full bg-red-300"></div>
    <div class="container mx-auto">
      <h1 class="text-5xl text-center font-bold my-4 ">{{ $page.blog.title }}</h1>
      <div v-html="$page.blog.content"></div>
    </div>
    <!-- <pre>{{ $page }}</pre> -->
  </Layout>
</template>

<script>
export default {
  methods: {},
};
</script>

<page-query>
query($id: ID!) {
  blog(id: $id) {
    path
    title
    content
    thumbnail
    timeToRead
  }
}


</page-query>
<style lang="css" scoped></style>
