<template>
  <Layout>
   
      <g-image class="container mx-auto grid grid-cols-3 gap-2" src="~/assets/images/cleaning cloth.jpg"></g-image>
   
    <div class="container mx-auto">
      <h1 class="text-5xl text-center font-bold my-4 ">{{ $page.blog.title }}</h1>
      <div class="markdown" v-html="$page.blog.content"></div>
    </div>
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
    author
    thumbnail
    timeToRead
  }
}


</page-query>
<style lang="css">

.markdown p{
  margin-bottom: 10px;
  @apply text-gray-700;
}

.markdown h1, .markdown h2,.markdown h3,.markdown h4,.markdown h5{
   @apply text-gray-800;
}
.markdown h1{
  @apply text-6xl;
  @apply font-bold;
  @apply mb-4;
}

.markdown h5{
  @apply text-xl;
  @apply font-bold;
  @apply mb-2;
}
</style>
