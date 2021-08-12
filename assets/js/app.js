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
          $("footer").removeClass("text-dark")
          $("footer").addClass("bg-dark")
          $("footer").addClass("text-light")

        }
        if (b === true) {
          $("footer").removeClass("bg-dark")
          $("footer").removeClass("text-light")
          $("footer").addClass("bg-white")
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
          console.log("Blue")
          $("button").removeClass("btn-primary")
          temp = Math.floor(Math.random() * btn.length)
          console.log(temp)
          $("button").addClass(btn[temp])

        }
                if (b === true) {
          console.log("Yellow")
          $("button").removeClass("btn-primary-2")
          temp = Math.floor(Math.random() * btn.length)
          console.log(temp)
          $("button").addClass(btn[temp])

        }
                if (c === true) {
          console.log("Green")
          $("button").removeClass("btn-primary-3")
          temp = Math.floor(Math.random() * btn.length)
          console.log(temp)
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
        c = $("a.btn").hasClass("btn-primary-3")

        if (a === true) {
          console.log("Blue")
          $(".btn").removeClass("btn-primary")
          temp = Math.floor(Math.random() * btn.length)
          console.log(temp)
          $(".btn").addClass(btn[temp])

        }
                if (b === true) {
          console.log("Yellow")
          $(".btn").removeClass("btn-primary-2")
          temp = Math.floor(Math.random() * btn.length)
          console.log(temp)
          $(".btn").addClass(btn[temp])

        }
                if (c === true) {
          console.log("Green")
          $(".btn").removeClass("btn-primary-3")
          temp = Math.floor(Math.random() * btn.length)
          console.log(temp)
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
          console.log("BG: dark text:light")
          $("div").removeClass("text-dark")
          $("div").addClass("text-light")

        }
        if (b === true && $("section div").hasClass("bg-white")) {
          console.log("BG: light text:dark")
          $("section").removeClass("text-light")
          $("section").addClass("text-dark")


        }
      })
    }



    sectionChanger()
    divChanger()
    footerChanger()
    buttonChanger()
    linkChanger()