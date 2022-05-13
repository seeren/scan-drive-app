import { Service, StateService } from 'appable';

import { YamlService } from './yaml.service';

export const TranslationService = new class extends Service {

    #language;

    #yaml;

    isSupported(language) {
        return -1 !== this.getLanguages().indexOf(language);
    }

    getBrowserLanguage() {
        return window.navigator.language.substring(0, 3).toLocaleLowerCase();
    }

    getLanguages() {
        return YamlService.getLanguages();
    }

    findLanguage() {
        try {
            this.setLanguage(this.isSupported(StateService.get().param.lang)
                ? StateService.get().param.lang
                : this.getBrowserLanguage());
        } catch (error) {
            this.setLanguage('fr');
        }
    }

    setLanguage(language) {
        this.#yaml = YamlService.get(language);
        this.#language = language;
        window.document.documentElement.setAttribute('lang', this.#language);
        window.document.querySelector('meta[property="og:locale"]').setAttribute('content', this.#language);
        this.notify();
    }

    getLanguage() {
        return this.#language;
    }

    get(key) {
        return this.#yaml[key];
    }

}();
