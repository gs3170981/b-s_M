(function () {
	function Router () {
		this.routes = {}
		this.data = []
	}
	Router.prototype.route = function (path) {
		this.routes[path.path] = {
			data: path,
			load: function () {
				var path = $.extend(true, [], this.data).path;
				lazyLoadJs(path === '/' ? 'index' : path.substring(1, path.length))
			}
		}
	}
	Router.prototype.refresh = function() {
		this.path = location.hash.slice(1) || '/'
		if (!this.routes[this.path]) { // 路由纠正
			this.path = '/'
		}
		this.routes[this.path].load()
	}
	Router.prototype.init = function() {
		window.addEventListener('load', this.refresh.bind(this), false)
		window.addEventListener('hashchange', this.refresh.bind(this), false)
	}
	window.Router = new Router()
	window.Router.init()
	function lazyLoadJs (src) {
		var path = 'js/logic/main/' + src + '.js'
		var head = $('head').html()
	    // 避免重复loadJS
		if (head.indexOf(path) !== -1) {
			load(src)
			return
		}
		// 防止在路由中刷新导致的未加载index --- bug
		var index = 'js/logic/main/index.js'
		if (head.indexOf(index) === -1) {
			jsLoad(index, 'index')
			// 防止加载当前index所导致的不跳出
			if (path === index) {
				return
			}
		}
		setTimeout(function () {
			jsLoad(path, src)
		}, 0)
	    function jsLoad (path , src) {
	    	var script = document.createElement('script')
		    script.setAttribute("type", "text/javascript")
		    script.setAttribute("src", path)
		    $('head')[0].appendChild(script)
		    script.onload = script.onreadystatechange = function () {
			   	if(!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete'){
		    		console.log(path + ' --- 引入')
				    load(src)
			   	}
		   		script.onload = script.onreadystatechange = null
			}
	    }
	    function load (src) {
	    	try {
	    		$('.content').html('') // 内容清空
				// echarts自适应清空
//				window.charts = []
	    		window[src].init()
	    	} catch (e) {
				toastr.error('该JS文件有误，错误信息： ' + e.message + ' 请查看控制台定位进行调试', src)
	    		setTimeout(function () {
	    			window[src].init()
	    			return
	    		}, 300)
	    	}
	    }
	}
})()
