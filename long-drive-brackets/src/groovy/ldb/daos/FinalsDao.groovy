package ldb.daos

import groovy.sql.Sql
import ldb.Finals

class FinalsDao {

    Sql sql
    GroupDao groupDao

    Finals getFinalsByBracketId(BigDecimal bracketId) {

        Finals finals = new Finals()
        sql.eachRow("select group_id from records where finals_id = 12 and bracket_id = ? group by group_id", [bracketId]) { record ->
          finals.final12.add(groupDao.getFinalsGroupById(record.group_id, 12, bracketId))
        }
        sql.eachRow("select group_id from records where finals_id = 8 and bracket_id = ? group by group_id", [bracketId]) { record ->
          finals.final8.add(groupDao.getFinalsGroupById(record.group_id, 8, bracketId))
        }
        sql.eachRow("select group_id from records where finals_id = 4 and bracket_id = ? group by group_id", [bracketId]) { record ->
          finals.final4.add(groupDao.getFinalsGroupById(record.group_id, 4, bracketId))
        }
        sql.eachRow("select group_id from records where finals_id = 2 and bracket_id = ? group by group_id", [bracketId]) { record ->
          finals.final2.add(groupDao.getFinalsGroupById(record.group_id, 2, bracketId))
        }
        sql.eachRow("select group_id from records where finals_id = 1 and bracket_id = ? group by group_id", [bracketId]) { record ->
          finals.champion = groupDao.getFinalsGroupById(record.group_id, 1, bracketId)
        }
        finals
    }

}
