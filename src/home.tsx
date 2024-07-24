import { columns } from "./datatable/columns";
import { DataTable } from "./datatable/data-table";
import { useFetch } from "./hooks/useFetch";
import { APIResponse } from "./IPerson";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home: React.FC = () => {
  const { data, error } = useFetch<APIResponse>(
    "http://localhost:8080/dev/invited"
  );

  if (error) return <div>Falha ao carregar</div>;
  if (!data) return <div>Carregando...</div>;
  if (!data.result) return <div>Sem dados</div>;

  const confirmadosCount = data.result.filter(item => item.confirmado.BOOL === true).length;
  const pendentesCount = data.result.filter(item => item.confirmado.BOOL !== true).length;

  return (
    <div className="flex justify-center">
      <Card className="container p-0 m-7">
        <CardHeader>
          <CardTitle className="text-slate-500 text-xl">Lista de convidados</CardTitle>
          <div className="flex items-center gap-x-3 font-medium text-md">
            <p className="text-slate-500">Total: {data.result.length}</p>
            <p className="text-lime-500">Confirmados: {confirmadosCount}</p>
            <p className="text-primary">Pendentes: {pendentesCount}</p>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data.result} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
