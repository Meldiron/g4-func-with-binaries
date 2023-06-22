echo "Downloading Chromium"

CHROME_BIN=/usr/bin/chromium-browser

echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories
echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories

apk add --no-cache chromium@edge nss@edge

wc -c /usr/bin/chromium-browser

echo "Chromium downloaded successfully"
