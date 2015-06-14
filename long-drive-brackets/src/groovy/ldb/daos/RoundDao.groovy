package ldb.daos

import groovy.sql.Sql
import ldb.Round
import ldb.Set

class RoundDao {
    Sql sql
    SetDao setDao

    Round getRoundById(BigDecimal id, BigDecimal bracketId) {
        Round round = new Round(id:id)
        sql.eachRow("select set_id from records where round_id = ? and bracket_id = ? group by set_id", [id, bracketId]) { record ->
            round.sets.add(setDao.getSetById(record.set_id, id, bracketId))
        }
        round
    }


}
