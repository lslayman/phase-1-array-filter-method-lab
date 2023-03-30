function findMatching(driverName, searchCriteria) {
    return driverName.filter(
        (searchQuery) => searchQuery.toLowerCase() === searchCriteria.toLowerCase()
    );
}

function fuzzyMatch(driverName, providedLetter) {
    return driverName.filter(
        (searchQuery) => 
            searchQuery.toLowerCase().indexOf(providedLetter.toLowerCase()) === 0
    )
}

function matchName (driverName, searchName) {
    return driverName.filter((query) => query.name === searchName)
}