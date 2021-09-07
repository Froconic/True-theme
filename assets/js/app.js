    var bg = ["bg-primary", "bg-primary-2", "bg-primary-3"];
    var btn = ["btn-primary", "btn-primary-2", "btn-primary-3"];
    var icon = ["icon", "icon-2", "icon-3", ]

    function buttonChanger() {
      var a = ''
      var b = ''
      var c = ''

      $("#themeChanger").click(function () {
        a = $(".btn").hasClass("btn-primary")
        b = $(".btn").hasClass("btn-primary-2")
        c = $(".btn").hasClass("btn-primary-3")

        if (a === true) {
          $(".btn").removeClass("btn-primary")
          $(".btn").addClass(btn[1])

        }
        if (b === true) {
          $(".btn").removeClass("btn-primary-2")
          $(".btn").addClass(btn[2])

        }
        if (c === true) {
          $(".btn").removeClass("btn-primary-3")
          $(".btn").addClass(btn[0])

        }

      })
    }

    function linkChanger() {
      var a = ''
      var b = ''
      var c = ''
      var temp = ''


      $("#themeChanger").click(function () {
        a = $("a").hasClass("btn-primary")
        b = $(".btn").hasClass("btn-primary-2")
        c = $(".btn").hasClass("btn-primary-3")

        if (a === true) {
          $(".btn").removeClass("btn-primary")
          $(".btn").addClass(btn[1])

        }

        if (b === true) {
          $(".btn").removeClass("btn-primary-2")
          $(".btn").addClass(btn[2])

        }

        if (a === true) {
          $(".btn").removeClass("btn-primary-3")
          $(".btn").addClass(btn[0])

        }

      })
    }

    function cardChanger() {
      var a = ''
      var b = ''
      var c = ''

      $("#themeChanger").click(function () {
        a = $(".card").hasClass("bg-primary")
        b = $(".card").hasClass("bg-primary-2")
        c = $(".card").hasClass("bg-primary-3")

        if (a === true) {
          $(".card").removeClass("btn-primary")
          $(".card").addClass(bg[1])

        }
        if (b === true) {
          $(".card").removeClass("btn-primary-2")
          $(".card").addClass(bg[2])

        }
        if (c === true) {
          $(".card").removeClass("btn-primary-3")
          $(".card").addClass(bg[0])

        }
      })
    }

    cardChanger()
    buttonChanger()
    // linkChanger()