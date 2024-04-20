export default class SearchUrlBuilder {
  baseUrl: string
  params: URLSearchParams
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.params = new URLSearchParams()
  }

  build() {
    return `${this.baseUrl}?${this.params.toString()}`
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl

    return this
  }

  setSearchTerm(searchTerm: string) {
    this.params.set("search", searchTerm)

    return this
  }

  setMinPrice(minPrice: string) {
    if (minPrice === "") {
      this.params.delete("min")

      return this
    }

    this.params.set("min", minPrice)

    return this
  }

  setMaxPrice(maxPrice: string) {
    if (maxPrice === "") {
      this.params.delete("max")

      return this
    }

    this.params.set("max", maxPrice)

    return this
  }
}
