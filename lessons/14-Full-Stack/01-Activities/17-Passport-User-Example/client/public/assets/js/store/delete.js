$(document).ready(() => {
    $(document).on("click", ".delete-store-btn", function (event) {
        event.preventDefault();
        const storeId = $(this).data("id");
        $.ajax(`/api/stores/${storeId}`, {
            method: "DELETE"
        }).then(results => {
            location.reload();
        });
    });
});