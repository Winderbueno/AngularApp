import { AlertTypeEnum } from "./enum/alert-type.enum";

export class Alert {
    id!: string;
    type!: AlertTypeEnum;
    message?: string;
    keepAfterRouteChange?: boolean;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}
