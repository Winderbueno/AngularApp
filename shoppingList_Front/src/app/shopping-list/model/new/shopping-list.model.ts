import { Account } from "@account/model/account.model";
import { Categorisation } from "./categorisation.model";
import { Item } from "./item.model";

export interface ShoppingList {

  modelId?: string;
  id: string;

  active?: boolean;
  name?: string;
  description?: string;

  account:Account;
  accountId?: string;

  categorisation?: Categorisation<Item>;
  categorisationId?: string;

  items?: Item[];
  itemIds?: string[];
}
