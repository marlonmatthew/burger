$(document).ready(function () {
  $(".devour").on("submit", function (event) {
    event.preventDefault();

    const burger = $(this).children(".burger").val();

    console.log(burger);

    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger,
    }).then(function (data) {
      location.reload();
    });
  });
});
