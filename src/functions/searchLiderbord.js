Moralis.Cloud.define("searchLiderbord", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  
    const name = request.params.name;
    
    const query = new Moralis.Query("Liderbord");
    query.matches("topic", name.toLowerCase());
    
    
    const queryTag = new Moralis.Query("Liderbord");
    queryTag.equalTo("tags", name.toLowerCase());

    const mainQuery = Moralis.Query.or(query,queryTag);

    const results = await mainQuery.find();
    logger.info(results);


    let liderbordTab = [];

    for(i=0;i<results.length;i++){
      const resourceQuery = new Moralis.Query("Resource");
      resourceQuery.equalTo("liderbordID", results[i].id);

      const resources = await resourceQuery.find();
      
      let liderbord = {
        id: results[i].id,
        topic: results[i].get("topic"),
        description: results[i].get("description"),
        tags: results[i].get("tags"),
        nbResources: Object.keys(resources).length
      }
      logger.info("objectId" + results[i].id);
      
      
      liderbordTab.push(liderbord);
    }



    return liderbordTab;
  });