$(document).ready(() => {
    $(document).on("click", ".delete-inventory-btn", function (event) {
        event.preventDefault();
        const storeId = $(this).data("store-id");
        const productId = $(this).data("product-id");
        $.ajax(`/api/inventory/${storeId}/${productId}`, {
            method: "DELETE"
        }).then(results => {
            location.reload();
        });
    });
});