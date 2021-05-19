import { AlertTypeEnum } from "./enum/alert-type.enum";

export class Alert {
    id!: string;
    type!: AlertTypeEnum;
    message!: string;
    autoClose!: boolean;
    keepAfterRouteChange?: boolean;
    fade!: boolean;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}