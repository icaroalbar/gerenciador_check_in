"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IPerson } from "@/IPerson";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Check, CircleAlert, CircleCheckBig, Printer } from "lucide-react";

export type Payment = IPerson;

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id.S",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nº
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ getValue }: any) => (
      <div className="text-center">{getValue()}</div>
    ),
  },
  {
    accessorKey: "nome.S",
    header: "Nome",
  },
  {
    accessorKey: "cidade.S",
    header: "Cidade",
  },

  {
    accessorKey: "uf.S",
    header: () => {
      return <div className="text-center">UF</div>;
    },
    cell: ({ getValue }: any) => (
      <div className="text-center">{getValue()}</div>
    ),
  },
  {
    accessorKey: "confirmado.BOOL",
    header: () => {
      return <div className="text-center">Status</div>;
    },
    cell: ({ getValue }) => {
      const isConfirmed = getValue<boolean>();
      return (
        <div className="flex justify-center">
          {isConfirmed ? (<div className="text-lime-500 font-medium uppercase flex items-center gap-x-2"><CircleCheckBig size={15} /> confirmado</div>) : (<div className="text-primary font-medium uppercase flex items-center gap-x-2"><CircleAlert size={15} /> não confirmado</div>)}
        </div>
      );
    },
  },
  {
    accessorKey: "confirmado.BOOL",
    header: () => {
      return <div className="text-center">Ação</div>;
    },
    cell: ({ getValue }) => {
      const isConfirmed = getValue<boolean>();
      return (
        <div className="flex justify-center">
          <AlertDialog>
            <AlertDialogTrigger className={`${!isConfirmed ? "bg-primary hover:bg-primary/80": "bg-lime-500 hover:bg-lime-500/80"}  flex items-center gap-x-2 transition-colors text-white font-medium rounded py-1 px-4`}>
            {!isConfirmed ? <><Check size={15} /> Confirmar</> : <><Printer size={15} /> Reimprimir</>}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirmar presença</AlertDialogTitle>
                <AlertDialogDescription>
                  Ao clicar em confirmar, você vai estar confirmando a presença do convidado e imprimir sua etiqueta.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => window.print()}>Confirmar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
