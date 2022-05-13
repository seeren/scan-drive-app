import { Component } from 'appable';

import template from './support.component.html';

import { MetaService } from '../shared/services/meta.service';
import { TranslationService } from '../shared/services/translation.service';

export class SupportComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-support', template);
    }

    update() {
        super.update();
        MetaService.setImage('assets/images/icon.png');
        MetaService.preventInternalLink();
    }

}
