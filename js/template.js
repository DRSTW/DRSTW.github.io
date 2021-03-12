const drstw_navbar = {
    template: `<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">

        <!-- icon & navtitle -->
        <a class="navbar-brand" href="index.html">
            <img src="images/logo_small.png" alt="" width="24" height="24"
                class="d-inline-block align-middle">
            <span class="fw-bold">{{ $t("message.navbar.title") }}</span>
        </a>

        <!-- navbar dropdown button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcont"
            aria-controls="navbarcont" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- navbar content -->
        <div class="collapse navbar-collapse" id="navbarcont">
            <div class="mx-2 navbar-nav">
                <span class="px-2 nav-item">
                    <a class="nav-link" href="#">{{ $t("message.navbar.home") }}</a>
                </span>
                <span class="px-2 nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarTOC" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        {{ $t("message.navbar.TOC") }}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarTOC">
                        <li><a class="dropdown-item" href="TOCmain.html">{{ $t("message.navbar.TOCmain") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("message.navbar.schedule") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("message.navbar.songs") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("message.navbar.contestants") }}</a>
                        </li>
                        <li><a class="dropdown-item" href="#">{{ $t("message.navbar.rules") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("message.navbar.faq") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("message.navbar.links") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("message.navbar.HOF") }}</a></li>
                    </ul>
                </span>
                <span class="px-2 nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarlang" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        {{ $t("message.navbar.language") }}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarlang">
                        <li><button class="dropdown-item"
                                onclick="change_locale('tw')">{{ $t("message.navbar.tw") }}</button></li>
                        <li><button class="dropdown-item"
                                onclick="change_locale('en')">{{ $t("message.navbar.en") }}</button></li>
                        <li><button class="dropdown-item"
                                onclick="change_locale('jp')">{{ $t("message.navbar.jp") }}</button></li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
</nav>`
}

// Base
const Rout = {
    template: `<navb />`,
    components: {
        navb: drstw_navbar
    }
}

const routes = [

]

const router = new VueRouter ({
    routes
})

new Vue ({
    render: h => h(Rout),
    router
}).$mount("#hedr")