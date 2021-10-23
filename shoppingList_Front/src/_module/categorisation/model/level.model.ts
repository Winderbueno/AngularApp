import { Category } from "./category.model";

export class Level {
  id!: string;
  name?: string;

  categoryList?:Category[];
  categoryIds?:string[];
}
