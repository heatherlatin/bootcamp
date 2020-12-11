$(document).ready(() => {
    $(document).on("submit", ".upsert-store-form", function (event) {
        event.preventDefault();
        const name = $("#name").val();
        const description = $("#description").val();
        $.post("/api/stores", {
            name, description
        }).then(results => {
            location.replace(`/stores/view/${results.id}`);
        });
    });
});