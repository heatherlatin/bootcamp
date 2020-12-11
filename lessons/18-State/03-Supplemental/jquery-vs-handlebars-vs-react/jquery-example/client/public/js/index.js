$(document).ready(function() {
    const loadingElems = $(".loading");
    const doneLoadingElems = $(".done-loading");
    const memberNameElem = $(".member-name");
    $.get("/api/user_data").then(({ email }) => {
        doneLoadingElems.removeClass("hidden");
        loadingElems.addClass("hidden");
        memberNameElem.text(email);
    })
});