import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(_doc_id: number, _name: string, _accountNumber: number) {
    super(_name, _accountNumber);
    this.doc_id = _doc_id;
  }
}