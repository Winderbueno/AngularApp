import { Level } from "./level.model";

export class Category {

  id!: string;
  name!: string;

  levelList?:Level;
  levelId?:string;
}
