class Service {
  static createLiderbord({
    topic,
    tags,
  }: {
    topic: string;
    tags: string[];
  }): string {
    return topic + tags;
  }
}

export default Service;
