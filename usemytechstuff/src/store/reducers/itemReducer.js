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
  CANCEL_ITEM_FORM,
  FETCH_ITEMBYID_START,
  FETCH_ITEMBYID_SUCCESS,
  FETCH_ITEMBYID_FAIL,
  RENT_ITEM_START,
  RENT_ITEM_SUCCESS,
  RENT_ITEM_FAIL
} from "../actions";

const initialState = {
  items: [],
  item: {},
  itemStatus: {
    isFetchingItems: false,
    itemsFetched: false,
    isAddingItem: false,
    itemAdded: false,
    isUpdatingItem: false,
    itemUpdated: false,
    isDeletingItem: false,
    itemDeleted: false,
    isRentingItem: false
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
          itemsFetched: true
        },
        error: null
      };

    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isFetchingItems: true,
          itemsFetched: false
        },
        error: action.payload
      };

    case FETCH_ITEMBYID_START:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isFetchingItems: true,
          itemsFetched: false
        },
        error: null
      };

    case FETCH_ITEMBYID_SUCCESS:
      return {
        ...state,
        item: action.payload,
        itemStatus: {
          ...state.itemStatus,
          isFetchingItems: false,
          itemsFetched: true
        },
        error: null
      };

    case FETCH_ITEMBYID_FAIL:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isFetchingItems: true,
          itemsFetched: false
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
        items: action.payload.items,
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
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isUpdatingItem: true,
          itemUpdated: false
        },
        error: null
      };

    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
       ] ,
        itemStatus: {
          ...state.itemStatus,
          isUpdatingItem: false,
          itemUpdated: true,
        },
        error: null
      };

    case UPDATE_ITEM_FAIL:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isUpdatingItem: true
        },
        error: action.payload
      };

    case DELETE_ITEM_START:
      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          isDeletingItem: true,
          itemDeleted: false
        },
        error: null
      };

    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.itemId !== action.payload),
        itemStatus: {
          ...state.itemStatus,
          isDeletingItem: false,
          itemDeleted: true
        },
        error: null
      };

    case DELETE_ITEM_FAIL:
      return {
        ...state,
        itemStatus: {
          isDeletingItem: true,
          itemDeleted: false
        },
        error: action.payload
      };

    case RENT_ITEM_START:
      return {
        ...state,
        itemStatus: {
          isRentingItem: true
        },
        error: null
      };
    case RENT_ITEM_SUCCESS:
      return {
        ...state,
        // items: [
        //   ...state.items,
        //   action.payload
        // ],
        item: action.payload,
        itemStatus: {
          isRentingItem: false
        }
      };
    case RENT_ITEM_FAIL:
      return {
        ...state,
        itemStatus: {
          isRentingItem: true
        },
        error: action.payload
      };

    default:
      return state;
  }
};

export default itemReducer;
