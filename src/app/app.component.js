import { Component, StateService } from 'appable';

import template from './app.component.html';

import { FooterComponent } from './shared/components/footer/footer.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

export class AppComponent extends Component {

    constructor() {
        super('app', template, [
            new NavigationComponent(),
            new FooterComponent(),
        ]);
        StateService.attach(() => window.scrollTo(0, 0));
    }

}
