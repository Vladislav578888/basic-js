const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const team = [];
  if(Array.isArray(members)) {
    members.forEach(function(e) {
      if(typeof e === 'string') {
        team.push(e.trim().charAt(0).toUpperCase());
      }
    });
    return (team.sort().join(''));
  } else {
    return false
  }
};