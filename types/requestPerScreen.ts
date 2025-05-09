export interface RequestPerScreen {
    status:  number;
    message: string;
    data:    Datum[];
}

export interface Datum {
    screen:         null | string;
    total_requests: number;
}
