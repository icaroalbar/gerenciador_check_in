"use client";

import { Button } from "@/components/ui/button";
import { IPerson } from "@/pages/home/IPerson";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, CircleAlert, CircleCheckBig } from "lucide-react";
import { handlePrint } from "../printInvited/print-invited-handle";
import PrintInvitedComponent from "../printInvited/print-invited-component";

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
    cell: ({ row, getValue }) => {
      const isConfirmed = getValue<boolean>();
      return <PrintInvitedComponent isConfirmed={isConfirmed} onClick={() => handlePrint(row.original)} />
    },
  },
];
