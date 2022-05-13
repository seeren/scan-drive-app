import { Component } from 'appable';

import template from './not-found.component.html';

import { TranslationService } from '../../services/translation.service';

export class NotFoundComponent extends Component {

    translate = TranslationService;

    constructor() {
        super('app-not-found', template);
    }

}
