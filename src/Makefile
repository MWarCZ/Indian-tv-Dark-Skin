
BUILD_DIR=../build/Indian-tv\ Dark\ Skin/

all: xxx.css

%.css: %.scss
	sass $^ $@

build: xxx.css background.js manifest.json indian-black.png indian-red.png
	cp xxx.css $(BUILD_DIR);
	cp background.js $(BUILD_DIR);
	cp manifest.json $(BUILD_DIR);
	cp indian-black.png $(BUILD_DIR);
	cp indian-red.png $(BUILD_DIR);

