$(document).ready(() => {
    $(document).on("submit", ".upsert-product-form", function (event) {
        event.preventDefault();
        const name = $("#name").val();
        const description = $("#description").val();
        $.post("/api/products", {
            name, description
        }).then(results => {
            console.log(results);
            location.replace(`/products/view/${results.id}`);
        });
    });
});