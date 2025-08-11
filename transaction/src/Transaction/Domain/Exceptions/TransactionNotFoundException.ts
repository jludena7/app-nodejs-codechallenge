export class TransactionNotFoundException extends Error {
    constructor(transactionExternalId: string) {
        super(`Transaction with ID ${transactionExternalId} not found`);
        this.name = 'TransactionNotFoundException';

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TransactionNotFoundException);
        }
    }
}
