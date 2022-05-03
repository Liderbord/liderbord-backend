Moralis.Cloud.define("searchLiderbord", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  
    const name = request.params.name;
    
    const query = new Moralis.Query("Liderbord");
    query.startsWith("topic", name);
    const results = await query.find();

    let liderbordTab = [];

    for(i=0;i<results.length;i++){
      let liderbord = {
        topic: results[0].get("topic"),
        description: results[0].get("description"),
        tags: results[0].get("tags"),
      }
      liderbordTab.push(liderbord);
    }



    return liderbordTab;
  });