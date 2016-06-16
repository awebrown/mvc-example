/**
 * Interaction
 *
 * @module      :: Model
 * @description :: Holds information for an interaction between two users.
 */

module.exports = {

  attributes: {
    userId: {
      type: 'objectid'
    },
    matchId: {
      type: 'objectId'
    },
    match: {
      type: 'boolean'
    }
  }
};
