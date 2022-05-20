exports = async function onCreaNuovoUtente({user}) {
  const cluster = context.services.get("mongodb-atlas");
  const users = cluster.db("MyBandaDB").collection("Musicante");
  return users.insertOne({
    _id: user.id,
    _partition: `user=${user.id}`,
    email: user.data.email,
    canReadPartitions: [`user=${user.id}`],
    canWritePartitions: [`user=${user.id}`]
  });
};
