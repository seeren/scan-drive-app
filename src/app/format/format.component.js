import { Component, RouterComponent } from 'appable';

import template from './format.component.html';

import { FeatureHeaderComponent } from '../shared/components/features/feature-header/feature-header.component';
import { TranslationService } from '../shared/services/translation.service';
import { MetaService } from '../shared/services/meta.service';

export class FormatComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-format', template, [
            new FeatureHeaderComponent(),
        ]);
    }

    update() {
        super.update();
        MetaService.setImage(`assets/images/screen-device-${this.translate.getLanguage()}-formater.png`);
        MetaService.preventInternalLink();
    }

    adjust() {
        RouterComponent.navigate('adjust', { lang: this.translate.getLanguage() });
    }

}
