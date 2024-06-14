function sortUsersByAge(users, age){
    return users.filter(user => user.age > parseInt(age));
} 

function sortUsersByDomain(users, domain){
    return users.filter(user => user.email.includes(domain));
}

function sortUsersByName(users){
    return users.slice().sort((a, b) => a.name.localeCompare(b.name)); 
}

module.exports = {
    sortUsersByAge,
    sortUsersByDomain,
    sortUsersByName,
  };