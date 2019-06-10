//////////////////////////////////////////////////////////////////
// Add Font Awesome
//////////////////////////////////////////////////////////////////
(function() {  
    tinymce.create('tinymce.plugins.vpibuttons', {
        init : function(ed, url) {  
            fontawesome_shortcode_url = url;
            
        },    
        createControl : function(n, cm) {
            switch(n) {
                case 'vpibuttons':
                    var c = cm.createSplitButton('vpibuttons', {
                        title : 'Font Awesome Video Player Icons',
                        image : fontawesome_shortcode_url+'/vpibuttons.png'
                        
                    }); 

                    c.onRenderMenu.add(function(c, m) {
                        m.add({
                            title : 'Font Awesome Video Player Icons',
                            'class' : 'mceMenuItemTitle'
                        }).setDisabled(1);

                       m.add({
                            title : '<i class="fa fa-arrows-alt"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-arrows-alt" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });
                        m.add({
                                title : '<i class="fa fa-backward"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-backward" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-compress"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-compress" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-eject"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-eject" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-expand"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-expand" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-fast-backward"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-fast-backward" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-fast-forward"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-fast-forward" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-forward"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-forward" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-pause"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-pause" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-play"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-play" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-play-circle"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-play-circle" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-play-circle-o"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-play-circle-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-step-backward"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-step-backward" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-step-forward"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-step-forward" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-stop"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-stop" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });
                        m.add({
                                title : '<i class="fa fa-youtube-play"></i>',
                                onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-youtube-play" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                                }
                        });                   
                        
                    });

                  // Return the new menubutton instance
                  return c;
            }

            return null;
        },  
    });  
    tinymce.PluginManager.add('vpibuttons', tinymce.plugins.vpibuttons);  
})();