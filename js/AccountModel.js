class AccountModel {
    constructor() {
        this.accounts = [];
        this.balances = {};
    }

    addAccount(publicKeyString) {
        if (!this.accounts.includes(publicKeyString)) {
            this.accounts.push(publicKeyString);
            this.balances[publicKeyString] = 0;
        }
    }

    getBalance(publicKeyString) {
        if (!this.accounts.includes(publicKeyString)) {
            this.addAccount(publicKeyString);
        }
        return this.balances[publicKeyString];
    }

    updateBalance(publicKeyString, amount) {
        if (!this.accounts.includes(publicKeyString)) {
            this.addAccount(publicKeyString);
        }
        this.balances[publicKeyString] += amount;
    }
}
