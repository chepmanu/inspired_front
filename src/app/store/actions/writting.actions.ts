import { Action } from '@ngrx/store';

export enum writtingTypes {
    FETCH = "[Writting] Fetch request",
    FETCH_SUCCESS = "[Writting] Fetch request success",
    FETCH_FAILED = "[Writting] Fetch request fail",
    POST = "[Writting] Post request",
    POST_SUCCESS = "[Writting] Post success",
    POST_FAILED = "[Writting] Post fail"
}

export class getWrittings implements Action {
    readonly type = writtingTypes.FETCH;

}

export class getWrittingsSuccess implements Action {
    readonly type = writtingTypes.FETCH_SUCCESS;
    constructor(public payload: any){}
}

export class getWrittingsFail implements Action {
    readonly type = writtingTypes.FETCH_FAILED;
    constructor(public payload: any){}
}

export class postWritting implements Action {
    readonly type = writtingTypes.POST;
    constructor(public payload: {title: string, body: string, description: string, url: string}){}
}

export class postWrittingSuccess implements Action {
    readonly type = writtingTypes.POST_SUCCESS;
    constructor(public payload: any){}
}

export class postWrittingFailed implements Action {
    readonly type = writtingTypes.POST_FAILED;
    constructor(public payload: any){}
}

export type writtingActions = getWrittings
    | getWrittingsSuccess
    | getWrittingsFail
    | postWritting
    | postWrittingSuccess
    | postWrittingFailed
