package ldb.daos

import groovy.sql.Sql
import ldb.Round

class RoundDao {
    Sql sql
    SetDao setDao
    PlayerDao playerDao

    Round getRoundById(BigDecimal id, BigDecimal bracketId) {
        Round round = new Round(id:id)
        sql.eachRow("select set_id from records where round_id = ? and bracket_id = ? group by set_id", [id, bracketId]) { record ->
            round.sets.add(setDao.getSetById(record.set_id, id, bracketId))
        }
        round.players = getRoundPlayers(id)
        round
    }

    def getRoundPlayers(id) {
      def players = []
      sql.eachRow("select distinct(player_id) from records where round_id = ?", [id]) {
        if(it.player_id != 0) {
          players << playerDao.getPlayerById(it.player_id)
        }
      }
      players
    }


}
