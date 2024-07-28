export const getPrintTemplate = (person: any): string => {
  const { nome, cidade, uf } = person;

  // Acessa os valores internos dos objetos
  const nomeValue = nome.S;
  const cidadeValue = cidade.S;
  const ufValue = uf.S;

  return `
    <html>
      <head>
        <style>
          @media print {
            @page {
            size: 9cm 4cm;
            margin: 0;
          }
            body {
              font-family: Arial, sans-serif;
              width: 9cm;
              height: 4cm;
              margin: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            h1 {
              font-size: 22px;
              margin: 0;
            }
            p {
              font-size: 16px;
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        <div>
          <h1>${nomeValue}</h1>
          <p>${cidadeValue}/${ufValue}</p>
          <p>Prescritor</p>
        </div>
      </body>
    </html>
  `;
};
