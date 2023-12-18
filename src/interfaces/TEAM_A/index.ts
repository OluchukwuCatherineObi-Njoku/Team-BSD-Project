export interface IJOB {
  title: string;
  salary: number;
}

export interface IPERSON {
  name: string;
  age: number;
  jobs?: string[];
}
