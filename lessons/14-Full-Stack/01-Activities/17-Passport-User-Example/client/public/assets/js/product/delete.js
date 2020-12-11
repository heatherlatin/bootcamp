$(document).ready(() => {
    $(document).on("click", ".delete-product-btn", function (event) {
        event.preventDefault();
        const productId = $(this).data("id");
        $.ajax(`/api/products/${productId}`, {
            method: "DELETE"
        }).then(results => {
            location.reload();
        });
    });
});