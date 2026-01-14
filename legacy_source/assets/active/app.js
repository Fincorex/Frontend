"use strict";
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var App = (function () {
  function e() {
    _classCallCheck(this, e),
      _defineProperty(this, "initControls", function () {
        function e() {
          document.webkitIsFullScreen ||
            document.mozFullScreen ||
            document.msFullscreenElement ||
            $("body").removeClass("fullscreen-enable");
        }
        $('[data-toggle="fullscreen"]').on("click", function (e) {
          e.preventDefault(),
            $("body").toggleClass("fullscreen-enable"),
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement
              ? document.cancelFullScreen
                ? document.cancelFullScreen()
                : document.mozCancelFullScreen
                ? document.mozCancelFullScreen()
                : document.webkitCancelFullScreen &&
                  document.webkitCancelFullScreen()
              : document.documentElement.requestFullscreen
              ? document.documentElement.requestFullscreen()
              : document.documentElement.mozRequestFullScreen
              ? document.documentElement.mozRequestFullScreen()
              : document.documentElement.webkitRequestFullscreen &&
                document.documentElement.webkitRequestFullscreen(
                  Element.ALLOW_KEYBOARD_INPUT
                );
        }),
          document.addEventListener("fullscreenchange", e),
          document.addEventListener("webkitfullscreenchange", e),
          document.addEventListener("mozfullscreenchange", e);
      });
  }
  return (
    _createClass(e, [
      {
        key: "initComponents",
        value: function () {
          Waves.init();
          feather.replace();
        },
      },
      {
        key: "initMenu",
        value: function () {
              console.log("App initMenu called");
              
              // Dropdown Toggle
              var dropdownToggles = document.querySelectorAll('[data-bs-toggle="dropdown"]');
              console.log("Found dropdown toggles:", dropdownToggles.length);
              
              dropdownToggles.forEach(function(toggle) {
                  toggle.addEventListener('click', function(e) {
                      console.log("Dropdown clicked");
                      e.preventDefault();
                      e.stopPropagation();
                      var menu = this.nextElementSibling;
                      if (menu && menu.classList.contains('dropdown-menu')) {
                          // Close other dropdowns
                          document.querySelectorAll('.dropdown-menu.show').forEach(function(openMenu) {
                              if (openMenu !== menu) openMenu.classList.remove('show');
                          });
                          menu.classList.toggle('show');
                      }
                  });
              });

              // Close dropdowns when clicking outside
              document.addEventListener('click', function(e) {
                  if (!e.target.closest('.dropdown')) {
                      document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
                          menu.classList.remove('show');
                      });
                  }
              });

              // Sidebar Menu Toggle
              var sidebarLinks = $("#side-menu a");
              console.log("Found sidebar links:", sidebarLinks.length);

              sidebarLinks.each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                  $(this).addClass("active");
                  $(this).parent().addClass("menuitem-active");
                  $(this).parent().parent().parent().addClass("show");
                  $(this).parent().parent().parent().parent().addClass("menuitem-active");
                }
              });

              // Sidebar Collapse Logic
              var collapseToggles = document.querySelectorAll('#side-menu [data-bs-toggle="collapse"]');
              console.log("Found collapse toggles:", collapseToggles.length);
              
              collapseToggles.forEach(function(toggle) {
                  // Initialize state
                  var targetId = toggle.getAttribute('href') || toggle.getAttribute('data-bs-target');
                  var target = targetId ? document.querySelector(targetId) : null;
                  
                  if (target) {
                      if (!target.classList.contains('show')) {
                          toggle.classList.add('collapsed');
                          toggle.setAttribute('aria-expanded', 'false');
                      } else {
                          toggle.classList.remove('collapsed');
                          toggle.setAttribute('aria-expanded', 'true');
                      }
                  }

                  toggle.addEventListener('click', function(e) {
                      console.log("Collapse toggle clicked");
                      e.preventDefault();
                      
                      if (target) {
                          // Accordion behavior: Close others
                          var parent = this.closest('li').parentElement;
                          if (parent) {
                              var others = parent.querySelectorAll('.collapse.show');
                              others.forEach(function(other) {
                                  if (other !== target) {
                                      other.classList.remove('show');
                                      // Find and reset trigger for the other menu
                                      if (other.id) {
                                          var otherTrigger = document.querySelector('[href="#' + other.id + '"], [data-bs-target="#' + other.id + '"]');
                                          if (otherTrigger) {
                                              otherTrigger.classList.add('collapsed');
                                              otherTrigger.setAttribute('aria-expanded', 'false');
                                          }
                                      }
                                  }
                              });
                          }
                          
                          // Toggle current
                          target.classList.toggle('show');
                          var isShown = target.classList.contains('show');
                          console.log("Toggled show class. isShown:", isShown);
                          
                          if (isShown) {
                              this.classList.remove('collapsed');
                              this.setAttribute('aria-expanded', 'true');
                          } else {
                              this.classList.add('collapsed');
                              this.setAttribute('aria-expanded', 'false');
                          }
                      }
                  });
              });
            },
      },
      {
        key: "init",
        value: function () {
          this.initComponents(), this.initMenu(), this.initControls();
        },
      },
    ]),
    e
  );
})();
new App().init();
