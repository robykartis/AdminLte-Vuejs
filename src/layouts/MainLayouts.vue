<template>
  <div class="wrapper">
    <!-- Navbar -->
    <include-navbar />
    <!-- End Navbar -->

    <!-- Sidebar -->
    <include-sidebar />
    <!-- End Sidebar -->

    <!-- View Page -->
    <div class="content-wrapper">
      <router-view />
    </div>
    <!-- end View Page -->

    <include-footer />

    <aside class="control-sidebar control-sidebar-dark"></aside>
  </div>
</template>

<script>
import IncludeNavbar from "./include/IncludeNavbar.vue";
import IncludeSidebar from "./include/IncludeSidebar.vue";
import IncludeFooter from "./include/IncludeFooter.vue";
export default {
  name: "MainLayouts",
  components: {
    IncludeNavbar,
    IncludeSidebar,
    IncludeFooter,
  },
};
</script>

<style></style>
