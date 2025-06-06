import { PAGINATION_ORDER } from "../enums/common";

export type CommonResponse<T> = {
    status: boolean;
    statusCode: number;
    message: string;
    data: T;
};

// export type CursorBasedResponse<T> = {
//     status: boolean;
//     statusCode: number;
//     message: string;
//     data:{
//         data: T;
//         nextCursor: number;
//         hasNext: boolean;
//     }
// };

export type CursorBasedResponse<T> = CommonResponse<{
    data: T;
    nextCursor: number|null;
    hasNext: boolean;
}>;

// order?: asc|desc ; enum 처리 안할 때
export type PaginationDto={
    cursor?: number;
    limit?: number;
    search?: string;
    order?: PAGINATION_ORDER; //enum 처리
};