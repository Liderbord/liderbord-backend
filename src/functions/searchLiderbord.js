Moralis.Cloud.define("searchLiderbord", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  

    const query = new Moralis.Query("Liderbord");
    query.equalTo("topic", toUpperCase(request));

    const results = await query.find();
  
    await liderbord.save().then(
      (liderbord) => {
        // Execute any logic that should take place after the object is saved.
        alert("Searching started...");
        return results;
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
  
        alert(
          "Failed to search liderbords, with error code: " + error.message
        );
        logger.error(
          "searchLiderbord: Failed to search liderbords, with error code: " +
            error.message
        );
      }
    );
    return await results;
  });