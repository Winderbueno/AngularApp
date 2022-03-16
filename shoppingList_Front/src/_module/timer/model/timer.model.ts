import { TypedAction } from "@ngrx/store/src/models";

export class Timer {

    timerId!: string;
    time!: number;

    timeoutHandler!: NodeJS.Timeout; // Id of Node.JS Timeout Created
    action?: TypedAction<string>;

    constructor(init?:Partial<Timer>) {
        Object.assign(this, init);
    }
}
