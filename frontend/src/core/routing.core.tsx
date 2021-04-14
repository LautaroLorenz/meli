class Routing {
  public static getQueryParam(url: string, paramName: string): string | null {
    return new URLSearchParams(url).get(paramName);
  }
}

export { Routing };