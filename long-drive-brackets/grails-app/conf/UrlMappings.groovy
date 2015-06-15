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
        "500"(view:'/error')
	}
}
