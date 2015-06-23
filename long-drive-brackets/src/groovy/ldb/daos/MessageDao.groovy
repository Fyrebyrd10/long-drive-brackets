package ldb.daos

import groovy.sql.Sql
import ldb.Message

class MessageDao {
    Sql sql

    def getMessageByBracketId(BigDecimal id) {
        Message message = new Message(id:id)
        message.message = sql.firstRow("select * from messages where bracket_id = ?", [id]).message
        message
    }

    def updateMessage(BigDecimal id, String message) {
        sql.executeUpdate("update messages set message = ? where bracket_id = ?", [message, id])
    }
}
