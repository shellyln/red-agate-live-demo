
/** @jsx RedAgate.createElement */
import * as RedAgate             from 'red-agate/modules/red-agate';
import { App }                   from 'red-agate/modules/red-agate/app';


// tslint:disable-next-line:no-eval
export const requireDynamic = eval("require");


export { billngReportHandler,
         BillingStatement }      from './examples/billing';
export { default as billngData } from './examples/billing.data';
export { kanbanReportHandler }   from './examples/kanban';
export { default as kanbanData } from './examples/kanban.data';
export { fbaA4ReportHandler }    from './examples/fba-a4';
export { barcodeTestHandler }    from './examples/barcode-test';
