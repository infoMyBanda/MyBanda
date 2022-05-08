exports = async function createNewUserDocument({user}) {
  const cluster = context.services.get("mongodb-atlas");
  const users = cluster.db("tracker").collection("User");
  return users.insertOne({
    _id: user.id,
    nome: user.data.nome,
    cognome: user.data.cognome,
    strumento: user.data.strumento,
    telefono: user.data.telefono
  });
};
