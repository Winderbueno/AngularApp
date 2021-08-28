import { TypedAction } from "@ngrx/store/src/models";

export class Timer {

    timeOutId!: string;

    name!: string;
    time?: number;
    action!: TypedAction<string>;

    constructor(init?:Partial<Timer>) {
        Object.assign(this, init);
    }
}
