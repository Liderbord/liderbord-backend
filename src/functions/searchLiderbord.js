Moralis.Cloud.define("searchLiderbord", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  
    const name = request.params.name;
    
    const query = new Moralis.Query("Liderbord");
    query.startsWith("topic", name);
    const results = await query.find();

    let liderbordTab = [];
    

    for(i=0;i<results.length;i++){
      let liderbord = {
        id: results[i].get("objectId"),
        topic: results[i].get("topic"),
        description: results[i].get("description"),
        tags: results[i].get("tags"),
        nbResources: 0,
      }
      const resourceQuery = new Moralis.Query("Resource");
      resourceQuery.equalTo("liderbordID", liderbord.id);

      const resources = await resourceQuery.find();
      liderbord.nbResources =  resources.length;

      liderbordTab.push(liderbord);
    }



    return liderbordTab;
  });