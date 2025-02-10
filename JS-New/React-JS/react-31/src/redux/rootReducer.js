import { combineReducers } from "redux";
import {messageReducer} from './Msg/message.reducer'
import { ProductReducer } from "./product/product.reducer";

let rootReducer = combineReducers({"product":ProductReducer, 
                                    "info":messageReducer
                                  })

export {rootReducer}