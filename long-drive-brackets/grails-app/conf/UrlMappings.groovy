class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
				"/admin"(view:"/admin")


				"/record" {
					controller = 'record'
					action = [PUT: 'updateRecords']
				}
				"/message" {
					controller = 'record'
					action = [PUT: 'updateMessage']
				}
        "500"(view:'/error')
	}
}
