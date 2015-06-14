package ldb.daos

import groovy.sql.Sql
import ldb.Set

class SetDao {
    Sql sql
    GroupDao groupDao

    Set getSetById(BigDecimal id, roundId, bracketId) {
        Set set = new Set(id:id)
        sql.eachRow("select group_id from records where set_id = ? and round_id = ? and bracket_id = ? group by group_id", [id, roundId, bracketId]) { record ->
            set.groups.add(groupDao.getGroupById(record.group_id, id, roundId, bracketId))
        }
        set
    }
}
