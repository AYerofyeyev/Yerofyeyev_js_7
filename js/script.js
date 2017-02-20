var i = "";
var text = "<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>";

function showtext() {
  switch(i) {

    case "menu1":
    text = "<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>";
    break;

    case "menu2":
    text = "<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>";
    break;

    case "menu3":
    text = "<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.<br><br> Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>";
  }
};

function tooltipOne() {
  $(".wrapper").append(
    $("<div>Please provide your firstname.</div>")
    .addClass("tooltip")
    .css({
      position: "absolute",
      margin: "10px 0 0 400px",
      padding: 5,
      borderRadius: 3,
      boxShadow: "0 0 2px 2px #ccc"
    })
  )
};

function tooltipTwo() {
  $(".wrapper").append(
    $("<div>Please provide also your lastname.</div>")
    .addClass("tooltip")
    .css({
      position: "absolute",
      margin: "55px 0 0 400px",
      padding: 5,
      borderRadius: 3,
      boxShadow: "0 0 2px 2px #ccc"
    })
  )
};

function tooltipThree() {
  $(".wrapper").append(
  $("<div>Your home or work address.</div>")
    .addClass("tooltip")
    .css({
      position: "absolute",
      margin: "100px 0 0 400px",
      padding: 5,
      borderRadius: 3,
      boxShadow: "0 0 2px 2px #ccc"
    })
  )
};

$(function() {
  console.log('Подключена версия jQuery 1.12.4 через google');

  $("<div>")
  .addClass("wrapper")
  .css({
    margin: "0 auto",
    textAlign: "center",
    padding: 20
  })
  .appendTo("body")
  .append(

    $("<form>")
      .addClass("pure-form pure-form-aligned")
      .css({
        float: "left",
        position: "relative",
        overflow: "hidden"
      })
      .append(
        $("<fieldset>")
          .append(
            $("<div>")
              .addClass("pure-control-group")
              .append(
                $("<label>Firstname</label>"),
                $("<input>")
                  .hover(
                    tooltipOne,
                    function() {
                      $(".tooltip").detach()
                    }
                  )
              ),
            $("<div>")
              .addClass("pure-control-group")
              .append(
                $("<label>Lastname</label>"),
                $("<input>")
                  .hover(
                    tooltipTwo,
                    function() {
                      $(".tooltip").detach()
                    }
                  )
              ),
            $("<div>")
              .addClass("pure-control-group")
              .append(
                $("<label>Address</label>"),
                $("<input>")
                  .hover(
                    tooltipThree,
                    function() {
                      $(".tooltip").detach()
                    }
                  )
              )
            )
        .append(
          $("<div>Show help</div>")
            .addClass("pure-button pure-button-primary")
            .on("click", function(){
              tooltipOne();
              tooltipTwo();
              tooltipThree();
            })
        )
      )
  )
  .append(
    $("<section>")
      .css({float: "right"})
      .append(
        $("<div>")
          .addClass("pure-menu pure-menu-horizontal pure-menu-scrollable")
          .css({
            // display: "inline-block",
            textAlign: "left",
            height: 41,
            border: "1px solid #ccc",
            paddingLeft: 5,
            width: 561,
          })
        .append(
        $("<ul>")
          .addClass("pure-menu-list")
          .append(
            $("<li>")
              .addClass("pure-menu-item")
              .append(
                $("<a>Nunc tincidunt</a>")
                  .attr("id", "menu1")
                  .addClass("pure-menu-link")
                  .css({cursor: "pointer"})
              ),
            // )
          // .append(
            $("<li>")
              .addClass("pure-menu-item")
              .append(
                $("<a>Proin dolor</a>")
                  .attr("id", "menu2")
                  .addClass("pure-menu-link")
                  .css({cursor: "pointer"})
              ),
          // )
          // .append(
            $("<li>")
              .addClass("pure-menu-item")
              .append(
                $("<a>Aenean lacinia</a>")
                  .attr("id", "menu3")
                  .addClass("pure-menu-link")
                  .css({cursor: "pointer"})
              )
          )
        )
      )
    .append(
      $("<article>")
        .addClass("content")
        .css({
          // display: "inline-block",
          marginTop: "-1px",
          padding: 5,
          border: "1px solid #ccc",
          textAlign: "left",
          width: 549
        })
        .append(text)
    )
  );
  $(".pure-menu-link").on("click", function(){
    i = $(this).attr("id");
    showtext();
    $("p").replaceWith(text);
  });

})
