function(imageTag)
{
    "pipeline" : {
        "name": "test-datum-timeout-behavior",
    },
    "description": "This pipeline tests what happens in the event of a datum timeout.",
    "input" : {
        "pfs" : {
            "repo" : "data",
            "branch" : "master",
            "glob" : "/*.txt"
        }
    },
    "transform" : {
        "image": imageTag,
        "cmd" : [ "node", "./main.js", "/pfs/data", "/pfs/out" ],
        "err_cmd" : [ "true" ],

    },
    "datum_timeout": "5s",
}