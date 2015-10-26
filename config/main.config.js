/**
 * Created by Pencroff on 08-Sep-15.
 */

/*global module: true, exports: true */

exports.server = {
    port: 8070,
    tokenSecret: 'X6hasA89uij',
    user: {
        name: 'Buildup User',
        login: 'buildup',
        password: 'buildup234',
        logged: true
    },
    mongoConf: {
        login: 'buildup-user',
        password: 'buildup234',
        server: 'ds047592.mongolab.com',
        port: '47592',
        dbName: 'gryffindor'
    },
    mongoUri: {
        $ref: 'server.mongoConf',
        $tmpl: 'mongodb://{login}:{password}@{server}:{port}/{dbName}'
    }
};
