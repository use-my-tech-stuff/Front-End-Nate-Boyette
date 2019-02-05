

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
  items: [],
  itemStatus: {
    isFetchingItems: false,
    itemsFetched: false,
    isAddingItem: false,
    itemAdded: false,
    isUpdatingItem: false,
    itemUpdated: false,
    isDeletingItem: false,
    itemDeleted: false
  },
  error: null
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isFetchingItems: true
        }
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        itemStatus: {
          ...state.itemStatus,
          isFetchingItems: false,
          itemsFetched: true,
        },
        error: null

      };

    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isFetchingItems: true,
        },
        error: action.payload
      };

    case ADD_ITEM_START:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isAddingItem: true
        }
      };

    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isAddingItem: false,
          itemAdded: true
        },
        error: null
      };

    case ADD_ITEM_FAIL:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isAddingItem: true,
          itemAdded: false
        },
        error: action.payload
      };

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
