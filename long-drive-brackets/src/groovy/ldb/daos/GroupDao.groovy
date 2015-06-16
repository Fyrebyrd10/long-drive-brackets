package ldb.daos

import groovy.sql.Sql
import ldb.Group

class GroupDao {

    Sql sql
    RecordDao recordDao

    Group getGroupById(BigDecimal id, BigDecimal setId, BigDecimal roundId, BigDecimal bracketId) {

        Group group = new Group(id:id)
        sql.eachRow("select id from records where group_id = ? and set_id = ? and round_id = ? and bracket_id = ? group by id", [id, setId, roundId, bracketId]) { record ->
            group.records.add(recordDao.getRecordById(record.id))
        }
        group
    }

    Group getFinalsGroupById(BigDecimal id, BigDecimal finalsId, BigDecimal bracketId) {

        Group group = new Group(id:id)
        sql.eachRow("select id from records where group_id = ? and finals_id = ? and bracket_id = ? group by id", [id, finalsId, bracketId]) { record ->
            group.records.add(recordDao.getFinalsRecordById(record.id))
        }
        group
    }

}
