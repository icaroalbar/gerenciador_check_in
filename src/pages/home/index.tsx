
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columns } from "@/pages/home/components/partials/datatable/columns";
import { DataTable } from "@/pages/home/components/partials/datatable/data-table";
import { useFetch } from "@/hooks/useFetch";
import { APIResponse } from "@/pages/home/IPerson";

const Home: React.FC = () => {
  const { data, error } = useFetch<APIResponse>(
    "https://zaiuk8m065.execute-api.us-east-1.amazonaws.com/dev/invited"
  );

  console.log(data?.response);

  if (error) return <div>Falha ao carregar</div>;
  if (!data) return <div>Carregando...</div>;
  if (!data.response) return <div>Sem dados</div>;

  const confirmadosCount = data.response.filter(item => item.confirmado.BOOL === true).length;
  const pendentesCount = data.response.filter(item => item.confirmado.BOOL !== true).length;

  return (
    <section className="flex flex-col gap-y-2 justify-center" >
      <Card className="container p-0 mt-7 rounded">
        <CardHeader>
          <CardTitle className="text-slate-500 text-xl">Lista de convidados</CardTitle>
          <div className="flex items-center gap-x-3 font-medium text-md">
            <p className="text-slate-500">Total: {data.response.length}</p>
            <p className="text-lime-500">Confirmados: {confirmadosCount}</p>
            <p className="text-primary">Pendentes: {pendentesCount}</p>
          </div>
        </CardHeader>
      </Card>
      <Card className="container py-4 px-0 mb-7 rounded">
        <CardContent>
          <DataTable columns={columns} data={data.response} />
        </CardContent>
      </Card>
    </section>
  );
};

export default Home;
