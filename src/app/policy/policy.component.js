import { Component } from 'appable';

import template from './policy.component.html';

import { TranslationService } from '../shared/services/translation.service';
import { MetaService } from '../shared/services/meta.service';

export class PolicyComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-policy', template);
    }

    update() {
        super.update();
        MetaService.setImage('assets/images/icon.png');
        MetaService.preventInternalLink();
    }

}
