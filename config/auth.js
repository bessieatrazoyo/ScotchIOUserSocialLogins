// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '970972776290641', // your App ID
        'clientSecret'    : 'f22fbd73018b23f92c9b84bbda0ee4f0', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : '3P2h1Cc7Y7G5MGaN8bhePSYiw',
        'consumerSecret'     : 'lH8H1DRzdcu0klJVLJLElSU6JKfZZXOBRDncnYnzCbpVmhLAzu',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
