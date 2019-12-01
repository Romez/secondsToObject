test:
	npm test

test-watch:
	npm run test-watch

coverage:
	npm run coverage

lint:
	npx eslint .

build:
	rm -rf dist
	npm run build

publish:
	npm publish --dry-run
