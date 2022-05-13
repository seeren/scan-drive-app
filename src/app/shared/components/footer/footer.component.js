import { Component, RouterComponent } from 'appable';

import { TranslationService } from '../../services/translation.service';

import template from './footer.component.html';

export class FooterComponent extends Component {

    translate = TranslationService;

    #translationObserver = () => this.update();

    constructor() {
        super('app-footer', template);
    }

    onUpdate() {
        TranslationService.detach(this.#translationObserver);
        TranslationService.attach(this.#translationObserver);
    }

    policy() {
        RouterComponent.navigate('policy', { lang: this.translate.getLanguage() });
    }

}
