function findAllPermutations(string) {
  let results = []
  if (string.length === 1)  {
    results.push(string)
  }

    for(let i = 0; i < string.length; i++) {
      let first = string[i]

      let inner = findAllPermutations(string.substring(0, i) + string.substring(i + 1))
      for(let z = 0; z < inner.length; z++) {
        results.push(string[i] + inner[z])
      }
    }

  return results
}
