import { privateClient } from "../clients/private.client";

const transactionApi = {
    postTransaction: (transaction) => {
        return privateClient.post('/Transactions/Post', transaction);
    },
    getAllTransaction: () => {
        return privateClient.get('/Transactions/GetAll');
    },
    updateTransaction: (id, isBanking) => {
        return privateClient.put(`/Transactions/UpdateTransactionForAdminOnly?transactionId=${id}&isBanking=${isBanking}`, "");
    },
}

export default transactionApi;
