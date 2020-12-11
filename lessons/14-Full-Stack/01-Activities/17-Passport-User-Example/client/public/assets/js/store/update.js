$(document).ready(() => {
    $(document).on("submit", ".upsert-store-form", function (event) {
        event.preventDefault();
        const id = $("#id").val();
        const name = $("#name").val();
        const description = $("#description").val();
        $.ajax("/api/stores", {
            data: { id, name, description },
            method: "PUT"
        }).then(results => {
            location.replace(`/stores/view/${id}`);
        });
    });
});