import { Category } from "./category.model";
import { Level } from "./level.model";

export class Categorisation {

  id!: string;

  levelList?:Level[];
  levelIds?:string[];

  categoryList?:Category[];
  categoryIds?:string[];
}
