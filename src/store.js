import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"

import toDo from "./redusers/toDoList"

export default createStore(toDo, [], applyMiddleware(logger))
