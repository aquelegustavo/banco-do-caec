const mercadopago = require("mercadopago");
// Adicione as credenciais
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

export default function handler(req, res) {
  // Cria um objeto de preferência

  let preference = {
    items: [
      {
        title: "Pagamento Cartão de Crédito | Produtos CAEC",
        unit_price: Number(req.query.price),
        quantity: 1,
      },
    ],
    payment_methods: {
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
    },
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response);
      res.status(307).redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
      res.status(307).redirect(`/error`);
    });
}
