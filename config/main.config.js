/**
 * Created by Pencroff on 08-Sep-15.
 */

/*global module: true, exports: true */

exports.server = {
    port: 8070,
    tokenSecret: 'bla-bla-bla',
    user: {
        name: 'Brad Pitt',
        login: 'brad-pitt',
        password: 'magic-password',
        logged: true
    },
    mongoConf: {
        login: 'user',
        password: '123',
        server: 'ds035844.mongolab.com',
        port: '35844',
        dbName: 'angularjsbuildup'
    },
    mongoUri: {
        $ref: 'server.mongoConf',
        $tmpl: 'mongodb://{login}:{password}@{server}:{port}/{dbName}'
    }
};
