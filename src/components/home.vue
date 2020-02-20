<template>
  <div class="header">
    <div id="menu" class="container-fuild">
      <div class="menu-task row">
        <div class="logo col-md-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" />
        </div>
        <div class="col-md-10 d-flex justify-content-end align-items-center">
          <div>
            <form id="content">
              <input type="text" name="input" class="input" id="search-input" />
              <button @click="expand" type="reset" class="search" id="search-btn"></button>
            </form>
          </div>
          <div id="menu-button" class="menu-button">
            <button>ABOUT</button>
            <button>CONTRACT</button>
            <button>PORTFOLIO</button>
            <button>BLOG</button>
            <button>WORDPRESS THEME</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container title-header">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div>
            <h2 class="text">
              We are about to change the way
              <br />
              <em>you publish on the web</em>
            </h2>
          </div>

          <div class="button-download">
            <button>FREE DOWNLOAD</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false,
      active: false,
      isActive2: false,
      active2: false
    };
  },
  methods: {
    handleScroll(event) {},

    scroll(event) {
      var els = document.querySelectorAll("#menu-button>button");

      if (window.pageYOffset > 150) {
        document.getElementById("menu").classList.add("mystyle", 1000);
        for (var x = 0; x < els.length; x++) {
          els[x].classList.add("textstyle");
        }
      } else if (window.pageYOffset < 150) {
        document.getElementById("menu").classList.remove("mystyle");

        for (var x = 0; x < els.length; x++)
          els[x].classList.remove("textstyle");
      }
    },
    expand() {
      const input = document.getElementById("search-input");
      const searchBtn = document.getElementById("search-btn");
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
    }
  },

  created() {
    window.addEventListener("scroll", this.scroll, this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.scroll, this.handleScroll);
  }
};
</script>

<style scoped>
h2 {
  color: white;
  text-align: center;
  font-weight: 900;
  font-family: Playfair Display, serif;
  line-height: 1.18;
  font-size: 3.4rem;
  margin-bottom: 20px;
}

.button-download {
  background-color: #252525;
  width: 200px;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 0.96rem;
  text-align: center;
}
.button-download:hover {
  background-color: #585858;
  transition-duration: 1s;
}
.title-header {
  padding: 100px;
}
em {
  font-style: italic;
  font-weight: 400;
  font-size: 3rem;
}

.mystyle {
  background-color: white;
  transition: all 1s ease;
}
.textstyle:hover {
  color: #000 !important;
  border-bottom: black solid 2px !important;
}

.textstyle {
  color: #585858;
}
.textstyle2 {
  color: #585858;
}

#menu-button {
  transition: all 1s ease;
}
.logo > img {
  width: 30%;
  height: auto;
}
button {
  padding: 6px 14.6px;
  font-size: 14px;
  background: none;
  border: none;
  color: #bfbfbf;
}
#menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  padding: 20px 150px;
  z-index: 20;
}
#menu-button > button:hover {
  color: white;
  border-bottom: white solid 2px;
}
.header {
  height: 600px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)),
    url(https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1443&q=80);
  background-position: center;
}
#content {
  position: absolute;
  height: 50px;
  width: 300px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#content.on {
  -webkit-animation-name: in-out;
  animation-name: in-out;
  -webkit-animation-duration: 0.7s;
  animation-duration: 0.7s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

input {
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border: 4px solid #ffffff;
  border-radius: 50%;
  background: none;
  color: #fff;
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  outline: 0;
  top: 21px;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
    padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
    padding 0.2s;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.search {
  background: none;
  position: absolute;
  top: 25px;
  left: 3px;
  height: 41px;
  width: 52px;
  padding: 0;
  border-radius: 100%;
  outline: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.search:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 4px;
  background-color: #fff;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-top: 11px;
  margin-left: 15px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.close {
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
      top: 21px !important;
    left: 3px !important;
}

.close:before {
  content: "";
  position: absolute;
  width: 27px;
  height: 4px;
  margin-top: -1px;
  margin-left: -13px;
  background-color: #fff;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.close:after {
  content: "";
  position: absolute;
  width: 27px;
  height: 4px;
  background-color: #fff;
  margin-top: -1px;
  margin-left: -13px;
  cursor: pointer;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.square {
  box-sizing: border-box;
  padding: 0 40px 0 10px;
  width: 300px;
  height: 45px;
  border: 4px solid #ffffff;
  border-radius: 0;
  background: none;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
    padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
    padding 0.2s;
  -webkit-transition-delay: 0.4s, 0s, 0.4s;
  transition-delay: 0.4s, 0s, 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}
</style>