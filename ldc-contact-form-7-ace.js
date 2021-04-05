
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var ldc_contact_form_7_ace_editors = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if(typeof ldc_contact_form_7_ace_edit !== 'function'){
    function ldc_contact_form_7_ace_edit(id = ''){
        if(jQuery('#' + id).length){
        	jQuery('#' + id).hide();
        	jQuery('<div id="' + id + '-editor"></div>').insertBefore('#' + id);
            ldc_contact_form_7_ace_editors[id] = ace.edit(id + '-editor');
            ldc_contact_form_7_ace_editors[id].$blockScrolling = Infinity;
            ldc_contact_form_7_ace_editors[id].setOptions({
            	enableBasicAutocompletion: true,
            	enableLiveAutocompletion: true,
            	fontSize: 14,
                maxLines: Infinity,
                minLines: 5,
                wrap: true,
            });
            ldc_contact_form_7_ace_editors[id].getSession().on('change', function(){
                jQuery('#' + id).val(ldc_contact_form_7_ace_editors[id].getSession().getValue()).trigger('change');
            });
            ldc_contact_form_7_ace_editors[id].getSession().setMode('ace/mode/html');
            ldc_contact_form_7_ace_editors[id].getSession().setValue(jQuery('#' + id).val());
            ldc_contact_form_7_ace_editors[id].setTheme('ace/theme/monokai');
        }
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if(typeof ldc_contact_form_7_ace_destroy !== 'function'){
    function ldc_contact_form_7_ace_destroy(id = ''){
        if(typeof ldc_contact_form_7_ace_editors[id] !== 'undefined'){
            ldc_contact_form_7_ace_editors[id].destroy();
            jQuery('#' + id + '-editor').remove();
        	jQuery('#' + id).show();
        }
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if(typeof ldc_contact_form_7_ace_mail !== 'function'){
    function ldc_contact_form_7_ace_mail(){
        if(jQuery('#wpcf7-mail-use-html').prop('checked')){
            ldc_contact_form_7_ace_edit('mail-body');
        } else {
            ldc_contact_form_7_ace_destroy('mail-body');
        }
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if(typeof ldc_contact_form_7_ace_mail_2 !== 'function'){
    function ldc_contact_form_7_ace_mail_2(){
        if(jQuery('#wpcf7-mail-2-use-html').prop('checked')){
            ldc_contact_form_7_ace_edit('wpcf7-mail-2-body');
        } else {
            ldc_contact_form_7_ace_destroy('wpcf7-mail-2-body');
        }
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jQuery(function($){
	if(typeof ace != 'undefined'){
        ace.config.set('basePath', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12');
       	ace.require('ace/ext/language_tools');
        $('#tag-generator-list').hide();
        ldc_contact_form_7_ace_edit('wpcf7-form');
        ldc_contact_form_7_ace_mail();
        ldc_contact_form_7_ace_mail_2();
        $('#wpcf7-mail-use-html').on('change', ldc_contact_form_7_ace_mail);
        $('#wpcf7-mail-2-use-html').on('change', ldc_contact_form_7_ace_mail_2);
	}
});
