async function displayLiderbord(id) {
    const logger = Moralis.Cloud.getLogger();
    

    Moralis.Cloud.define("getLiderbordById", async (request) => {
        const id = request.params.id;
        const LiderbordWithoutRessource= getLiderbordById(id);
      });
   
      const query = new Moralis.Query("Ressource");
      query.equalTo("liderbordID", id);
    
      const resources = await query.find();

    var ressourcestab = [];
  
    for (let i = 0; i < resources.length; i++) {
        const objectResource = {
            title:resources[i].get("title"),
            format:resources[i].get("format"),
            link:resources[i].get("link")
        }
        ressourcestab.push(objectResource);
}
 const resourcesObject= {
     resources:ressourcestab
 }

 const LiderbordFinal= Object.assign({},LiderbordWithoutRessource,resourcesObject);
  
    try {
      return LiderbordFinal;
    } catch (error) {
      logger.error("Could not find liderbord with id: " + id);
      return {};
    }
  }