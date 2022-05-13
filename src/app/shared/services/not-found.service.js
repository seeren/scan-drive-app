import { RouterComponent, Service } from 'appable';

import { NotFoundComponent } from '../components/not-found/not-found.component';

export const NotFoundService = new class extends Service {

    throw() {
        if (RouterComponent.components.length) {
            RouterComponent.detach(RouterComponent.components[0]);
        }
        RouterComponent.attach(new NotFoundComponent());
        RouterComponent.update();
    }

}();
