$(document).ready(() => {
    $(document).on("submit", ".upsert-product-form", function (event) {
        event.preventDefault();
        const id = $("#id").val();
        const name = $("#name").val();
        const description = $("#description").val();
        $.ajax("/api/products", {
            data: { id, name, description },
            method: "PUT"
        }).then(results => {
            location.replace(`/products/view/${id}`);
        });
    });
});