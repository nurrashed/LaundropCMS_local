<template>
  <Layout>
    <main>
      <div class="mx-auto container bg-grey-200">
        <g-image alt="Example image" src="~/favicon.png" width="135" />

        <h1 class="text--grey text-2xl">Hello, i am the container from tailwind</h1>
        <h3 class="text-secondary text-xl">I have secodary class text color. I have xl-text property. Please see tailwind text-size.</h3>
      </div>
    </main>
    <hr class="mt-5" />
    <main class="mt-10">
      <div class="mx-auto container bg-grey-200">
        <h1 class="text-3xl font-bold">Please see different blogs for inspriation on design and layout</h1>
        <h3 class="text-xl">Layout could be something like...</h3>
        <div class="h-1/3 bg-red-300 flex items-center justify-center">
          <h3>Image</h3>
        </div>
        <div class="h-24 bg-green-300 flex items-center justify-between px-8">
          <h3>Author + image (avatar)</h3>
          <h3>Date of blog post + minutes of read</h3>
        </div>
        <div class="h-12 text-4xl text-center bg-orange-300">Title</div>
        <div class="h-1/3 bg-yellow-300 flex items-center justify-center">
          <h3>Content</h3>
        </div>
        <div class="h-1/3  flex ">
          <div class="bg-yellow-200 w-1/2 flex items-center justify-center">
            Image
          </div>
          <div class="bg-yellow-100 w-1/2 flex items-center justify-center">
            content
          </div>
        </div>
        <div class="h-1/3 bg-yellow-300 flex items-center justify-center">
          <h3>Content</h3>
        </div>
         <div class="h-1/3 bg-blue-300 flex items-center justify-center">
          <h3>Footer</h3>
        </div>
      </div>
    </main>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world! It is a fun experince to work with Jesper!! hi rashed!..Yes I also think so."
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
