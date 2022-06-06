Moralis.Cloud.define("getLiderbordById", async (request) => {
  const id = request.params.id;
  return await getLiderbordById(id);
});
