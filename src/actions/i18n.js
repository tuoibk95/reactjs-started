import i18next from 'i18next';

import common_vi from "../translations/vi/common.json";
import common_en from "../translations/en/common.json";

i18next.init({
    interpolation: {escapeValue: false},  // React already does escaping
    lng: 'vi',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        vi: {
            common: common_vi
        },
    },
});

export {i18next};