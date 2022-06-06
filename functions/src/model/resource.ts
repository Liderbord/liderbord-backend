import ResourceType from "./resourceType";
import Vote from "./vote";

interface Resource {
  // Identifier of the resource (key)
  id: string;
  // The name of the resource
  title: string;
  // The link to the resource
  link: string;
  // The score of the resource
  type?: ResourceType;
  // The hash of the resource, to be compared with the blockchain
  hash: string;
  votes: Vote[];
}

export default Resource;
