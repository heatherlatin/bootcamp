$(document).ready(() => {
    $(document).on("submit", ".create-inventory-form", function (event) {
        event.preventDefault();
        const storeId = $("#storeId").val();
        const productId = $("#productId").val();
        const price = $("#price").val();
        const quantity = $("#quantity").val();
        $.post("/api/inventory", {
            storeId, productId, price, quantity
        }).then(() => {
            const pathArr = window.location.pathname.split("/");
            const path = pathArr[pathArr.length - 2];
            const pathId = pathArr[pathArr.length - 1];
            location.replace(`/${path}s/view/${pathId}`);
        });
    });
});