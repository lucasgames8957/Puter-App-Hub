function PuterApp(subdomain) {
    // Check if subdomain is provided
    if (!subdomain) {
        console.error("Subdomain is required.");
        return;
    }

    // Navigate to the subdomain
    var url = "http://" + subdomain + ".puter.site";
    location.replace(url);
}