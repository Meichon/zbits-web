//////////////////////////////////////////////////////////////////
// Add Font Awesome
//////////////////////////////////////////////////////////////////
(function() {  
    tinymce.create('tinymce.plugins.teibuttons', {
        init : function(ed, url) {  
            fontawesome_shortcode_url = url;
            
        },    
        createControl : function(n, cm) {
            switch(n) {
                case 'teibuttons':
                    var c = cm.createSplitButton('teibuttons', {
                        title : 'Font Awesome Text Editor Icons',
                        image : fontawesome_shortcode_url+'/teibuttons.png'
                        
                    }); 

                    c.onRenderMenu.add(function(c, m) {
                        m.add({
                            title : 'Font Awesome Text Editor Icons',
                            'class' : 'mceMenuItemTitle'
                        }).setDisabled(1);

                      	m.add({
                            title : '<i class="fa fa-align-center"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-align-center" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-align-justify"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-align-justify" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-align-left"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-align-left" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-align-right"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-align-right" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-bold"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-bold" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-chain"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-chain" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-chain-broken"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-chain-broken" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-clipboard"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-clipboard" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-columns"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-columns" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-copy"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-copy" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-cut"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-cut" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-dedent"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-dedent" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-eraser"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-eraser" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-file"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-file" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-file-o"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-file-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-file-text"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-file-text" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-file-text-o"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-file-text-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-files-o"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-files-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-floppy-o"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-floppy-o" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-font"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-font" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-indent"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-indent" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-italic"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-italic" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-link"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-link" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-list"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-list" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-list-alt"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-list-alt" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-list-ol"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-list-ol" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-list-ul"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-list-ul" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-outdent"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-outdent" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-paperclip"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-paperclip" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-paste"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-paste" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-repeat"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-repeat" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-rotate-left"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-rotate-left" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-rotate-right"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-rotate-right" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-save"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-save" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-scissors"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-scissors" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-strikethrough"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-strikethrough" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-table"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-table" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-text-height"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-text-height" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-text-width"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-text-width" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-th"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-th" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-th-large"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-th-large" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-th-list"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-th-list" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-underline"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-underline" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-undo"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-undo" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });

                        m.add({
                            title : '<i class="fa fa-unlink"></i>',
                            onclick : function() {	
                                            tinyMCE.activeEditor.selection.setContent('[fontawesome icon="fa fa-unlink" size="lg or 2x or 3x or 4x or 5x" iconcolor="" fixed="yes or no"  ]');
                            }
                        });
                        
                    });

                  // Return the new menubutton instance
                  return c;
            }

            return null;
        },  
    });  
    tinymce.PluginManager.add('teibuttons', tinymce.plugins.teibuttons);  
})();