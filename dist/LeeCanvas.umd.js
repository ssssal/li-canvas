!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LeeCanvas=e()}(this,function(){"use strict";var t=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var e=Symbol(),i=Symbol(),n=Symbol(),a=Symbol(),o=Symbol(),s=Symbol(),r=Symbol(),l=Symbol(),c=Symbol(),h={backgroundColor:"#ffffff",fontStyle:{x:0,y:0,fontSize:14,fontStyle:"normal",fontWeight:"normal",fontFamily:"PingFangSC-Regular,'Microsoft YaHei',SimSun,Arial,'Helvetica Neue',sans-serif",lineHeight:20,color:"black",marginBottom:10}};function f(t){return Object.prototype.toString.call(t)==Object.prototype.toString.call([])}function u(t){return Object.prototype.toString.call(t)==Object.prototype.toString.call({})}function y(t){return Object.prototype.toString.call(t)==Object.prototype.toString.call("a")}return function(){function v(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,n=i.backgroundColor,a=i.fontStyle;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v),this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.tasks=new Array,this.fontStyle=a,this.fontStartX=a.x,this.fontStartY=a.y,delete a.x,delete a.y,n&&this[e](n)}return t(v,[{key:e,value:function(t){this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight)}},{key:i,value:function(t){return this.canvas.toDataURL(t)}},{key:n,value:function(t){var e=document.createElement("a");e.href=t,e.download=this.saveFileName,e.click()}},{key:a,value:function(t){return"image/"+(t=(t=t.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0])}},{key:o,value:function(t){t=this[a](t);var e=this[i](t);this[n](e)}},{key:"saveToPng",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iCanvas";this.saveFileName=t+".png",this[o]("png")}},{key:"saveToJpeg",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iCanvas";this.saveFileName=t+".jpeg",this[o]("jpeg")}},{key:s,value:function(t,e){this.tasks.push({type:t,params:e})}},{key:"addDrawImageTask",value:function(t){var e=this;if(f(t))t.forEach(function(t){e[s]("DRAW_IMAGE_TASK",t)});else{if(!u(t))throw new Error("addDrawImageTask 参数只支持对象或数组");this[s]("DRAW_IMAGE_TASK",t)}}},{key:"addDrawTextTask",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this[s]("DRAW_TEXT_TASK",{text:t,style:e})}},{key:r,value:function(t){var e=this;if(0!=this.tasks.length){var i=this.tasks.shift();if(i)switch(i.type){case"DRAW_IMAGE_TASK":this[l](i.params,function(){e[r](t)});break;case"DRAW_TEXT_TASK":this.drawTexts(i.params),this[r](t)}}else"function"==typeof t&&t()}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this[r](t)}},{key:l,value:function(t,e){var i=this,n=new Image;n.setAttribute("crossOrigin","Anonymous"),n.src=t.src,n.onload=function(){t.hasOwnProperty("borderRadius")?i[c](n,t.x,t.y,t.width,t.height,t.borderRadius):i.ctx.drawImage(n,t.x,t.y,t.width,t.height),"function"==typeof e&&e.call(i)}}},{key:c,value:function(t,e,i,n,a,o){var s=Math.min(o,n/2,a/2);this.ctx.save(),this.ctx.beginPath(),this.ctx.moveTo(e,i+s),this.ctx.arcTo(e,i,e+s,i,s),this.ctx.lineTo(e+n-s,i),this.ctx.arcTo(e+n,i,e+n,i+s,s),this.ctx.lineTo(e+n,i+a-s),this.ctx.arcTo(e+n,i+a,e+n-s,i+a,s),this.ctx.lineTo(e+s,i+a),this.ctx.arcTo(e,i+a,e,i+a-s,s),this.ctx.lineTo(e,i+s),this.ctx.clip(),this.ctx.drawImage(t,e,i,n,a),this.ctx.restore()}},{key:"getImageData",value:function(){return this.canvas.toDataURL("image/png")}},{key:"drawTexts",value:function(t){var e=this,i=t.text,n=t.style;if(y(i)){var a=Object.assign({},this.fontStyle,n);this.drawText(i,a)}else if(f(i))i.forEach(function(t,i){if(y(t)){var a=Object.assign({},e.fontStyle,n);e.drawText(t,a),0==i&&(delete n.x,delete n.y)}else if(u(t)){var o=Object.assign({},e.fontStyle,n,t);e.drawText(t.text,o),0==i&&(delete n.x,delete n.y)}});else if(u(i)){var o=Object.assign({},this.fontStyle,n,i);this.drawText(i.text,o)}}},{key:"drawText",value:function(t,e){console.log(t),console.log(e),e.hasOwnProperty("x")&&(this.fontStartX=e.x),e.hasOwnProperty("y")&&(this.fontStartY=e.y);var i=void 0;i=e.hasOwnProperty("width")?e.width:this.canvasWidth-this.fontStartX,this.ctx.font=[e.fontStyle,e.fontWeight,e.fontSize+"px",e.fontFamily].join(" "),this.ctx.fillStyle=e.color,this.ctx.textBaseline="top";for(var n="",a=[],o=0;o<t.length;o++)n+=t[o],(this.ctx.measureText(n).width>=i||o==t.length-1)&&(a.push(n),n="");for(var s=0;s<a.length;s++)this.ctx.fillText(a[s],Math.floor(this.fontStartX),Math.floor(this.fontStartY)),s<a.length-1?this.fontStartY+=e.lineHeight:this.fontStartY+=e.fontSize+e.marginBottom}}]),v}()});
