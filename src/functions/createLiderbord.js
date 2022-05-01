Moralis.Cloud.define("createLiderbord", async (request) => {
  const logger = Moralis.Cloud.getLogger();

  const Liderbord = Moralis.Object.extend("Liderbord");
  const liderbord = new Liderbord();

  liderbord.set("topic", request.params.title);
  liderbord.set("description", request.params.desc);
  liderbord.set("tags", request.params.tags);

  await liderbord.save().then(
    (liderbord) => {
      // Execute any logic that should take place after the object is saved.
      alert("New object created with objectId: " + liderbord.id);
      return liderbord;
    },
    (error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Moralis.Error with an error code and message.

      alert(
        "Failed to create new liderbord, with error code: " + error.message
      );
      logger.error(
        "createLiderbord: Failed to create new liderbord, with error code: " +
          error.message
      );
    }
  );
  return await liderbord.id;
});
