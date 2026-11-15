// It fetches the file, checks response.ok, parses JSON,
// and validates the minimum shape: an array whose items have string id and name, plus numeric price.
// Return the array or throw a safe error. 