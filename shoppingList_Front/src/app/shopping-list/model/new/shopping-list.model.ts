import { Account } from "@account/model/account.model";
import { Categorisation } from "@module/categorisation/model/categorisation.model";
import { Item } from "./item.model";

export interface ShoppingList {

  modelId?: string;
  id: string;

  active?: boolean;
  name?: string;
  description?: string;

  account:Account;
  accountId?: string;

  categorisation?: Categorisation;
  categorisationId?: string;

  items?: Item[];
  itemIds?: string[];
}
