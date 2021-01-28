$(document).ready(function () {
  $("#burgerForm").on("submit", function (event) {
    event.preventDefault();
    const burger_name = $(this)
      .find('textarea[name="burgerName"]')
      .val()
      .trim();
    if (!burger_name) {
      return;
    }
    fetch("/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        burger_name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  });

  $(".devourBtn").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    fetch("/devour/" + id, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  });
});
