const i18n = new VueI18n({
    locale: "tw",
    messages,
})

new Vue ({ i18n }).$mount("#app")

function change_locale(loc) {
    i18n.locale = loc;
}