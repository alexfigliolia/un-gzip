# un-gzip

Extract a source .gz archive to a specified destination file.

```
npm install un-gzip
```

## Usage

Pass a source `.gz` file and a destination file and the `.gz` will be extracted to the target file.

``` js
import { unzip } from 'un-gzip'

unzip('example.json.gz', 'example.json');
```

Additionally, you can pass a callback that will be executed when the extraction has completed.

``` js
unzip('example.json.gz', 'example.json', function() {
	console.log('This is called when the extraction is completed.');
});
```

## License

MIT