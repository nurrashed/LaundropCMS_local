<template>
  <div class="layout">
    <header class="header">
      <nav class="flex items-center justify-between flex-wrap bg-primary p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M41.662 7.696C37.76 3.792 32.55 1.642 26.994 1.642c-5.556 0-10.764 2.15-14.668 6.054-3.903 3.905-6.053 9.115-6.053 14.671 0 5.557 2.15 10.768 6.053 14.672L26.994 51.71l14.668-14.672c8.088-8.09 8.088-21.253 0-29.343zm-26.948 2.39C17.98 6.82 22.34 5.02 26.994 5.02c4.653 0 9.014 1.799 12.28 5.064 4.111 4.114 5.72 9.793 4.838 15.137a1.855 1.855 0 00-.35.348c-2.73 3.651-7.52 4.822-11.66 2.832-2.92-1.403-5.036-3.975-8.143-5.071-4.757-1.679-10.29-.582-13.881 2.887a17.672 17.672 0 01-.427-3.85c0-4.655 1.798-9.016 5.063-12.283zm24.56 24.564L26.994 46.93 14.714 34.65a17.247 17.247 0 01-3.385-4.791c2.5-3.206 6.475-4.546 10.455-3.649 3.547.8 5.857 3.842 9.076 5.314 3.743 1.713 7.657 1.534 10.975-.14a17.37 17.37 0 01-2.561 3.266z"
              fill="#ffff"
              stroke="#ffff"
              stroke-width="1"
            />
          </svg>

          <span class="font-semibold text-xl tracking-tight">Laundrop CSS</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <g-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/">Home</g-link>
            <g-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/about">About</g-link>
            <g-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/Laundrop">Corona Crisis</g-link>
            <g-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/Custom">Custom</g-link>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >Download</a
            >
          </div>
        </div>
      </nav>
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        <g-link to="/Laundrop" class="laundrop">Corona Crisis</g-link>
      </strong>
      <strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </strong> -->
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped></style>
