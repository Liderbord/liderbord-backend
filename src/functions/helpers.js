async function getLiderbordById(id) {
  const resource = "Resource";
  const logger = Moralis.Cloud.getLogger();


  const query = new Moralis.Query("Liderbord");
  query.equalTo("objectId", id);

  const results = await query.find();


  const liderbord = {
    topic: results[0].get("topic"),
    description: results[0].get("description"),
    tags: results[0].get("tags")

  };

  const resourceQuery = new Moralis.Query("Resource");
  resourceQuery.equalTo("liderbordID", id);

  const resources = await resourceQuery.find();
  logger.info("ressource" + resources[0].get("title"));

  var ressourcestab = [];

  for (let i = 0; i < resources.length; i++) {

    const queryVote = new Moralis.Query("Vote");
    queryVote.equalTo("resourceID", resources[i].id);
    const resultsVote = await queryVote.find();
    let upVotes = 0;
    let downVotes = 0;
    let score;
    for (let j = 0; j < resultsVote.length; j++) {
      if (resultsVote[j].get("userVote") == "Happy") {
        upVotes++;
      } else {
        downVotes++;
      }
    }

    score = upVotes - downVotes;
    const objectResource = {
      id: resources[i].id,
      title: resources[i].get("title"),
      type: resources[i].get("format"),
      link: resources[i].get("link"),
      upVotes: upVotes,
      downVotes: downVotes,
      score: score
    }
    ressourcestab.push(objectResource);

  }
  ressourcestab.sort(function (r1, r2) {
    return r2.score - r1.score;
  });

  const resourcesObject = {
    resources: ressourcestab
  }


  const liderbordFinal = Object.assign({}, liderbord, resourcesObject);
  logger.info("liderbordfinal" + liderbordFinal);

  try {
    return liderbordFinal;
  } catch (error) {
    logger.error("Could not find liderbord with id: " + id);
    return {};
  }

}


