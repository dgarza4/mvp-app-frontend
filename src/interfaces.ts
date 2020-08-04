export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

export interface IListResults<T> {
  data: T[];
  metadata: {
    total: number;
    pages: number;
    count: number;
    offset: number;
    limit: number | null;
  };
}
