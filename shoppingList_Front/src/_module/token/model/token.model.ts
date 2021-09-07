import { TokenStatusEnum } from "./enum/token-status.enum";

export class Token {

  usage: string | undefined;
  status: TokenStatusEnum = TokenStatusEnum.Invalid;
  token: string | undefined;

  constructor(init?: Partial<Token>) {
    Object.assign(this, init);
  }
}
