package ldb.daos

import groovy.sql.Sql
import ldb.Record

class RecordDao {
    Sql sql
    PlayerDao playerDao

    Record getRecordById(BigDecimal id, BigDecimal groupId, BigDecimal setId, BigDecimal roundId, BigDecimal bracketId) {
        def rowResult = sql.firstRow("select * from records where id = ?", [id])
        new Record(id:rowResult.id,  player: playerDao.getPlayerById(rowResult.player_id), distance:rowResult.distance, score:rowResult.score)
    }

   def updateRecord(BigDecimal id, BigDecimal playerId, BigDecimal distance, BigDecimal score) {
        sql.executeUpdate("UPDATE records set player_id = ?, distance = ?, score = ? where id = ?", [playerId, distance, score, id])
   }
//
//    def getNextId() {
//        sql.firstRow("""
//                        SELECT t1.id + 1
//                        FROM records t1
//                        WHERE NOT EXISTS (
//                          SELECT *
//                          FROM records t2
//                          WHERE t2.id = t1.id + 1
//                        )
//                        LIMIT 1
//    """)
//    }
}
