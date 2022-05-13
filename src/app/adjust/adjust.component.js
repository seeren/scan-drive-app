import { Component, RouterComponent } from 'appable';

import template from './adjust.component.html';

import { FeatureHeaderComponent } from '../shared/components/features/feature-header/feature-header.component';
import { MetaService } from '../shared/services/meta.service';
import { TranslationService } from '../shared/services/translation.service';

export class AdjustComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-adjust', template, [
            new FeatureHeaderComponent(),
        ]);
    }

    update() {
        super.update();
        MetaService.setImage(`assets/images/screen-device-${this.translate.getLanguage()}-ajuster.png`);
        MetaService.preventInternalLink();
    }

    assemble() {
        RouterComponent.navigate('assemble', { lang: this.translate.getLanguage() });
    }

}
