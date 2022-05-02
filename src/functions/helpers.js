async function getLiderbordById(id) {
  const logger = Moralis.Cloud.getLogger();
  const Liderbord = Moralis.Object.extend("Liderbord");

  const query = new Moralis.Query("Liderbord");
  query.equalTo("objectId", "xqUbn8VFXliC42VZ8MXPEURL");

  const results = await query.find();
  const datas = [results[0].topic,results[0].description,results[0].tags]

  try {
    return datas;
  } catch (error) {
    logger.error("Could not find liderbord with id: " + id);
    return {};
  }
}
