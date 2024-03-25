export type listType = {
    isDone: boolean,
    value: string
  } 

export interface contextType { lists: listType[]; addList: (newList: listType)=>void;}
