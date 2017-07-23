
BUILD_DIR=../build/Indian-tv\ Dark\ Skin/

all: xxx.css

%.css: %.scss
	sass $^ $@

build: xxx.css xxx.js background.js manifest.json
	@printf "\n##########################################\n\n"
	mkdir -p $(BUILD_DIR);
	cp xxx.css $(BUILD_DIR);
	cp xxx.js $(BUILD_DIR);
	cp background.js $(BUILD_DIR);
	cp manifest.json $(BUILD_DIR);
	cp -R icon/ $(BUILD_DIR);
	@printf "\n##########################################\n\n"
	cd $(BUILD_DIR) && \
	zip -r ../Indian-tv\ Dark\ Skin.zip . && \
	cp ../Indian-tv\ Dark\ Skin.zip ../Indian-tv\ Dark\ Skin.xpi;
	@printf "\n##########################################\n\n"

