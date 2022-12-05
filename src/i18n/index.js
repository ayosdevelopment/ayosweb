import { I18n } from "i18n-js"

import * as translations from "./locales"

const i18n = new I18n(translations)

// i18n.locale = navigator.language
i18n.locale = "pt"
i18n.enableFallback = true

export default i18n
