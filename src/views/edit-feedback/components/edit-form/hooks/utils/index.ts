import { ProductRequest } from "../../../../../../lib/types";

export function updateList(allItems: any, itemToUpdate: ProductRequest) {
  const newList = [...allItems];
  const index = newList.findIndex((el) => el.id === itemToUpdate.id);
  newList[index] = itemToUpdate;
  return newList;
}
