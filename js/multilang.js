// // Base
// const Rout = {
//     template: `<navb />`,
//     components: {
//         navb: drstw_navbar
//     }
// }

// const routes = [

// ]

// const router = new VueRouter ({
//     routes
// })

const i18n = new VueI18n({
    locale: "tw",
    messages,
})

// new Vue ({
//     render: h => h(Rout),
//     router,
//     i18n
// }).$mount("#hedr")

new Vue ({ i18n }).$mount("#app")

function change_locale(loc) {
    i18n.locale = loc;
}