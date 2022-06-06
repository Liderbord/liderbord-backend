enum ResourceType {
  AUDIO = "AUDIO",
  DOCUMENT = "DOCUMENT", // Default for any Liderbord markdown doc
  IMAGE = "IMAGE",
  LINK = "LINK", // (default for any internet resource that is unspecified)
  VIDEO = "VIDEO",
  UNKNOWN = "UNKNOWN",
}
export function stringToResourceType(resourceString: string): ResourceType {
  switch (resourceString) {
    case "Audio":
      return ResourceType.AUDIO;
    case "DOCUMENT":
      return ResourceType.DOCUMENT;
    case "IMAGE":
      return ResourceType.IMAGE;
    case "LINK":
      return ResourceType.LINK;
    case "VIDEO":
      return ResourceType.VIDEO;

    default:
      return ResourceType.UNKNOWN;
  }
}
export default ResourceType;
