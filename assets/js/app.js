    var bg = ["bg-primary", "bg-primary-2", "bg-primary-3"];
    var btn = ["btn-primary", "btn-primary-2", "btn-primary-3"];


    function sectionChanger() {
      var a = ''
      var b = ''


      $("#themeChanger").click(function () {
        a = $("section").hasClass("bg-white")
        b = $("section").hasClass("bg-dark")

        if (a === true) {
          $("section").removeClass("bg-white")
          $("section").removeClass("text-dark")
          $("section").addClass("bg-dark")
          $("section").addClass("text-light")

        }
        if (b === true) {
          $("section").removeClass("bg-dark")
          $("section").removeClass("text-light")
          $("section").addClass("bg-white")
          $("section").addClass("text-dark")


        }
      })
    }

    function footerChanger() {
      var a = ''
      var b = ''


      $("#themeChanger").click(function () {
        a = $("footer").hasClass("bg-white")
        b = $("footer").hasClass("bg-dark")

        if (a === true) {
          $("footer").removeClass("bg-white")
          $("footer .icon").removeClass("bg-white")
          $("footer").removeClass("text-dark")
          $("footer").addClass("bg-dark")
          $("footer .icon").addClass("bg-dark")
          $("footer").addClass("text-light")

        }
        if (b === true) {
          $("footer").removeClass("bg-dark")
          $("footer .icon").removeClass("bg-dark")
          $("footer").removeClass("text-light")
          $("footer").addClass("bg-white")
          $("footer .icon").addClass("bg-white")
          $("footer").addClass("text-dark")


        }
      })
    }

    function buttonChanger() {
      var a = ''
      var b = ''
      var c = ''
      var temp = ''


      $("#themeChanger").click(function () {
        a = $("button").hasClass("btn-primary")
        b = $("button").hasClass("btn-primary-2")
        c = $("button").hasClass("btn-primary-3")

        if (a === true) {
          $("button").removeClass("btn-primary")
          temp = Math.floor(Math.random() * btn.length)
          $("button").addClass(btn[temp])

        }
        if (b === true) {
          $("button").removeClass("btn-primary-2")
          temp = Math.floor(Math.random() * btn.length)
          $("button").addClass(btn[temp])

        }
        if (c === true) {
          $("button").removeClass("btn-primary-3")
          temp = Math.floor(Math.random() * btn.length)
          $("button").addClass(btn[temp])

        }

      })
    }

    function linkChanger() {
      var a = ''
      var b = ''
      var c = ''
      var temp = ''


      $("#themeChanger").click(function () {
        a = $(".btn").hasClass("btn-primary")
        b = $(".btn").hasClass("btn-primary-2")
        c = $(".btn").hasClass("btn-primary-3")

        if (a === true) {
          $(".btn").removeClass("btn-primary")
          temp = Math.floor(Math.random() * btn.length)
          $(".btn").addClass(btn[temp])

        }
        if (b === true) {
          $(".btn").removeClass("btn-primary-2")
          temp = Math.floor(Math.random() * btn.length)
          $(".btn").addClass(btn[temp])

        }
        if (c === true) {
          $(".btn").removeClass("btn-primary-3")
          temp = Math.floor(Math.random() * btn.length)
          $(".btn").addClass(btn[temp])

        }

      })
    }

    function divChanger() {
      var a = ''
      var b = ''


      $("#themeChanger").click(function () {
        a = $("div").hasClass("text-dark")
        b = $("div").hasClass("text-light")

        if (a === true && $("section div").hasClass("bg-dark")) {
          $("div").removeClass("text-dark")
          $("div").addClass("text-light")

        }
        if (b === true && $("section div").hasClass("bg-white")) {
          $("section").removeClass("text-light")
          $("section").addClass("text-dark")


        }
      })
    }

    function logoChanger() {
      var a = ''
      var b = ''
      var d = ''
      var c = ''

      $("#themeChanger").click(function () {
        a = $("img").hasClass("logo")
        b = $("section").hasClass("bg-white")
        c = $("section").hasClass("bg-dark")
        d = $("nav").hasClass("bg-white")
        e = $("nav").hasClass("bg-light")


        if (a === true && b === true) {
          $(".logo").removeAttr("src", "assets/img/logos/logo.png")
          $(".logo").attr("src", "assets/img/logos/logo-alt.png")
        }
        if (a === true && c === true) {
          $(".logo").removeAttr("src", "assets/img/logos/logo-alt.png")
          $(".logo").attr("src", "assets/img/logos/logo.png")
        }

      })
    }

    function cardChanger() {
      var a = ''
      var b = ''
      var c = ''

      $("#themeChanger").click(function () {
        a = $("div").hasClass("card-body")
        b = $("div").hasClass("bg-white")
        c = $("div").hasClass("bg-dark")
        c = $("a").hasClass("bg-dark")


        if (a === true && b === true) {
          $("div .card-body").removeClass("bg-white")
          $("div .card-body").addClass("bg-dark")
          $("div .card-body").addClass("text-light")
        } else {
          $("div .card-body").removeClass("bg-dark")
          $("div .card-body").removeClass("text-light")
          $("div .card-body").addClass("bg-white")
          $("div .card-body").addClass("text-dark")
        }
      })
    }

    function navChanger() {
      var a = ''
      var b = ''

      $("#themeChanger").click(function () {
        a = $("nav").hasClass("bg-white")
        b = $("nav").hasClass("bg-dark")

        if (a === true) {
          $("nav").removeClass("bg-white")
          console.log("step 1")
          $("nav").addClass("bg-dark")
          console.log("step 2")
          $("nav a").removeClass("text-dark")
          console.log("step 3")
          $("nav a").addClass("text-light")
          console.log("step 4")
          $("nav img").removeAttr("src", "assets/img/logos/logo.png")
          console.log("step 5")
          $("nav img").attr("src", "assets/img/logos/logo-alt.png")
          console.log("step 6")

        } else {
          $("nav").removeClass("bg-dark")
          $("nav").addClass("bg-white")
          $("nav a").removeClass("text-light")
          $("nav a").addClass("text-dark")
          $("nav img").removeAttr("src", "assets/img/logos/logo-alt.png")
          $("nav img").attr("src", "assets/img/logos/logo.png")
        }
      })
    }

    navChanger()
    // cardChanger()
    logoChanger()
    sectionChanger()
    divChanger()
    footerChanger()
    buttonChanger()
    linkChanger()