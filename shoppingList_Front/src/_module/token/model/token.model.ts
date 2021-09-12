import { TokenStatusEnum } from "./enum/token-status.enum";

export class Token {

  name!: string;
  status: TokenStatusEnum = TokenStatusEnum.Validating; // TODO - Centralise Status Mngt
  value: string | undefined;

  constructor(init?: Partial<Token>) {
    Object.assign(this, init);
  }
}