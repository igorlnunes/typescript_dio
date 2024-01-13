export abstract class DioAccount {
  private name: string;
  readonly accountNumber: number = 0;
  private status: boolean = true;

  constructor(_name: string, _accountNumber: number) {
    this.name = _name;
    this.accountNumber = _accountNumber;
  }

  setName = (_name: string): void => {
    this.name = _name;
    console.log("Name alterated successfully!");
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (): void => {
    if (this.validateStatus()) {
      console.log("Deposit has realized successfully!");
    }
  }

  withdraw = (): void => {
    console.log("Withdraw has realized successfully!");
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Invalid account!');
  }
}