export interface IUpdateRequest {
  id: {
    S: string;
  };
}
export interface IPerson extends IUpdateRequest{
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
  response: IPerson[];
}
