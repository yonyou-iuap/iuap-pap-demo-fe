import React, { Component } from 'react';
import { addLocaleData, IntlProvider,injectIntl } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import mirror, { connect,withRouter } from 'mirrorx';
import {getCookie} from "utils";
import Locale from 'bee-locale';
import zhCN from './locales/iuap_zh_CN';
import enUS from './locales/iuap_en_US';
import zhTW from './locales/iuap_zh_TW';
  
import tinperZh from 'bee-locale/build/zh_CN';    
import tinperTw from 'bee-locale/build/zh_TW';    
import tinperEn from 'bee-locale/build/en_US'; 


addLocaleData([...en, ...zh]);


function chooseLocale(locale){

    switch(locale){
        case 'en_US':
            return {tinper:tinperEn,pap:enUS};
            break;
        case 'zh_CN':
            return {tinper:tinperZh,pap:zhCN};
            break;
        case 'zh_TW':
            return {tinper:tinperTw,pap:zhTW};
            break;
        default:
            return {tinper:tinperEn,pap:enUS};
            break;
    }
}

let locale =  (getCookie('u_locale')||navigator.language.split('_')[0].replace(/-/,'_')||"en_US")
// let locale = 'zh_TW';
let intlModel = {
    name: "intl",
    initialState: {
        locale: locale,
        localeData:chooseLocale(locale).pap,
        tinperData:chooseLocale(locale).tinper
    },
    reducers: {
        updateState(state, data) {
            return {
                ...state,
                ...data
            };
        }
    }
}

mirror.model(intlModel);




class Inter extends Component {
    render() {
        let {locale, localeData,tinperData } = this.props;

        return (
            <Locale locale={tinperData}>
                <IntlProvider key={locale} locale={locale.replace(/_.+/ig,'')} messages={localeData} >
                    {this.props.children}
                </IntlProvider>
            </Locale>
        )
    }
};

let Intl = connect(state => state.intl)(Inter);


export default Intl;