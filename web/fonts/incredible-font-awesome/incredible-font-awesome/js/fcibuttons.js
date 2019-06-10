//////////////////////////////////////////////////////////////////
// Add Font Awesome
//////////////////////////////////////////////////////////////////
(function() {  
    tinymce.create('tinymce.plugins.fcibuttons', {
        init : function(ed, url) {  
            fontawesome_shortcode_url = url;
            
        },    
        createControl : function(n, cm) {
            switch(n) {
                case 'fcibuttons':
                    var c = cm.createSplitButton('fcibuttons', {
                        title : 'Font Awesome Form Control Icons',
                        image : fontawesome_shortcode_url+'/fcibuttons.png'
                        
                    }); 

                    c.onRenderMenu.add(function(c, m) {
                        m.add({
                            title : 'Font Awesome Form Control Icons',
                            'class' : 'mceMenuItemTitle'
                        }).setDisabled(1);

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
                            title : '<i class="fa fa-dot-circle-o"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-dot-circle-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
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
	                   
                        
                    });

                  // Return the new menubutton instance
                  return c;
            }

            return null;
        },  
    });  
    tinymce.PluginManager.add('fcibuttons', tinymce.plugins.fcibuttons);  
})();