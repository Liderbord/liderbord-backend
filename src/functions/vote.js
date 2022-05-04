Moralis.Cloud.define("updateVote", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  
    const Vote = Moralis.Object.extend("Vote");
    const vote= new Vote();

    
    vote.set("resourceID", request.params.resourceID);
    vote.set("userID", request.params.userID);
    vote.set("userVote", request.params.userVote);
    let voteID;
    await vote.save().then(
      (vote) => {
        // Execute any logic that should take place after the object is saved.
        logger.info("New object vote with id: " + vote.id);
        voteID = vote.id;
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.

        logger.error(
          "updateVote: Failed to create new vote, with error code: " +
            error.message
        );
      }
    );

    // adding comments
    if (request.params.comment) {
      logger.info("Vote has comment:" + request.params.comment);
      const Comment = Moralis.Object.extend("Comment");
      const comment = new Comment();

      comment.set("comment", request.params.comment);
      comment.set("userVote", request.params.userVote);
      comment.set("voteID", request.params.voteID);
      comment.set("resourceID", request.params.resourceID);

      await comment.save().then(
        (comment) => {
          // Execute any logic that should take place after the object is saved.
          logger.info("New comment created with id: " + comment.id);
        },
        (error) => {
          // Execute any logic that should take place if the save fails.
          // error is a Moralis.Error with an error code and message.

          logger.error(
            "updateVote: Failed to create new comment, with error code: " +
              error.message
          );
        }
      );
    }
  });
  