import { Component, RouterComponent } from 'appable';

import template from './assemble.component.html';

import { FeatureHeaderComponent } from '../shared/components/features/feature-header/feature-header.component';
import { MetaService } from '../shared/services/meta.service';
import { TranslationService } from '../shared/services/translation.service';

export class AssembleComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-assemble', template, [
            new FeatureHeaderComponent(),
        ]);
    }

    update() {
        super.update();
        MetaService.setImage(`assets/images/screen-device-${this.translate.getLanguage()}-assembler.png`);
        MetaService.preventInternalLink();
    }

    exportComponent() {
        RouterComponent.navigate('export', { lang: this.translate.getLanguage() });
    }

}
