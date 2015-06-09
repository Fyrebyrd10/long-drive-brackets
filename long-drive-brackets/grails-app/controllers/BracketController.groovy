import grails.converters.JSON

class BracketController {

    def index() {

      def bracket = [:]

      def group1 = [
                      players:[
                        [name:"Brendom", distance:400],
                        [name:"Christopher", distance:380],
                        [name:"Ryan", distance:410],
                        [name:"Robert", distance:360]
                      ]
                    ]

      def group2 = [
                    players:[
                    [name:"Mike", distance:400],
                    [name:"Thomas", distance:380],
                    [name:"Cameron", distance:410],
                    [name:"Scott", distance:360]
                    ]
                    ]
      def group3 = [
                    players:[
                    [name:"Paul", distance:400],
                    [name:"David", distance:380],
                    [name:"Carl", distance:410],
                    [name:"Tim", distance:360]
                    ]
                    ]
      def group4 = [
                    players:[
                    [name:"Paul", distance:400],
                    [name:"David", distance:380],
                    [name:"Carl", distance:410],
                    [name:"Tim", distance:360]
                    ]
                    ]

      def set1 = [groups:[group1, group2, group3, group4]]
      def set2 = [groups:[group1, group2, group3, group4]]
      def set3 = [groups:[group1, group2, group3, group4]]
      def set4 = [groups:[group1, group2, group3, group4]]
      def set5 = [groups:[group1, group2, group3, group4]]

      bracket = [round1:[sets:[set1,set2, set3, set4, set5]]]

      render bracket as JSON

    }
}
