import { Account } from "@account/model/account.model";
import { Category } from "@module/category/model/category.model";
import { Item } from "./item.model";

export interface ShoppingList {

  modelId?: string;
  id: string;

  active?: boolean;
  name?: string;
  description?: string;

  account:Account;
  accountId?: string;

  category?: Category;
  categoryId?: string;

  items?: Item[];
  itemIds?: string[];
}
