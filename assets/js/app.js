    var bg = ["bg-primary", "bg-primary-2", "bg-primary-3"];
    var btn = ["btn-primary", "btn-primary-2", "btn-primary-3"];
    var icon = ["icon", "icon-2", "icon-3", ]
    var text = ["text-primary", "text-primary-2", "text-primary-3"]
    var badge = ["badge-primary", "badge-primary-2", "badge-primary-3"]

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

    function testLink() {
      a = ''

      $("#themeChanger").cllick(function () {
       a = $("a.navlink").hasClass("text-primary")

       if (a === true) {
         console.log("a detected")
         $(a).removeClass("text-primary")
         $(a).addClass(text[1])
       }
      })
    }

    function linkChanger() {
      var a = ''
      var b = ''
      var c = ''
      var d = ''
      var e = ''
      var f = ''
      var g = ''
      var h = ''
      var i = ''


      $("#themeChanger").click(function () {
        a = $("a[class~='page-link']").hasClass("text-primary")
        b = $("a[class~='page-link']").hasClass("text-primary-2")
        c = $("a[class~='page-link']").hasClass("text-primary-3")
        d = $("a[class~='nav-link']").hasClass("text-primary")
        e = $("a[class~='nav-link']").hasClass("text-primary-2")
        f = $("a[class~='nav-link']").hasClass("text-primary-3")
        g = $("a[name~='href']")
        h = $("a").hasClass("text-primary")
        i = $("a").hasClass("text-primary-2")
        j = $("a").hasClass("text-primary-3")
        k = $(".btn").hasClass("btn-primary")
        l = $(".btn").hasClass("btn-primary-2")
        m = $(".btn").hasClass("btn-primary-3")
        n = $(".card").hasClass("bg-primary")
        o = $(".card").hasClass("bg-primary-2")
        p = $(".card").hasClass("bg-primary-3")
        q = $(".card, ").hasClass("bg-primary-3")



        if (a === true) {
          $("a[class~='page-link']").removeClass("text-primary")
          $("a[class~='page-link']").addClass(text[1])

        }

        if (b === true) {
          $("a[class~='page-link']").removeClass("text-primary-2")
          $("a[class~='page-link']").addClass(text[2])

        }

        if (c === true) {
          $("a[class~='page-link']").removeClass("text-primary-3")
          $("a[class~='page-link']").addClass(text[0])

        }

        if (d === true) {
          $("a[class~='nav-link']").removeClass("text-primary")
          $("a[class~='nav-link']").addClass(text[1])

        }

        if (e === true) {
          $("a[class~='nav-link']").removeClass("text-primary-2")
          $("a[class~='nav-link']").addClass(text[2])

        }

        if (f === true) {
          $("a[class~='nav-link']").removeClass("text-primary-3")
          $("a[class~='nav-link']").addClass(text[0])

        }

        // if (g === true) {
        //   $("a[name~='href']").removeClass("text-primary")
        //   $("a[name~='href']").addClass(text[1])
        // }

        if (h === true) {
          $("a[class~='text-primary']").removeClass("text-primary")
          $("a").addClass(text[1])
        }

        if (i === true) {
          $("a[class~='text-primary-2']").removeClass("text-primary-2")
          $("a").addClass(text[2])
        }

        if (j === true) {
          $("a[class~='text-primary-3']").removeClass("text-primary-3")
          $("a").addClass(text[0])
        }

        if (k === true) {
          $(".btn").removeClass("btn-primary")
          $(".btn").addClass(btn[1])

        }
        if (l === true) {
          $(".btn").removeClass("btn-primary-2")
          $(".btn").addClass(btn[2])

        }
        if (m === true) {
          $(".btn").removeClass("btn-primary-3")
          $(".btn").addClass(btn[0])

        }

        if (n === true) {
          $(".card").removeClass("bg-primary")
          $(".card").addClass(bg[1])

        }
        if (o === true) {
          $(".card").removeClass("bg-primary-2")
          $(".card").addClass(bg[2])

        }
        if (p === true) {
          $(".card").removeClass("bg-primary-3")
          $(".card").addClass(bg[0])

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
          $(".card").removeClass("bg-primary")
          $(".card").addClass(bg[1])

        }
        if (b === true) {
          $(".card").removeClass("bg-primary-2")
          $(".card").addClass(bg[2])

        }
        if (c === true) {
          $(".card").removeClass("bg-primary-3")
          $(".card").addClass(bg[0])

        }
      })
    }

    function badgeChanger() {
      var a = ''
      var b = ''
      var c = ''

      $("#themeChanger").click(function () {
        a = $("span[class~=badge]").hasClass("badge-primary")
        b = $("span").hasClass("badge-primary-2")
        c = $("span").hasClass("badge-primary-3")

        if (a === true) {
          $("span[class~=badge]").removeClass("badge-primary")
          $("span[class~=badge]").addClass(badge[1])
        }

        if (b === true) {
          $("span[class~=badge]").removeClass("badge-primary-2")
          $("span[class~=badge]").addClass(badge[2])
        }

        if (c === true) {
          $("span[class~=badge]").removeClass("badge-primary-3")
          $("span[class~=badge]").addClass(badge[0])
        }

      })
    }

    function iconChanger() {
      a = ''
      b = ''
      c = ''

      $("#themeChanger").click(function () {
        a = $(".icon").hasClass("bg-primary")
        b = $(".icon").hasClass("bg-primary-2")
        c = $(".icon").hasClass("bg-primary-3")

        if (a === true) {
          $(".icon").removeClass("bg-primary")
          $(".icon").addClass(bg[1])
        }

        if (b === true) {
          $(".icon").removeClass("bg-primary-2")
          $(".icon").addClass(bg[2])
        }

        if (c === true) {
          $(".icon").removeClass("bg-primary-3")
          $(".icon").addClass(bg[0])
        }

      })
    }

    // cardChanger()
    // buttonChanger()
    // linkChanger()
    badgeChanger()
    iconChanger()