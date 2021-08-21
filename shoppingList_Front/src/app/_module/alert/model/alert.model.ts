import { AlertTypeEnum } from "./enum/alert-type.enum";

export class Alert {

    type!: AlertTypeEnum;
    message?: string;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}
