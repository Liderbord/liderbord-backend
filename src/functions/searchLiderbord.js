Moralis.Cloud.define("searchLiderbord", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  
    const name = request.params.name;
    const query = new Moralis.Query("Liderbord");
    query.startsWith("topic", name);

    

    const results = await query.find();

    let liderbords = [];

    for (i=0; i<results.length; i++){
      let liderbord = {
        topic: results[i].get("topic"),
        id: results[i].get("objectId"),
        description: results[i].get("description"),
        tags: results[i].get("tags")
      }
      liderbords.push(liderbord);
    }
  
    await liderbord.save().then(
      (liderbord) => {
        // Execute any logic that should take place after the object is saved.
        alert("Searching started...");
        return liderbords;
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
    return await liderbords;
  });