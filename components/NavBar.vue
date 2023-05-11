<template>
  <div>
    <nav
      class="navbar is-fixed-top"
      :class="{ 'has-shadow': isScrolling }"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container" data-aos="fade-down">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <b>Home Assistant</b>
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            @click="mobileMenu = !mobileMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbar"
          class="navbar-menu"
          :class="{ 'is-active': mobileMenu }"
        >
          <div class="navbar-start"></div>
          <div class="navbar-end is-align-items-center">
            <div @click="mobileMenu = false">
              <nuxt-link
                class="navbar-item"
                to="/test1"
                exact-active-class="is-active"
              >
                Test 1
              </nuxt-link>
            </div>
            <div class="navbar-item" exact-active-class="is-active">
              <div @click="mobileMenu = false">
                <nuxt-link
                  class="navbar-item"
                  to="/test2"
                  exact-active-class="is-active"
                >
                  Test 2
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['isScrolling'],
  data() {
    return {
      loading: false,
      mobileMenu: false,
    };
  },
};
</script>

<style lang="scss">
.navbar {
  backdrop-filter: blur(7px);
  background: rgba(white, 0.9);
  &.is-transparent {
    background: transparent;
  }

  .navbar-brand {
    .navbar-item {
      &.is-active,
      &:hover {
        color: $primary;
      }
    }
  }

  .navbar-burger {
    height: auto;
  }

  .navbar-menu {
    margin-top: 8px;
    margin-bottom: 8px;
    justify-content: center;
    .navbar-item {
      font-weight: 600;
      padding: 10px 20px;
      text-align: center;
      &.social-icon {
        img {
          transition: transform 0.3s;
        }
        &:hover {
          background: none;
          img {
            transform: scale(1.15);
          }
        }
      }
      &:after {
        display: block;
        width: 0;
        height: 2px;
        position: absolute;
        transition: width 0.5s;
        bottom: 10px;
        background: $primary;
        content: '';
      }
      &.is-active {
        color: $primary;
        font-weight: 700;
        &:after {
          width: calc(100% - 1.5rem - 15px);
        }
      }
    }
  }
}
</style>
