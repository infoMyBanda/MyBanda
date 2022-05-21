exports = async function(id, n, c, t, s) {
  const collection = context.services.get("mongodb-atlas").db("MyBandaDB").collection("Musicante");
  const filter = {_partition: `user=${id}`};
  const uptUtente = await collection.findOne(filter);
  if (uptUtente == null) {
    return {error: `User ${id} not found`};
  }

  try {
    return await collection.updateOne(
      {_id: uptUtente._id},
      { $set: {
          nome: n,
          cognome: c,
          telefono: t,
          strumento: s
        }
      });
  } catch (error) {
    return {error: error.toString()};
  }
};
