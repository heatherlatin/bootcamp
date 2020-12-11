$(document).ready(function() {
    const loadingElems = $(".loading");
    const doneLoadingElems = $(".done-loading");
    const candleContainer = $(".candle-container");
    $.get("/api/candles").then(candles => {
        doneLoadingElems.removeClass("hidden");
        loadingElems.addClass("hidden");
        candleElems = candles.map(({ name, scent, height }) => $(`
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card m-2">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${scent}</h6>
                    <p class="card-text">The candle currently has a height of ${height} cm</p>
                </div>
            </div>
        </div>`));
        candleContainer.append(...candleElems);
    })
});