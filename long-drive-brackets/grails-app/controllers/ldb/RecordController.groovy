package ldb

import grails.converters.JSON
import ldb.daos.RecordDao
import groovy.json.*

class RecordController {
    RecordDao recordDao

    def updateRecords() {

      def jsonSlurper = new JsonSlurper()

      def body = jsonSlurper.parseText(request.reader.text)
      body.records.each {
        recordDao.updateRecord(new BigDecimal(it.recordId), new BigDecimal(it.playerId), new BigDecimal(it.distance),
                                new BigDecimal(it.score))
      }
      render status:201
    }

}
