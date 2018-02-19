module.exports=function(grunt){
//project configuration
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch:{
        stylusGenerator:{
            files:['public/css/*.styl'], // écoute les fichiers en .styl dans le dossier css
            tasks:['stylus'],
            "options":{
                "spawn": "false"
            }
        },

        browserifyGenerator:{
            files:['public/js/*.js'],
            tasks:['browserify']

        }
    },

    stylus:{
        compile:{
            options:{
                path: ['public/css'],
                import:[
                'mixins'
                ],

                compress:false,
                use:[
                    require('rupture')
                ]
            },

            files:{
                'public/build/css/main.css' : ['public/css/main.styl']
            }
        }

    },

    browserify:{
        development:{
            src:[
                'public/js/*.js'
            ],
            dest: 'public/build/js/main.js',
            options:{
                browserifyOptions:{debug:true},
                transform : [
                    [
                        'babelify',
                            {
                                "presets":["es2015","stage-3"],
                                "plugins": ["transform-runtime"]
                            }
                    ]
                ]
            }
        }
    }


});

//declare appel aux plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-browserify');

//task

    grunt.registerTask('dev', ['watch']);

}