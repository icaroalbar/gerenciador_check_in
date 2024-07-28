import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Check, Printer } from "lucide-react";

interface AlertDialogComponentProps {
  isConfirmed: boolean;
  onClick: () => void;
}

const PrintInvitedComponent: React.FC<AlertDialogComponentProps> = ({
  isConfirmed,
  onClick,
}) => {
  return (
    <div className="flex justify-center">
      <AlertDialog>
        <AlertDialogTrigger
          className={`${
            !isConfirmed
              ? "bg-primary hover:bg-primary/80"
              : "bg-lime-500 hover:bg-lime-500/80"
          }  flex items-center gap-x-2 transition-colors text-white font-medium rounded py-1 px-4`}
        >
          {!isConfirmed ? (
            <>
              <Check size={15} /> Confirmar
            </>
          ) : (
            <>
              <Printer size={15} /> Reimprimir
            </>
          )}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar presença</AlertDialogTitle>
            <AlertDialogDescription>
              Ao clicar em confirmar, você vai estar confirmando a presença do
              convidado e imprimir sua etiqueta.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onClick}>Confirmar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PrintInvitedComponent;
