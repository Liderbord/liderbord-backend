async function getLiderbordById(id) {
  const resource="Resource";
  const logger = Moralis.Cloud.getLogger();
  

  const query = new Moralis.Query("Liderbord");
  query.equalTo("objectId", id);

  const results = await query.find();
  
 
  const liderbord = {
    topic: results[0].get("topic"),
    description: results[0].get("description"),
    tags:results[0].get("tags")
   
  };

  const resourceQuery = new Moralis.Query("Resource");
  resourceQuery.equalTo("liderbordID", id);

  const resources = await resourceQuery.find();
logger.info("ressource"+resources[0].get("title"));

var ressourcestab = [];

for (let i = 0; i < resources.length; i++) {
    const objectResource = {
        title:resources[i].get("title"),
        type:resources[i].get("format"),
        link:resources[i].get("link"),
        upVotes: 144,
        downVotes: 18
    }
    ressourcestab.push(objectResource);
}
const resourcesObject= {
 resources:ressourcestab
}

const liderbordFinal= Object.assign({},liderbord,resourcesObject);
logger.info("liderbordfinal"+liderbordFinal);

try {
  return liderbordFinal;
} catch (error) {
  logger.error("Could not find liderbord with id: " + id);
  return {};
}

}
