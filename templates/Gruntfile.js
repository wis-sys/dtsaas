module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        meta: {

            assets_root:                    'assets/',
            assets_concat_root:             'assets-concat/',
            assets_minified_root:           'assets-minified/',
            widgets_root:                   'assets/widgets/',
            core_js_root:                   'assets/js-core/',
            elements_root:                  'assets/elements/',
            helpers_root:                   'assets/helpers/',
            applications_root:              'assets/applications/',
            frontend_root:                  'assets/frontend-elements/',
            snippets_root:                  'assets/snippets/',
            themes_root:                    'assets/themes/',
            pages_distribution:             'production/',
            pages_demo:                     'demo/',
            pages_documentation:            'documentation/'

        },

        assemble: {

            options: {
                layout: 'layout.hbs',
                layoutdir: 'src/layouts',
                production: true,
                demo: true,
                partials: ['src/partials/**/*.hbs'],
                flatten: true
            },

            dist: {
                src: 'src/pages/*.hbs',
                dest: '<%= meta.pages_distribution %>'
            },
            docs: {
                options: {
                    layout: 'docs-layout.hbs',
                    docs_include: true
                },
                src: 'src/pages/**/*.hbs',
                dest: '<%= meta.pages_documentation %>'
            },
            frontend_dist: {
                options: {
                    layout: 'frontend-layout.hbs',
                    docs_include: false,
                    docs_exclude: true
                },
                src: 'src/pages/frontend/*.hbs',
                dest: '<%= meta.pages_distribution %>'
            },
            admin_templates_dist: {
                options: {
                    layout: 'admin-layout.hbs',
                    docs_include: false,
                    docs_exclude: true
                },
                src: 'src/pages/admin-pages/*.hbs',
                dest: '<%= meta.pages_distribution %>'
            },
            admin_navigation_dist: {
                options: {
                    layout: 'navigation-layout.hbs',
                    docs_include: false,
                    docs_exclude: true
                },
                src: 'src/pages/admin-navigation/*.hbs',
                dest: '<%= meta.pages_distribution %>'
            },
            admin_layoutpages_dist: {
                options: {
                    layout: 'page-layout.hbs',
                    docs_include: false,
                    docs_exclude: true
                },
                src: ['src/pages/admin-layouts/*.hbs','src/pages/index.hbs','src/pages/dashboard-2.hbs','src/pages/dashboard-3.hbs'],
                dest: '<%= meta.pages_distribution %>'
            },
            admin_applications_dist: {
                options: {
                    layout: 'application-layout.hbs',
                    docs_include: false,
                    docs_exclude: true
                },
                src: ['src/pages/admin-applications/*.hbs', 'src/pages/admin-pages/server-page-2.hbs'],
                dest: '<%= meta.pages_distribution %>'
            }

        },

        watch: {

            assemble: {

                files: [
                    'src/layouts/*.hbs',
                    'src/pages/*.hbs',
                    'src/pages/frontend/*.hbs',
                    'src/pages/admin-pages/*.hbs',
                    'src/pages/admin-navigation/*.hbs',
                    'src/pages/admin-layouts/*.hbs',
                    'src/pages/admin-applications/*.hbs',
                    'src/partials/**/*.hbs'
                ],
                tasks: ['all']

            }

        },

        uglify: {

            options:{

            },

            widgets_js: {

                files: [{
                    expand: true,
                    cwd: '<%= meta.widgets_root %>',
                    src: ['**/*.js'],
                    dest: '<%= meta.assets_minified_root %>/widgets'
                }]

            },

            theme_js: {

                files: [{
                    expand: true,
                    cwd: '<%= meta.themes_root %>',
                    src: ['**/*.js'],
                    dest: '<%= meta.assets_minified_root %>/themes'
                }]

            },

            core_js: {

                files: [{
                    expand: true,
                    cwd: '<%= meta.core_js_root %>',
                    src: ['**/*.js'],
                    dest: '<%= meta.assets_minified_root %>/js-core',
                    ext: '.js'
                }]

            },

            other_js: {

                files: [{
                    expand: true,
                    cwd: '<%= meta.assets_root %>',
                    src: 'widgets-init.js',
                    dest: '<%= meta.assets_minified_root %>'
                }]

            },

            other_js2: {

                files: [{
                    expand: true,
                    cwd: '<%= meta.assets_concat_root %>',
                    src: 'js-core.js',
                    dest: '<%= meta.assets_minified_root %>'
                }]

            },

            demo_js: {

                files: {
                    '<%= meta.assets_minified_root %>all-demo.js': [
                    '<%= meta.assets_root %>/widgets/dropdown/dropdown.js',
                    '<%= meta.assets_root %>/widgets/tooltip/tooltip.js',
                    '<%= meta.assets_root %>/widgets/popover/popover.js',
                    '<%= meta.assets_root %>/widgets/button/button.js',
                    '<%= meta.assets_root %>/widgets/collapse/collapse.js',
                    '<%= meta.assets_root %>/widgets/progressbar/progressbar.js',
                    '<%= meta.assets_root %>/widgets/uniform/uniform.js',
                    '<%= meta.assets_root %>/widgets/chosen/chosen.js',
                    '<%= meta.assets_root %>/widgets/superfish/superfish.js',
                    '<%= meta.assets_root %>/widgets/superclick/superclick.js',
                    '<%= meta.assets_root %>/widgets/nicescroll/nicescroll.js',
                    '<%= meta.assets_root %>/widgets/overlay/overlay.js',
                    '<%= meta.assets_root %>/widgets/autocomplete/autocomplete.js',
                    '<%= meta.assets_root %>/widgets/autocomplete/menu.js',
                    '<%= meta.assets_root %>/widgets/content-box/contentbox.js',
                    '<%= meta.assets_root %>/widgets/tabs/tabs.js',
                    '<%= meta.assets_root %>/widgets/slidebars/slidebars.js',
                    '<%= meta.assets_root %>/widgets-init.js',
                    '<%= meta.assets_root %>/themes/bratilius/js/layout.js'
                    ]
                }

            }


        },

        cssmin: {

            widgets_css: {
                expand: true,
                cwd: '<%= meta.widgets_root %>',
                src: ['**/*.css'],
                dest: '<%= meta.assets_minified_root %>/widgets',
                ext: '.css'
            },

            elements_css: {
                expand: true,
                cwd: '<%= meta.elements_root %>',
                src: ['**/*.css'],
                dest: '<%= meta.assets_minified_root %>/elements',
                ext: '.css'
            },

            helpers_css: {
                expand: true,
                cwd: '<%= meta.helpers_root %>',
                src: ['**/*.css'],
                dest: '<%= meta.assets_minified_root %>/helpers',
                ext: '.css'
            },

            applications_css: {
                expand: true,
                cwd: '<%= meta.applications_root %>',
                src: ['**/*.css'],
                dest: '<%= meta.assets_minified_root %>/applications',
                ext: '.css'
            },

            frontend_css: {
                expand: true,
                cwd: '<%= meta.frontend_root %>',
                src: ['**/*.css'],
                dest: '<%= meta.assets_minified_root %>/frontend-elements',
                ext: '.css'
            },

            snippets_css: {
                expand: true,
                cwd: '<%= meta.snippets_root %>',
                src: ['**/*.css'],
                dest: '<%= meta.assets_minified_root %>/snippets',
                ext: '.css'
            },

            themes_css: {
                expand: true,
                cwd: '<%= meta.themes_root %>',
                src: ['**/*.css'],
                dest: '<%= meta.assets_minified_root %>/themes',
                ext: '.css'
            },

            concat_css: {
                expand: true,
                cwd: '<%= meta.assets_concat_root %>',
                src: ['**/*.css'],
                dest: '<%= meta.assets_minified_root %>/',
                ext: '.css'
            },

            demo_css: {
                files: {
                    '<%= meta.assets_minified_root %>all-demo.css': [
                        '<%= meta.assets_root %>/**/*.css',
                        '!<%= meta.assets_root %>/icons/**/*.css',
                        '!<%= meta.assets_root %>/demo.css',
                        '<%= meta.assets_root %>/icons/fontawesome/fontawesome.css',
                        '<%= meta.assets_root %>/icons/linecons/linecons.css'

                    ]
                }
            }

        },

        concat: {

            options: {},

            elementsCSS: {
                src: [
                    '<%= meta.assets_root %>/elements/*.css'
                ],
                dest: '<%= meta.assets_concat_root %>/elements/elements-all.css'
            },
            helperCSS: {
                src: [
                    '<%= meta.assets_root %>/helpers/*.css'
                ],
                dest: '<%= meta.assets_concat_root %>helpers/helpers-all.css'
            },
            frontendelementsCSS: {
                src: [
                    '<%= meta.assets_root %>/frontend-elements/*.css'
                ],
                dest: '<%= meta.assets_concat_root %>frontend-elements/frontend-elements-all.css'
            },
            snippetsCSS: {
                src: [
                    '<%= meta.assets_root %>/snippets/*.css'
                ],
                dest: '<%= meta.assets_concat_root %>snippets/snippets-all.css'
            },
            coreJS: {
                src: [
                    '<%= meta.assets_root %>/js-core/jquery-core.js',
                    '<%= meta.assets_root %>/js-core/jquery-ui-core.js',
                    '<%= meta.assets_root %>/js-core/jquery-ui-widget.js',
                    '<%= meta.assets_root %>/js-core/jquery-ui-mouse.js',
                    '<%= meta.assets_root %>/js-core/jquery-ui-position.js',
                    '<%= meta.assets_root %>/js-core/transition.js',
                    '<%= meta.assets_root %>/js-core/jquery-cookie.js'

                ],
                dest: '<%= meta.assets_concat_root %>js-core.js'
            }

        },

        copy: {

            icons: {
                files: [{
                    expand: true,
                    cwd: '<%= meta.assets_root %>icons',
                    src: ['**'],
                    dest: '<%= meta.assets_minified_root %>/icons'
                }]
            },
            images: {
                files: [{
                    expand: true, cwd: '<%= meta.assets_root %>images', src: ['**'], dest: '<%= meta.assets_minified_root %>/images'
                }]
            },
            dummy_images: {
                files: [{
                    expand: true,
                    cwd: '<%= meta.assets_root %>dummy-images',
                    src: ['**'],
                    dest: '<%= meta.assets_minified_root %>/dummy-images'
                }]
            },
            pretty_photo: {
                files: [{
                    expand: true,
                    cwd: '<%= meta.assets_root %>widgets/pretty-photo/images',
                    src: ['**'],
                    dest: '<%= meta.assets_minified_root %>/widgets/pretty-photo/images'
                }]
            },
            demo_css: {
                src: '<%= meta.assets_root %>/demo.css',
                dest: '<%= meta.assets_minified_root %>/demo.css'
            },
            production_demo: {
                expand: true,
                cwd: '<%= meta.pages_distribution %>',
                src: ['**'],
                dest: '<%= meta.pages_demo %>'
            },
            demo_assets_minified_copy: {
                expand: true,
                cwd: '<%= meta.assets_minified_root %>',
                src: ['**'],
                dest: 'demo/assets-minified'
            },
            production_assets_minified_copy: {
                expand: true,
                cwd: '<%= meta.assets_minified_root %>',
                src: ['**'],
                dest: 'production/assets-minified'
            },
            docs_assets_minified_copy: {
                expand: true,
                cwd: '<%= meta.assets_minified_root %>',
                src: ['**'],
                dest: 'documentation/assets-minified'
            },
            demo_assets_copy: {
                expand: true,
                cwd: '<%= meta.assets_root %>',
                src: ['**'],
                dest: 'demo/assets'
            },
            production_assets_copy: {
                expand: true,
                cwd: '<%= meta.assets_root %>',
                src: ['**'],
                dest: 'production/assets'
            },
            docs_assets_copy: {
                expand: true,
                cwd: '<%= meta.assets_root %>',
                src: ['**'],
                dest: 'documentation/assets'
            }


        },

        dom_munger: {

            remove_1: {
                options: {
                    remove: '.remove-production'
                },
                src: 'production/*.html'
            },
            remove_2: {
                options: {
                    remove: '.example-html'
                },
                src: 'production/*.html'
            }

        },

        'http-server': {

            'aui_server': {
                root: "",
                port: 8585,
                host: "localhost",
                showDir : true,
                autoIndex: true,
                defaultExt: "html",
                runInBackground: false
            }

        },

        //'string-replace': {
        //
        //    assets_production_path: {
        //        files: {
        //            'production/': 'production/**/*'
        //        },
        //        options: {
        //            replacements: [{
        //                pattern: /\bassets\b/ig,
        //                replacement: 'assets-minified'
        //            }]
        //        }
        //    },
        //    assets_documentation_path: {
        //        files: {
        //            'documentation/': 'documentation/**/*'
        //        },
        //        options: {
        //            replacements: [{
        //                pattern: /\bassets\b/ig,
        //                replacement: 'assets-minified'
        //            }]
        //        }
        //    }
        //
        //},

        htmlclean: {
            options: {},
            deploy: {
                expand: true,
                cwd: 'demo/',
                src: '**/*.html',
                dest: 'demo/'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                expand: true,
                cwd: 'production',
                src: ['**/*.html'],
                dest: 'demo/'
            }
        },

        clean: {
            clean_all: ["documentation", "assets-minified", "assets-concat", "production", "demo"]
        }

    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-dom-munger');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-string-replace');


    grunt.registerTask('server', [
        'http-server'
    ]);

    grunt.registerTask('default', [
        'clean', 'assemble', 'concat', 'uglify', 'cssmin', 'copy', 'dom_munger'
    ]);

    grunt.registerTask('assets-production', [
        'string-replace'
    ]);

    grunt.registerTask('create-demo', [
        'clean', 'assemble', 'concat', 'uglify', 'cssmin', 'copy', 'dom_munger', 'htmlmin'
    ]);

    grunt.registerTask('all', [
        'clean', 'assemble', 'concat', 'uglify', 'cssmin', 'copy', 'dom_munger'
    ]);

};


