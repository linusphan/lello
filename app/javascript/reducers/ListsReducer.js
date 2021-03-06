export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const lists = action.board.lists.map((list) => {
      // exclude cards, bc we have a cards reducer
      const { cards, ...restOfList } = list;
      return restOfList;
    });
    // return the state's current list, concatated with this board's list
    // but with no duplicate lists
    // so that we cache prior requests
    const filteredLists = state.filter((list) => {
      return list.board_id !== action.board.id;
    });
    return filteredLists.concat(lists);
  } else if (action.type === 'LIST_TITLE_SUCCESS') { 
      // should be update_list_succes
      return state.map((list) => {
        if (list.id == action.list.id) {
          return action.list;
        } else {
          return list;
        }
      });
  } else if (action.type === 'CREATE_LIST_SUCCESS') {
    // action.list has the new list
    return state.concat(action.list);
  } else {
    return state;
  }
}