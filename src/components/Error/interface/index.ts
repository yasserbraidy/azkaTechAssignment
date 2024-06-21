export default interface IErrorAlert {
    message?: string;
    isError: boolean;
    statusCode?: number;

}

export interface IFetchingErrorAlert extends IErrorAlert {}

export interface IValidationErrorAlert extends Omit<IErrorAlert, "statusCode"> { }