echo "Downloading Chromium"

CHROME_BIN=/usr/bin/chromium-browser

echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories
echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories

apk add --no-cache chromium@edge nss@edge

mv /usr/bin/chromium-browser /usr/local/build/chromium-browser

echo "Chromium downloaded successfully"
