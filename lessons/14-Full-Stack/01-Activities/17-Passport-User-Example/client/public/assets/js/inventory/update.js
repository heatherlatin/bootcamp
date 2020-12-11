$(document).ready(() => {
    $(document).on("submit", ".update-inventory-form", function (event) {
        console.log("doing it")
        event.preventDefault();
        const storeId = $("#storeId").val();
        const productId = $("#productId").val();
        const price = $("#price").val();
        const quantity = $("#quantity").val();
        $.ajax("/api/inventory", {
            data: {
                storeId, productId, price, quantity
            },
            method: "PUT"
        }).then(() => {
            const pathArr = window.location.pathname.split("/");
            const path = pathArr[pathArr.length - 3];
            const pathId = pathArr[pathArr.length - 2];
            location.replace(`/${path}s/view/${pathId}`);
        });
    });
});