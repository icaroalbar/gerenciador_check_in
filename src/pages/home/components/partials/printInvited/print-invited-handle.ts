// src/utils/printUtils.ts

import { getPrintTemplate } from "./template-print";

export const handlePrint = <TData>(row: TData) => {
  const printContent = getPrintTemplate(row);
  const newWindow = window.open("", "", "width=1200,height=800");
  if (newWindow) {
    newWindow.document.open();
    newWindow.document.write(printContent);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
  }
};
