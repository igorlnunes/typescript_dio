//Dio Banking
import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Igor', 10);

peopleAccount.setName('Nathy');
console.log(peopleAccount.getName());
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('DioAccount', 10);
companyAccount.deposit();

