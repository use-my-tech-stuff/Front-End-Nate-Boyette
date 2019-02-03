import { tempItems } from "./tempData";

import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  UPDATE_ITEM_START,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  CANCEL_ITEM_FORM
} from "../actions";


const initialState = {
  items: tempItems,
  itemStatus: {
    isFetchingItems: false,
    itemsFetched: false,
    isAddingItem: false,
    itemAdded: false,
    isUpdatingItem: false,
    itemUpdated: false,
    isDeletingItem: false,
    itemDeleted: false
  }
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_START:
      return {};

    case FETCH_ITEMS_SUCCESS:
      return {};

    case FETCH_ITEMS_FAIL:
      return {};

    case ADD_ITEM_START:
      return {};

    case ADD_ITEM_SUCCESS:
      return {};

    case ADD_ITEM_FAIL:
      return {};

    case UPDATE_ITEM_START:
      return {};

    case UPDATE_ITEM_SUCCESS:
      return {};

    case UPDATE_ITEM_FAIL:
      return {};

    case DELETE_ITEM_START:
      return {};

    case DELETE_ITEM_SUCCESS:
      return {};

    case DELETE_ITEM_FAIL:
      return {};

    case CANCEL_ITEM_FORM:
      return {};

    default:
      return state;
  }
};

export default itemReducer;
