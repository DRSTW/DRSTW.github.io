import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

const messages = {
    tw: {
        message: {
            test: "這是一個多語言測試。"
        }
    }
}

const i18n = new VueI18n({
    locale: "tw",
    messages,
})

new Vue ({ i18n }).$mount(#app)