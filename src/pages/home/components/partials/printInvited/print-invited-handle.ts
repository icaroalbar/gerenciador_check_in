import axios from "axios";
import { getPrintTemplate } from "./template-print";
import { IPerson } from "@/pages/home/IPerson";

export const handlePrint = async (row: IPerson) => {
  // const printContent = getPrintTemplate(row);
  // const newWindow = window.open("", "", "width=1200,height=800");

  // if (newWindow) {

  await axios.post(
    `https://zaiuk8m065.execute-api.us-east-1.amazonaws.com/dev/invited/confirm`,
    { id: row.id.S },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  //   newWindow.document.open();
  //   newWindow.document.write(printContent);
  //   newWindow.document.close();
  //   newWindow.focus();
  //   newWindow.print();
  //   newWindow.close();
};
// };
