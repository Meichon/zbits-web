<?php
/*
Plugin Name: Font Awesome timymce
Description: Add Font Awesome icons to your WordPress post. 
Version: 1.0
Author: Massimo Serpilli
Author URI: http://www.servicecomputer.eu
License: GNU General Public License v2.0
License URI: http://www.opensource.org/licenses/gpl-license.php
Copyright: 2013 Massimo Serpilli
*/        

if(!defined('FONTAW_VERSION')){
    define('FONTAW_VERSION', '1.0.0' );
}
if(!defined('FONTAW_URL')){
	define('FONTAW_URL', plugin_dir_url(__FILE__) );
}

add_action( 'wp_enqueue_scripts', 'ifa_styles_scripts' );

function ifa_styles_scripts() {
    wp_enqueue_style( 'fontawesone-style', FONTAW_URL.'css/font-awesome.css');
    wp_enqueue_style( 'fontawesone-admin-style', FONTAW_URL.'css/styleawesome.css');
}

function add_button() {
	if ( ( current_user_can('edit_posts') || current_user_can('edit_pages') ) && get_user_option('rich_editing') ) {
			add_filter('mce_external_plugins', 'add_plugin');  
			add_filter('mce_buttons_3', 'register_button');  
	}
}    

function register_button($buttons) {
   $buttons[] = 'waibuttons';
   $buttons[] = 'nibuttons';
   $buttons[] = 'fcibuttons';
   $buttons[] = 'cibuttons';
   $buttons[] = 'teibuttons';
   $buttons[] = 'dibuttons';
   $buttons[] = 'vpibuttons';
   $buttons[] = 'bibuttons';
   $buttons[] = 'mibuttons';
   return $buttons;
}  

function add_plugin($plugin_array) {  
   $plugin_array['waibuttons'] = FONTAW_URL.'js/waibuttons.js';
   $plugin_array['nibuttons'] = FONTAW_URL.'js/nibuttons.js';
   $plugin_array['fcibuttons'] = FONTAW_URL.'js/fcibuttons.js';
   $plugin_array['cibuttons'] = FONTAW_URL.'js/cibuttons.js';
   $plugin_array['teibuttons'] = FONTAW_URL.'js/teibuttons.js';
   $plugin_array['dibuttons'] = FONTAW_URL.'js/dibuttons.js';
   $plugin_array['vpibuttons'] = FONTAW_URL.'js/vpibuttons.js';
   $plugin_array['bibuttons'] = FONTAW_URL.'js/bibuttons.js';
   $plugin_array['mibuttons'] = FONTAW_URL.'js/mibuttons.js';
   return $plugin_array;  
}

function shortcode_fontawesome($atts, $content = null) {

	extract(shortcode_atts(array(
		'icon' => '',
                'iconcolor' => '',
                'fixed' => '',
		'circlecolor' => '',
		'circlebordercolor' => '',
            ), $atts));
        
        
        if($atts['fixed'] == 'yes') {
                        $fixed = 'fa-fw';
	}
        
        $style = 'color:'.$iconcolor.' !important;';
        
	$html = '<i style="'.$style.'" class="'.$atts['icon'].' fa-'.$atts['size'].' '.$fixed.' " ></i>';
	return $html;
}

add_action('init', 'add_button');
add_shortcode('fontawesome', 'shortcode_fontawesome'); 




    