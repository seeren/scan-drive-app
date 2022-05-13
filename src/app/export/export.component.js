import { Component, RouterComponent } from 'appable';

import template from './export.component.html';

import { FeatureHeaderComponent } from '../shared/components/features/feature-header/feature-header.component';
import { MetaService } from '../shared/services/meta.service';
import { TranslationService } from '../shared/services/translation.service';

export class ExportComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-export', template, [
            new FeatureHeaderComponent(),
        ]);
    }

    update() {
        super.update();
        MetaService.setImage(`assets/images/screen-device-${this.translate.getLanguage()}-exporter.png`);
        MetaService.preventInternalLink();
    }

    download() {
        RouterComponent.navigate('download', { lang: this.translate.getLanguage() });
    }

}
