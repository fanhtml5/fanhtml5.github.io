!function(){var e="gyZX1NOevan0WZul+ulPZTBO+DSpWkm3y46qmyxMiQs=",n=["https://i0.hdslb.com/bfs/article/484c1e1a0c41d4482f6fc12113236a19d75fd3c3.png","https://pic3.zhimg.com/80/v2-a492fc0204ad0275e0b609ceac2dab10.png","https://upload-images.jianshu.io/upload_images/6294093-5a04090325c2d251.png","https://cdn.nlark.com/yuque/0/2021/png/1527627/1630661958032-f6610875-4a71-48ab-b1b3-a494f5adf893.png"],t=location.origin+location.pathname.replace(/[^/]+$/,"");self.document?function(){var a=document.documentElement;function r(e){a.innerHTML=e}var o=navigator.serviceWorker;if(o){var c,i,s=o.register(document.currentScript.src).catch((function(e){r(e.message)})),u=function(e){var n=new Image;n.onload=function(){var e=document.createElement("canvas");e.width=n.width,e.height=n.height;var t=e.getContext("2d");t.drawImage(n,0,0);var a=t.getImageData(0,0,n.width,n.height).data.buffer;parent.postMessage(a,"*",[a])},n.onerror=function(){parent.postMessage("","*")},n.crossOrigin=!0,n.src=e.data},d=document.createElement("iframe");d.src="data:text/html;base64,"+btoa("<script>onmessage="+u+"</script>"),d.style.display="none",d.onload=function(){h()},self.onmessage=function(e){e.source===i&&f(e.data)},a.appendChild(d),i=d.contentWindow}else r("Error: Service Worker is not supported");function f(n){n?crypto.subtle.digest("SHA-256",n).then((function(a){var r,o,i,u=new Uint8Array(a),d=btoa(String.fromCharCode.apply(null,u));e===d?function(e){var n=e.indexOf(13),a=e.subarray(0,n),r=(new TextDecoder).decode(a),o=JSON.parse(r),i=[],s=n+1;for(var u in o){var d=o[u];d["cache-control"]="max-age=600";var f=d["content-length"],h=e.subarray(s,s+f),l=new Request(t+u),p=new Response(h,{headers:d});i.push(c.put(l,p)),s+=f}return Promise.all(i)}((r=new Uint32Array(n),o=new Uint8Array(3*r.length),i=0,r.forEach((function(e){o[i++]=e,o[i++]=e>>8,o[i++]=e>>16})),o)).then((function(){s.then((function(){location.reload()}))})):l()})):l()}function h(){caches.open(".bundle").then((function(e){c=e,l()}))}function l(){var e=n.shift();e&&i.postMessage(e,"*")}}():onfetch=function(e){var n=e.request.url;0===n.indexOf(t)&&e.respondWith(function(e){return/\/$/.test(e)&&(e+="index.html"),caches.open(".bundle").then((function(n){return n.match(e).then((function(e){return e||n.match("/404.html").then((function(e){return e||new Response("file not found",{status:404})}))}))}))}(n.split("?")[0]))}}();
