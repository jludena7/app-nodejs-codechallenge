export class TransferTypeNotFoundException extends Error {
    constructor(transactionExternalId: string) {
        super(`TransferType with ID ${transactionExternalId} not found`);
        this.name = 'TransferTypeNotFoundException';

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TransferTypeNotFoundException);
        }
    }
}
