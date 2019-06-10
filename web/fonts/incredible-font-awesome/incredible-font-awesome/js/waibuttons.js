//////////////////////////////////////////////////////////////////
// Add Font Awesome
//////////////////////////////////////////////////////////////////
(function() {  
    tinymce.create('tinymce.plugins.waibuttons', {
        init : function(ed, url) {  
            fontawesome_shortcode_url = url;
            
        },    
        createControl : function(n, cm) {
            switch(n) {
                case 'waibuttons':
                    var c = cm.createSplitButton('waibuttons', {
                        title : 'Font Awesome Web Application Icons',
                        image : fontawesome_shortcode_url+'/waibuttons.png'
                        
                    }); 

                    c.onRenderMenu.add(function(c, m) {
                        m.add({
                            title : 'Font Awesome Web Application Icons',
                            'class' : 'mceMenuItemTitle'
                        }).setDisabled(1);

                        m.add({
                            title : '<i class="fa fa-adjust"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-adjust" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-anchor"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-anchor" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-archive"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-archive" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-arrows"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-arrows" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-arrows-h"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-arrows-h" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-arrows-v"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-arrows-v" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-asterisk"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-asterisk" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-ban"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-ban" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bar-chart-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bar-chart-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-barcode"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-barcode" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bars"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bars" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-beer"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-beer" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bell"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bell" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bell-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bell-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bolt"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bolt" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-book"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-book" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bookmark"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bookmark" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bookmark-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bookmark-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-briefcase"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-briefcase" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bug"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bug" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-building-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-building-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bullhorn"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bullhorn" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bullseye"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bullseye" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-calendar"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-calendar" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-calendar-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-calendar-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-camera"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-camera" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-camera-retro"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-camera-retro" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-caret-square-o-down"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-caret-square-o-down" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-caret-square-o-left"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-caret-square-o-left" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-caret-square-o-right"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-caret-square-o-right" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-caret-square-o-up"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-caret-square-o-up" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-certificate"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-certificate" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-check"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-check" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-check-circle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-check-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-check-circle-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-check-circle-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-check-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-check-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-check-square-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-check-square-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-circle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-circle-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-circle-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-clock-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-clock-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-cloud"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-cloud" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-cloud-download"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-cloud-download" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-cloud-upload"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-cloud-upload" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-code"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-code" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-code-fork"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-code-fork" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-coffee"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-coffee" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-cog"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-cog" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-cogs"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-cogs" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-comment"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-comment" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-comment-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-comment-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-comments"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-comments" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-comments-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-comments-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-compass"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-compass" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-credit-card"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-credit-card" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-crop"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-crop" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-crosshairs"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-crosshairs" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-cutlery"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-cutlery" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-dashboard"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-dashboard" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-desktop"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-desktop" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-dot-circle-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-dot-circle-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-download"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-download" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-edit"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-edit" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-ellipsis-h"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-ellipsis-h" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-ellipsis-v"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-ellipsis-v" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-envelope"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-envelope" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-envelope-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-envelope-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-eraser"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-eraser" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-exchange"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-exchange" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-exclamation"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-exclamation" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-exclamation-circle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-exclamation-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-exclamation-triangle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-exclamation-triangle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-external-link"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-external-link" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-external-link-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-external-link-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-eye"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-eye" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-eye-slash"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-eye-slash" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-female"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-female" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-fighter-jet"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-fighter-jet" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-film"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-film" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-filter"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-filter" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-fire"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-fire" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-fire-extinguisher"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-fire-extinguisher" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-flag"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-flag" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-flag-checkered"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-flag-checkered" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-flag-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-flag-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-flash"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-flash" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-flask"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-flask" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-folder"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-folder" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-folder-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-folder-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-folder-open"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-folder-open" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-folder-open-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-folder-open-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-frown-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-frown-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-gamepad"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-gamepad" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-gavel"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-gavel" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-gear"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-gear" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-gears"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-gears" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-gift"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-gift" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-glass"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-glass" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-globe"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-globe" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-group"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-group" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-hdd-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-hdd-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-headphones"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-headphones" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-heart"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-heart" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-heart-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-heart-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-home"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-home" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-inbox"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-inbox" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-info"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-info" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-info-circle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-info-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-key"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-key" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-keyboard-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-keyboard-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-laptop"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-laptop" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-leaf"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-leaf" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-legal"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-legal" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-lemon-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-lemon-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-level-down"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-level-down" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-level-up"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-level-up" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-lightbulb-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-lightbulb-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-location-arrow"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-location-arrow" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-lock"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-lock" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-magic"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-magic" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-magnet"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-magnet" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-mail-forward"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-mail-forward" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-mail-reply"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-mail-reply" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-mail-reply-all"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-mail-reply-all" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-male"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-male" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-map-marker"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-map-marker" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-meh-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-meh-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-microphone"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-microphone" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-microphone-slash"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-microphone-slash" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-minus"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-minus" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-minus-circle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-minus-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-minus-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-minus-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-minus-square-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-minus-square-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-mobile"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-mobile" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-mobile-phone"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-mobile-phone" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-money"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-money" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-moon-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-moon-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-music"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-music" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-pencil"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-pencil" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-pencil-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-pencil-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-pencil-square-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-pencil-square-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-phone"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-phone" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-phone-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-phone-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-picture-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-picture-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-plane"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-plane" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-plus"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-plus" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-plus-circle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-plus-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-plus-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-plus-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-plus-square-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-plus-square-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-power-off"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-power-off" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-print"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-print" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-puzzle-piece"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-puzzle-piece" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-qrcode"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-qrcode" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-question"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-question" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-question-circle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-question-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-quote-left"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-quote-left" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-quote-right"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-quote-right" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-random"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-random" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-refresh"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-refresh" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-reply"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-reply" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-reply-all"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-reply-all" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-retweet"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-retweet" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-road"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-road" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-rocket"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-rocket" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-rss"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-rss" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-rss-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-rss-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-search"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-search" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-search-minus"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-search-minus" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-search-plus"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-search-plus" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-share"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-share" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-share-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-share-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-share-square-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-share-square-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-shield"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-shield" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-shopping-cart"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-shopping-cart" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sign-in"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sign-in" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sign-out"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sign-out" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-signal"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-signal" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sitemap"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sitemap" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-smile-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-smile-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-alpha-asc"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-alpha-asc" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-alpha-desc"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-alpha-desc" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-amount-asc"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-amount-asc" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-amount-desc"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-amount-desc" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-asc"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-asc" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-desc"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-desc" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-down"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-down" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-numeric-asc"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-numeric-asc" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-numeric-desc"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-numeric-desc" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sort-up"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sort-up" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-spinner"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-spinner" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-square"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-square-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-square-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-star"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-star" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-star-half"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-star-half" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-star-half-empty"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-star-half-empty" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-star-half-full"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-star-half-full" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-star-half-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-star-half-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-star-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-star-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-subscript"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-subscript" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-suitcase"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-suitcase" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-sun-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-sun-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-superscript"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-superscript" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-tablet"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-tablet" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-tachometer"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-tachometer" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-tag"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-tag" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-tags"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-tags" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-tasks"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-tasks" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-terminal"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-terminal" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-thumb-tack"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-thumb-tack" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-thumbs-down"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-thumbs-down" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-thumbs-o-down"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-thumbs-o-down" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-thumbs-o-up"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-thumbs-o-up" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-thumbs-up"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-thumbs-up" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-ticket"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-ticket" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-times"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-times" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-times-circle"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-times-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-times-circle-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-times-circle-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-tint"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-tint" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-toggle-down"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-toggle-down" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-toggle-left"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-toggle-left" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-toggle-right"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-toggle-right" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-toggle-up"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-toggle-up" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-trash-o"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-trash-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-trophy"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-trophy" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-truck"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-truck" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-umbrella"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-umbrella" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-unlock"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-unlock" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-unlock-alt"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-unlock-alt" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-unsorted"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-unsorted" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-upload"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-upload" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-user"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-user" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-users"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-users" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-video-camera"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-video-camera" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-volume-down"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-volume-down" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-volume-off"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-volume-off" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-volume-up"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-volume-up" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-warning"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-warning" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-wheelchair"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-wheelchair" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-wrench"></i>',
                            onclick : function() {
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-wrench" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });
                    });

                  // Return the new menubutton instance
                  return c;
            }

            return null;
        },  
    });  
    tinymce.PluginManager.add('waibuttons', tinymce.plugins.waibuttons);  
})();