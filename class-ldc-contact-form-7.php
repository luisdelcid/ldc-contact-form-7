<?php

if(!class_exists('ldc_contact_form_7')){
	final class ldc_contact_form_7 {

		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //
        // public
        //
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        public function additional_settings(){
            ldc()->one('do_shortcode_tag', function($output, $tag, $attr, $m){
                if('contact-form-7' != $tag){
            		return $output;
            	}
            	$contact_form = wpcf7_get_current_contact_form();
            	if(!$contact_form){
            		return $output;
            	}
                return apply_filters('ldc_contact_form_7_form_html', $output, $contact_form, $attr, $m);
            }, 10, 4);
        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        public function html_editor(){
            ldc()->one('admin_enqueue_scripts', function(){
                wp_enqueue_script('ace', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.min.js', ['wpcf7-admin'], '1.4.12', true);
            	wp_enqueue_script('ace-language-tools', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ext-language_tools.min.js', ['ace'], '1.4.12', true);
                wp_enqueue_script('ldc-contact-form-7-ace', plugin_dir_url(__FILE__) . 'ldc-contact-form-7-ace.js', ['ace-language-tools'], filemtime(plugin_dir_path(__FILE__) . 'ldc-contact-form-7-ace.js'), true);
            });
        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	}
}
