export class PollingStationMatcherService {
  #integralStreetToken = 'integral#'
  #oddNumbersToken = 'numere impare nr.'
  #evenNumbersToken = 'numere pare nr.'
  #numbersSeparatorToken = '-'
  #houseNumbersSeparatorToken = '#'

  findPollingStation(pollingStations, userAddress) {
    return pollingStations.filter((pollingStation) => {
      const assignedAddresses = pollingStation.assignedAddresses
      const matchedAssignedAddress = assignedAddresses.find(
        (assignedAddress) =>
          this.isSameLocality(assignedAddress, userAddress) &&
          this.isSameStreet(assignedAddress, userAddress) &&
          this.isMatchingNumber(assignedAddress, userAddress)
      )
      return matchedAssignedAddress != null
    })
  }

  isSameLocality(assignedAddress, userAddress) {
    const assignedAddressLocality = this.normalize(
      assignedAddress.locality.toLowerCase()
    )
    const userAddressCity = this.normalize(userAddress.city.toLowerCase())
    return assignedAddressLocality.includes(userAddressCity)
  }

  isSameStreet(assignedAddress, userAddress) {
    const userStreet = this.normalize(userAddress.street.toLowerCase())
    const assignedAddressStreet = this.normalize(
      assignedAddress.street.toLowerCase()
    )
    return (
      userStreet.includes(assignedAddressStreet) ||
      assignedAddressStreet.includes(userStreet)
    )
  }

  isMatchingNumber(assignedAddress, userAddress) {
    if (assignedAddress.houseNumbers === this.#integralStreetToken) {
      return true
    }

    if (!userAddress.houseNumber) {
      return true
    }

    const assignedAddressHouseNumbers = assignedAddress.houseNumbers.split(
      this.#houseNumbersSeparatorToken
    )
    const matchedHouseNumber = assignedAddressHouseNumbers.find(
      (assignedAddressesHouseNumber) =>
        this.isHouseNumberMatch(
          assignedAddressesHouseNumber,
          userAddress.houseNumber
        )
    )
    return matchedHouseNumber != null
  }

  normalize(str) {
    return str.normalize('NFKD').replace(/[^\w]/g, '')
  }

  isHouseNumberMatch(assignedAddressesHouseNumber, houseNumberAsString) {
    const houseNumber = +houseNumberAsString
    if (assignedAddressesHouseNumber.includes(this.#evenNumbersToken)) {
      return this.isMatchingEvenNumber(
        assignedAddressesHouseNumber,
        houseNumber
      )
    }

    if (assignedAddressesHouseNumber.includes(this.#oddNumbersToken)) {
      return this.isMatchingOddNumber(assignedAddressesHouseNumber, houseNumber)
    }

    return false
  }

  isMatchingEvenNumber(assignedAddressesHouseNumber, houseNumber) {
    if (houseNumber % 2 !== 0) {
      return false
    }

    const numberRange = assignedAddressesHouseNumber.split(
      this.#evenNumbersToken
    )[1]
    const lowerLimit = +numberRange.split(this.#numbersSeparatorToken)[0].trim()
    const upperLimit = +numberRange.split(this.#numbersSeparatorToken)[1].trim()

    return lowerLimit <= houseNumber && houseNumber <= upperLimit
  }

  isMatchingOddNumber(assignedAddressesHouseNumber, houseNumber) {
    if (houseNumber % 2 === 0) {
      return false
    }

    const numberRange = assignedAddressesHouseNumber.split(
      this.#oddNumbersToken
    )[1]
    const lowerLimit = +numberRange.split(this.#numbersSeparatorToken)[0].trim()
    const upperLimit = +numberRange.split(this.#numbersSeparatorToken)[1].trim()
    return lowerLimit <= houseNumber && houseNumber <= upperLimit
  }
}
