import { Component } from 'appable';

import template from './download.component.html';

import { MetaService } from '../shared/services/meta.service';
import { TranslationService } from '../shared/services/translation.service';

export class DownloadComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-download', template);
    }

    update() {
        super.update();
        MetaService.setImage('assets/images/icon.png');
        MetaService.preventInternalLink();
    }

}
