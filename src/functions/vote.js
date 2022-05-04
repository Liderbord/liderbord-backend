Moralis.Cloud.define("updateVote", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  
    const Vote = Moralis.Object.extend("Vote");
    const vote= new Vote();
  

    vote.set("resourceID", request.params.resourceID);
    vote.set("userID", request.params.userID);
    vote.set("userVote",request.params.userVote);

    
  
    await vote.save().then(
      (vote) => {
        // Execute any logic that should take place after the object is saved.
        logger.info("New object created with objectId: " + vote.id);
        
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
  
        
        logger.error(
          "createResource: Failed to create new resource, with error code: " +
            error.message
        );
      }
    );
    
  });
  