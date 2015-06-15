package ldb

import grails.converters.JSON
import ldb.daos.RecordDao
import groovy.json.*

class RecordController {
    RecordDao recordDao

    def updateRecord() {
      def id = params.id

      def jsonSlurper = new JsonSlurper()
      def body = jsonSlurper.parseText(request.reader.text)
      def score = body.score
      def distance= body.distance
      def playerId = body.playerId
      recordDao.updateRecord(new BigDecimal(id), new BigDecimal(playerId), new BigDecimal(distance),
                              new BigDecimal(score))

    }

}
