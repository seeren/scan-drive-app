import { Component, RouterComponent } from 'appable';

import template from './feature-header.component.html';

import { TranslationService } from '../../../services/translation.service';

export class FeatureHeaderComponent extends Component {

    routeName;

    translate = TranslationService;

    constructor() {
        super('app-feature-header', template);
    }

    onInit() {
        this.routeName = RouterComponent.get()?.name;
    }

}
