<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/" class="brand-link">
      <img
        src="/admin/dist/img/AdminLTELogo.png"
        :alt="$store.state.app.name"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">{{
        $store.state.app.name
      }}</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="/admin/dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">Roby DEV</a>
        </div>
      </div>

      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <NavItem icon="fa fa-home" link="/"> Dashboard </NavItem>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Pages
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <NavItem link="/">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sample Home</p>
                </NavItem>
              </li>
            </ul>
          </li>
          <NavItem icon="fa fa-info-circle" link="/about"> About </NavItem>
          <NavItem icon="nav-icon fas fa-edit" link="/posts">Post </NavItem>
          <NavItem icon="nav-icon fas fa-edit" link="/posts-detail"
            >Post Detail
          </NavItem>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  name: "IncludeSidebar",
  components: {
    NavItem,
  },
};
</script>

<style></style>
