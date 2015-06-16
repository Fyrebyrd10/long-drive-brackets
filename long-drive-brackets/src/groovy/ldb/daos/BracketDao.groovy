package ldb.daos

import groovy.sql.Sql
import ldb.Bracket

class BracketDao {
    Sql sql
    RoundDao roundDao
    FinalsDao finalsDao

    def getBracketById(BigDecimal id) {
        Bracket bracket = new Bracket(id:id)
        sql.eachRow("select round_id from records where bracket_id = ? group by round_id", [id]) { record ->
            bracket.rounds.add(roundDao.getRoundById(record.round_id, id))
        }
        bracket.finals = finalsDao.getFinalsByBracketId(id)
        bracket
    }
}
