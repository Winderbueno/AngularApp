export interface Category<Type> {
  id: string;
  name: string;

  contents: Type[];
  contentIds:string[];
}
