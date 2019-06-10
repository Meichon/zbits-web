//////////////////////////////////////////////////////////////////
// Add Font Awesome
//////////////////////////////////////////////////////////////////
(function() {  
    tinymce.create('tinymce.plugins.mibuttons', {
        init : function(ed, url) {  
            fontawesome_shortcode_url = url;
            
        },    
        createControl : function(n, cm) {
            switch(n) {
                case 'mibuttons':
                    var c = cm.createSplitButton('mibuttons', {
                        title : 'Font Awesome Medical Icons',
                        image : fontawesome_shortcode_url+'/mibuttons.png'
                        
                    }); 

                    c.onRenderMenu.add(function(c, m) {
                        m.add({
                            title : 'Font Awesome Medical Icons',
                            'class' : 'mceMenuItemTitle'
                        }).setDisabled(1);

                       m.add({
                            title : '<i class="fa fa-ambulance"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-ambulance" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                    m.add({
                            title : '<i class="fa fa-h-square"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-h-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                    m.add({
                            title : '<i class="fa fa-hospital-o"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-hospital-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                    m.add({
                            title : '<i class="fa fa-medkit"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-medkit" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                    m.add({
                            title : '<i class="fa fa-plus-square"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-plus-square" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                    m.add({
                            title : '<i class="fa fa-stethoscope"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-stethoscope" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                    m.add({
                            title : '<i class="fa fa-user-md"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-user-md" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                    m.add({
                            title : '<i class="fa fa-wheelchair"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-wheelchair" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });
                        
                    });

                  // Return the new menubutton instance
                  return c;
            }

            return null;
        },  
    });  
    tinymce.PluginManager.add('mibuttons', tinymce.plugins.mibuttons);  
})();