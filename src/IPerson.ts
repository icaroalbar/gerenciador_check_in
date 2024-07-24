export interface IPerson {
  nome: {
    S: string;
  };
  confirmado: {
    BOOL: boolean;
  };
  cidade: {
    S: string;
  };
  uf: {
    S: string;
  };
}

export interface APIResponse {
  result: IPerson[];
}
