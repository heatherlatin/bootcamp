$(document).ready(function () {
    $(".path").text(window.location.pathname);
    const navbarHeader = $(".my-navbar-container");
    $.get("/api/user_data").then(({ email }) => {
        if (email) {
            navbarHeader.html(`
            <a class="navbar-brand" href="/">
                Candle App
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/candle">
                            Candle
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/candle/create">
                            Create Candle
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/logout">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            `);
        }
    })
});