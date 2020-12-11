console.log("admin");
let type = "cat";
$('#type').on("change", function () {
    type = $(this).val();
    if (type === "cat") {
        $(".cat").removeClass("hidden");
        $(".dog").addClass("hidden");
    } else {
        $(".dog").removeClass("hidden");
        $(".cat").addClass("hidden");
    }
});

$("#submit").on("click", function (event) {
    event.preventDefault();

    const animal = {
        type,
        name: $("#name").val(),
        color: $("#color").val(),
        age: parseFloat($("#age").val()),
        image: $("#image").val(),
        description: $("#description").val()
    }

    if (type === "cat") {
        animal.hairLength = $("#hairLength").val();
        animal.mood = $("#mood").val();
    }

    if (type === "dog") {
        animal.size = $("#size").val();
        animal.breed = $("#breed").val();
    }
    $.ajax({
        type: "POST",
        url: "/api/shelter",
        data: JSON.stringify(animal),
        contentType: "application/json; charset=utf-8",
      }).then(response => console.log(response));
})