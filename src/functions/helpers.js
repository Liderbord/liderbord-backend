async function getLiderbordById(id) {
  const logger = Moralis.Cloud.getLogger();
  const Liderbord = Moralis.Object.extend("Liderbord");
  const query = new Moralis.Query(Liderbord);
  const { topic, description, tags } = await query.get("xWMyZ4YEGZ");
  try {
    return {
      id: id,
      topic: topic,
      description: description,
      tags: tags,
      resources: [],
    };
  } catch (error) {
    logger.error("Could not find liderbord with id: " + id);
    return {};
  }
}
