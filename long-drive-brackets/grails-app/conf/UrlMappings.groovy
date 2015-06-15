class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
				"/admin"(view:"/admin")


				"/record/$id" {
					controller = 'record'
					action = [PUT: 'updateRecord']
				}
        "500"(view:'/error')
	}
}
