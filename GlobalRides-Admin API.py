import webbrowser

url = 'http://localhost:9000/'
webbrowser.register('firefox',
	None,
	webbrowser.BackgroundBrowser("C://Program Files//Mozilla Firefox//firefox.exe"))
webbrowser.get('firefox').open(url)