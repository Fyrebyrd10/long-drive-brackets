package ldb.daos

import groovy.sql.Sql
import ldb.Player

class PlayerDao {
    Sql sql

    Player getPlayerById(BigDecimal id) {
        new Player(sql.firstRow("select * from player where id = ?", [id]))
    }

    List<Player> getAllPlayers() {
      List<Player> players = []
      sql.eachRow("select * from player") {
        players << new Player(id:it.id, name:it.name)
      }
      players
    }

    def getPlayersTotalByRound(playerId, roundId) {
      sql.firstRow("select SUM(score) as total from records where round_id=? and player_id=?",[roundId, playerId]).total
    }


}
