import { Component, RouterComponent } from 'appable';

import template from './scan-drive.component.html';

import { MetaService } from '../shared/services/meta.service';
import { TranslationService } from '../shared/services/translation.service';

export class ScanDriveComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('scan-drive', template);
    }

    onUpdate() {
        MetaService.setImage('assets/images/logo.png');
        MetaService.preventInternalLink();
    }

    navigate(rotueName) {
        RouterComponent.navigate(rotueName, { lang: this.translate.getLanguage() });
    }

}
