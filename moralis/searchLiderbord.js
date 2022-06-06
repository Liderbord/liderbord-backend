Moralis.Cloud.define("searchLiderbord", async (request) => {
  const logger = Moralis.Cloud.getLogger();

  const name = request.params.name;

  const tagsArray = name.split(" ");

  Queries = new Moralis.Query("Liderbord");
  Queries.equalTo("tags", "");

  const liderbordQuery = new Moralis.Query("Liderbord");
  liderbordQuery.matches("topic", name.toLowerCase());

  Queries = Moralis.Query.or(liderbordQuery, Queries);

  logger.info("tagsArray.length " + tagsArray.length);
  tagsArray.forEach(element => {
    const tag = new Moralis.Query("Liderbord");
    tag.equalTo("tags", element.toLowerCase());
    logger.info(element);
    Queries = Moralis.Query.or(tag, Queries);
  })




  //const mainQuery = Moralis.Query.or(query,queryTag);

  const results = await Queries.find();
  logger.info(results);


  let liderbordTab = [];

  for (i = 0; i < results.length; i++) {
    const resourceQuery = new Moralis.Query("Resource");
    resourceQuery.equalTo("liderbordID", results[i].id);

    const resources = await resourceQuery.find();

    
    let votes = 0;

    // get votes for each resource and add them all 
    for (j = 0; j < resources.length; j++) {
      // Get Votes
      const queryVote = new Moralis.Query("Vote");
      queryVote.equalTo("resourceID", resources[j].id);
      const resultsVote = await queryVote.find();
      votes = votes + Object.keys(resultsVote).length;
    }

    // init liderbord 
    let liderbord = {
      id: results[i].id,
      topic: results[i].get("topic"),
      description: results[i].get("description"),
      tags: results[i].get("tags"),
      nbResources: Object.keys(resources).length,
      nbVotes: votes
    }

    logger.info("objectId" + results[i].id);




    liderbordTab.push(liderbord);
  }



  return liderbordTab;
});