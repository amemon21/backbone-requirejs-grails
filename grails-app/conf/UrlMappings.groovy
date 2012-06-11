class UrlMappings {

	static mappings = {

        // Example of an API catch
        "/1.0"(view:"/api")
        "/1.0/**"(view:"/api")

        // Catchall Mapping directs all users to your index.
        // Enable Pushstate in backbone to take advantage.
        "/**"(view:"/single")
	}
}
