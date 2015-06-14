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

//    def insertRecord(BigDecimal playerId, BigDecimal distance, BigDecimal score) {
//        sql.executeInsert("INSERT INTO records (player_id, distance, score, id) VALUES(?,?,?,?)", [playerId, distance, score,getNextId()])
//    }
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
