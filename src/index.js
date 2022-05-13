import { RouterComponent } from 'appable';

import { AppComponent } from './app/app.component';
import { ScanDriveComponent } from './app/scan-drive/scan-drive.component';
import { AdjustComponent } from './app/adjust/adjust.component';
import { AssembleComponent } from './app/assemble/assemble.component';
import { ExportComponent } from './app/export/export.component';
import { FormatComponent } from './app/format/format.component';
import { DownloadComponent } from './app/download/download.component';
import { PolicyComponent } from './app/policy/policy.component';
import { SupportComponent } from './app/support/support.component';

window.addEventListener('load', () => {

    RouterComponent
        .add('/:lang/', 'scanDrive', ScanDriveComponent)
        .add('/:lang/adjust', 'adjust', AdjustComponent)
        .add('/:lang/assemble', 'assemble', AssembleComponent)
        .add('/:lang/export', 'export', ExportComponent)
        .add('/:lang/format', 'format', FormatComponent)
        .add('/:lang/download', 'download', DownloadComponent)
        .add('/:lang/policy', 'policy', PolicyComponent)
        .add('/:lang/support', 'support', SupportComponent)
        .run(new AppComponent());

});
