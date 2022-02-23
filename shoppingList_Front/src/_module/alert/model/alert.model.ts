import { AlertTypeEnum } from "./alert-type.enum";

export class Alert {

    type!: AlertTypeEnum;
    message: string = 'Default Alert Message';

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}
