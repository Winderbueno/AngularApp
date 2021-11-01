import { Category } from "./category.model";
import { Level } from "./level.model";

export class Categorisation {

  id!: string;

  levels?:Level[];
  levelIds?:string[];

  categories?:Category[];
  categoryIds?:string[];
}
