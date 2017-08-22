
BUILD_DIR=../build/Indian-tv\ Dark\ Skin/

OBJ_CSS=main 90vterin top5 liveplay
OBJ_CSS:=$(addsuffix .css, $(OBJ_CSS))
OBJ_JS=manifest.json background.js xxx.js

define NEWLINE


endef

all: $(OBJ_CSS)

echo:
	printf "$(OBJ_CSS)\n"

%.css: %.scss
	sass $^ $@

build: $(OBJ_CSS) $(OBJ_JS)
	@printf "\n##########################################\n\n"
	mkdir -p $(BUILD_DIR);
	$(foreach var, $^, cp $(var) $(BUILD_DIR);	)
	cp -R icon/ $(BUILD_DIR);
	@printf "\n##########################################\n\n"
	cd $(BUILD_DIR) && \
	zip -r ../Indian-tv\ Dark\ Skin.zip . && \
	cp ../Indian-tv\ Dark\ Skin.zip ../Indian-tv\ Dark\ Skin.xpi;
	@printf "\n##########################################\n\n"

clean:
	rm *.map
	#rm -R $(BUILD_DIR)
