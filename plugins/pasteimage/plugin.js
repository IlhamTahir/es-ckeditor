﻿(function(){CKEDITOR.plugins.add("pasteimage",{lang:"en,zh,zh-cn",requires:"uploadwidget",onLoad:function(){CKEDITOR.addCss(".cke_upload_uploading img{"+"opacity: 0.3"+"}")},init:function(d){CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("plugins/pasteimage/filesize.js"));if(!CKEDITOR.plugins.clipboard.isFileApiSupported){return}var b=CKEDITOR.fileTools,c=b.getUploadUrl(d.config,"imagePaste")||"";if(!c){return}b.addUploadWidget(d,"pasteimage",{supportedTypes:/image\/(jpeg|png|gif|bmp)/,uploadUrl:c,fileToElement:function(){var e=new CKEDITOR.dom.element("img");e.setAttribute("src",a);return e},parts:{img:"img"},onUploading:function(e){this.parts.img.setAttribute("src",e.data)},onUploaded:function(f){var g=this.parts.img.$,h=f.responseData.width||g.naturalWidth,e=f.responseData.height||g.naturalHeight;this.replaceWith('<img src="'+f.url+'" '+'width="'+h+'" '+'height="'+e+'">')}});d.on("paste",function(n){if(!n.data.dataValue.match(/<img[\s\S]+data:/i)){return}var g=n.data,f=document.implementation.createHTMLDocument(""),o=new CKEDITOR.dom.element(f.body),k,j,h;o.data("cke-editable",1);o.appendHtml(g.dataValue);k=o.find("img");for(h=0;h<k.count();h++){j=k.getItem(h);var l=j.getAttribute("src")&&j.getAttribute("src").substring(0,5)=="data:",e=j.data("cke-realelement")===null;if(l&&e&&!j.data("cke-upload-id")&&!j.isReadOnly(1)){var m=d.uploadRepository.create(j.getAttribute("src"));m.upload(c);b.markElement(j,"pasteimage",m.id);b.bindNotifications(d,m)}}g.dataValue=o.getHtml()});d.on("fileUploadRequest",function(g){var i=d.lang.pasteimage;var f=g.data.fileLoader,e=d.config.fileSingleSizeLimit||10;var h=e*1024*1024;if(f.file.size>h){alert(i.single_file_max_size_tip+filesize(e));g.cancel()}})}});var a=""})();