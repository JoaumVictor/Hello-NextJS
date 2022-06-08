const DB = [
  {
    name: "Bescoito",
    last_name: "De Polvilho",
    age: 19,
  },
  {
    name: "Jaiminho",
    last_name: "Carteiro",
    age: 19,
  },
];

const TOKEN = "j1o2a3o4v5i6c7t8o9r0";

const tokenValidation = (token) => (token === TOKEN ? true : false);

const bodyValidation = ({ name, last_name, age }) => {
  if (
    typeof name === "string" &&
    typeof last_name === "string" &&
    typeof age === "number"
  )
    return true;
  return false;
};

export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json(DB);
  if (req.method === "POST") {
    if (tokenValidation(req.body.token) && bodyValidation(req.body)) {
      const newObj = [
        ...DB,
        {
          name: req.body.name,
          last_name: req.body.last_name,
          age: req.body.age,
        },
      ];
      res
        .status(201)
        .json([{ message: "Objeto criado com sucesso!", data: newObj }]);
    }
    res.status(401).json({ error: "Token inválido ou corpo inválido!" });
  }
  res.status(406).json({ error: "Método inválido!" });
}
