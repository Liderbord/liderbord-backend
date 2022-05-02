Moralis.Cloud.define("createResource", async (request) => {
    const logger = Moralis.Cloud.getLogger();
  
    const Resource = Moralis.Object.extend("Resource");
    const resource = new Resource();
  
    resource.set("title", request.params.title);
    if(request.params.link!=""){
        resource.set("link",request.params.link);
    }else if (request.params.markdown!=""){
resource.set("markdown",request.params.markdown);
    }

    resource.set("format", request.params.format);
    resource.set("liderbordID", request.params.liderbordID);
    resource.set("userID",request.params.userID);
  
    await resource.save().then(
      (resource) => {
        // Execute any logic that should take place after the object is saved.
        logger.info("New object created with objectId: " + resource.id);
        return resource;
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
    return await resource.id;
  });
  