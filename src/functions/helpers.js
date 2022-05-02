async function getLiderbordById(id) {
  const logger = Moralis.Cloud.getLogger();
  const Liderbord = Moralis.Object.extend("Liderbord");

  const query = new Moralis.Query("Liderbord");
  query.equalTo("objectId", id);

  const results = await query.find();
  //const datas = [results[0].topic,results[0].description,results[0].tags]
  //logger.info(results[0].get("topic"));
 
  const liderbord = {
    topic: results[0].get("topic"),
    description: results[0].get("description"),
    tags:results[0].get("tags")
   
  };


  try {
    return liderbord;
  } catch (error) {
    logger.error("Could not find liderbord with id: " + id);
    return {};
  }
}
