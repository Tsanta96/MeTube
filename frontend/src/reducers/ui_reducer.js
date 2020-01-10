import { UPDATE_SEARCH_FIELD } from '../actions/ui_actions';
import { merge } from 'lodash';

const uiReducer = (state={},action) => {
   
    Object.freeze(state);

  switch(action.type){
    case UPDATE_SEARCH_FIELD: 
      return merge(newState, {search: action.search})
  }
}

export default uiReducer ;