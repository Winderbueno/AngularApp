export class Enum {

  name!: string;
  values?: string[];

  constructor(init?:Partial<Enum>) {
    Object.assign(this, init);
  }
}
