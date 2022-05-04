Moralis.Cloud.define("searchLiderbord", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  
    const name = request.params.name;
    
    const query = new Moralis.Query("Liderbord");
    query.startsWith("topic", name);
    const results = await query.find();

    let liderbordTab = [];

    for(i=0;i<results.length;i++){
      const resourceQuery = new Moralis.Query("Resource");
      resourceQuery.equalTo("liderbordID", results[i].get("objectId"));

      const resources = await resourceQuery.find();
      
      for (let j=0; j<resources.length; j++){
        logger.info(resources[j].get("title"));
      }
      
      
      let liderbord = {
        id: results[i].get("objectId"),
        topic: results[i].get("topic"),
        description: results[i].get("description"),
        tags: results[i].get("tags"),
        nbResources: Object.keys(resources).length
      }
      logger.info("objectId" + results[i].get("objectId"));
      
      
      logger.info("liderbord.nbResources" + liderbord.nbResources);

      liderbordTab.push(liderbord);
    }



    return liderbordTab;
  });