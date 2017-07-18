CKEDITOR.editorConfig = function(config) {
	config.language = 'en';
	config.width = '700';
	config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
	config.filebrowserImageBrowseLinkUrl = 'ckeditor/pictures';
	config.filebrowserImangeBrowseUrl = 'ckeditor/pictures';
	config.filebrowserImageUploadUrl = 'ckeditor/pictures';
	config.filebrowserUploaderUrl = 'ckeditor/attachment_files';

	config.toolbar_Pure = [
		'/', {
			name: 'basicstyles',
			items: ['Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat']
		} , {
			name: 'paragraph',
			items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtr' ]
		} , {
			name: 'links',
			items: ['Link', 'Unlink']
		} , {
			name: 'styles',
			items: ['Styles', 'Format', 'Font', 'FontSize']
		} , {
			name: 'colours',
			items: ['TextColor', 'BGColor']
		} , {
			name: 'insert',
			items: ['Image', 'Table', 'HorzontalRule', 'PageBreak']
		}
	];

	config.toolbar = 'Pure';
	return true;
}