Project to test datum timeouts in Pachyderm

Using the `datum_timeout` setting of a Pipeline spec, overrides the `err_cmd` setting of the Pipeline spec.

Using an active Pachyderm cluster, run the following commands:

`./setupTest.sh <imageVersion> [true|false] [imageRepo] [imageName] [inputDir]`

This will create a datum repo with 10 txt files in it, 1.txt thru 10.txt

Each file will have a single line with the file name number in it.
This tells node.js to sleep for that many seconds before writing the file to the output repo.

The `datum_timeout` is set to 5 seconds, so the first 4 files will succeed, and the last 6 will fail.

