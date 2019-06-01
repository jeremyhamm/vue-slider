<template>
  <div>
    <!-- Nav Links -->
    <div ref="slider" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeMenu()">&times;</a>
      <a href="javascript:void(0)">Link 1</a>
      <a href="javascript:void(0)">Link 2</a>
      <a href="javascript:void(0)">Link 3</a>
    </div>
    <!-- Hamburger Menu -->
    <nav ref="menuIcon" class="topnav">
      <a href="javascript:void(0)" @click="openMenu()">
        <svg width="30" height="30" id="icoOpen">
          <path d="M0,5 30,5" :stroke="styles['menu-icon-color']" stroke-width="5"/>
          <path d="M0,14 30,14" :stroke="styles['menu-icon-color']" stroke-width="5"/>
          <path d="M0,23 30,23" :stroke="styles['menu-icon-color']" stroke-width="5"/>
        </svg>
      </a>
    </nav>
  </div>
</template>

<script>
import styles from '@/assets/variables.scss';
import utilities from '@/js/utilities';
export default {
  name: 'slider',
  props: {
    width: {
      type: Number,
      required: false,
      default: 250
    },
    format: {
      type: String,
      required: false,
      default: 'overlay'
    },
    direction: {
      type: String,
      required: false,
      default: 'left'
    },
    opacity: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      styles: styles
    }
  },
  mounted (){
    this.init();
  },
  methods: {
    init () {
      if (this.direction === 'right') {
        this.setRightMenu();
      } else {
        this.setLeftMenu();
      }
    },
    setLeftMenu () {
      this.$refs.slider.style.left = "0";
      this.$refs.menuIcon.style.float = "left";
    },
    setRightMenu () {
      this.$refs.slider.style.right = "0";
      this.$refs.menuIcon.style.float = "right";
    },
    openMenu () {
      if (this.opacity) {
        document.body.style.backgroundColor = utilities.hexToRGB(styles['background-color'], this.opacity);
      }
      switch (this.format) {
        case 'push':
          const width = this.width.toString() + "px";
          this.$refs.slider.style.width = width;
          let parentRefStyle = this.$parent.$refs.app.style
          if (this.direction === 'right') {
            parentRefStyle.marginRight = width
            parentRefStyle.transition = "margin-right .5s";
          } else {
            parentRefStyle.marginLeft = width
            parentRefStyle.transition = "margin-left .5s";
          }
          break;
        case 'full':
          this.$refs.slider.style.width = "100%";
          break;
        default:
          this.$refs.slider.style.width = this.width.toString() + "px";
          break;
      }
    },
    closeMenu () {
      this.$refs.slider.style.width = "0";
      this.$parent.$refs.app.style.marginLeft = "0";
      this.$parent.$refs.app.style.marginRight = "0";
      if (this.opacity) {
        document.body.style.backgroundColor = styles['background-color'];
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/slider.scss";
</style>
