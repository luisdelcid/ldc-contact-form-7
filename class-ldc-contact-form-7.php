<?php

if(!class_exists('ldc_contact_form_7')){
	final class ldc_contact_form_7 {

		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //
        // public
        //
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        public function enable(){
            ldc()->one('do_shortcode_tag', function($output, $tag, $attr, $m){
                if('contact-form-7' != $tag){
            		return $output;
            	}
            	$contact_form = wpcf7_get_current_contact_form();
            	if(!$contact_form){
            		return $output;
            	}
                return apply_filters('ldc_cf7_form_html', $output, $contact_form, $attr, $m);
            }, 10, 4);
        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	}
}
