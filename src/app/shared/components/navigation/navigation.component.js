import { Component, RouterComponent, StateService } from 'appable';

import template from './navigation.component.html';

import { TranslationService } from '../../services/translation.service';
import { MetaService } from '../../services/meta.service';
import { NotFoundService } from '../../services/not-found.service';

export class NavigationComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-navigation', template);
        window.addEventListener('popstate', () => window.location.reload());
    }

    update() {
        if (!this.translate.getLanguage()) {
            this.translate.findLanguage();
        }
        if ('/' === window.location.pathname) {
            RouterComponent.navigate('scanDrive', { lang: this.translate.getLanguage() });
            return this.#updateWithMeta('scanDrive');
        }
        const state = StateService.get();
        let routeName = 'notFound';
        if (state.name && state.param.lang === this.translate.getLanguage()) {
            routeName = state.name;
        } else {
            NotFoundService.throw();
        }
        this.#updateWithMeta(routeName);
    }

    navigate(routeName, language = null) {
        RouterComponent.navigate(routeName, { lang: language ?? this.translate.getLanguage() });
        this.update();
        return false;
    }

    selectLanguage(url) {
        const language = url.split('/')[3];
        this.translate.setLanguage(language);
        if (RouterComponent.get()) {
            RouterComponent.detach(RouterComponent.components[0]);
            this.navigate(StateService.get().name, language);
        } else {
            RouterComponent.update();
            this.update();
        }
    }

    toogleMenu(burger) {
        const className = 'is-active';
        const navbar = window.document.getElementById('navbar');
        if (burger.classList.contains(className)) {
            burger.classList.remove(className);
            navbar.classList.remove(className);
        } else {
            burger.classList.add(className);
            navbar.classList.add(className);
        }
    }

    #updateWithMeta(routeName) {
        super.update();
        MetaService.update(routeName, this.translate);
        MetaService.preventInternalLink();
    }

}
