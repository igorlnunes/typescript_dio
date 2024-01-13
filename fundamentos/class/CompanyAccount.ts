import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  constructor(_name: string, _accountNumber: number) {
    super(_name, _accountNumber);
  }

  getLoan() {
    console.log('The company has done a loan!');
  }

  deposit = (): void => {
    console.log("The company has deposited with success!");
  }
}