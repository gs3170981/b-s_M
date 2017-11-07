var Integrated_M = (function () {
	var _method = {
		// 数据集
		data: '',
		// 初始化
		init: function () {
			_method.ajax()
		},
		// 数据获取
		ajax: function () {
		  // 模拟数据
			_method.data = {
         menu: [
          {
            name: '出入管理',
            id: '1',
            child: [
              {
                name: '访客记录',
                id: '1-1'
              },{
                name: '访客证',
                id: '1-2'
              },{
                name: '物品出入',
                id: '1-3'
              }
            ]
          },{
            name: '物资管理',
            id: '2'
          },{
            name: '客户管理',
            id: '3'
          },{
            name: '客户经理',
            id: '4'
          },{
            name: '文档管理',
            id: '5'
          }
        ]
			}
			_method.handle()
		},
		// 数据处理
		handle: function () {
			_method.render()
		},
		// 数据渲染
		render: function () {
			$('.J_content').html(template('index/Integrated_M', _method.data))
			_method.bind()
		},
		// 事件绑定
		bind: function () {
		  // 二级菜单显示隐藏
      $('.layui-nav .layui-nav-item .list').off('hover').hover(function () {
        $(this).parent().find('.layui-nav-child').stop().show('fast')
      }, function () {
        var child = $('.layui-nav .layui-nav-item .layui-nav-child')
        $(child).off('mouseover').mouseover(function () {
          $(this).stop().show('fast')
          $(child).off('mouseout').mouseout(function () {
            $(this).stop().hide('fast')
          })
        })
        $(child).stop().hide('fast')
      })
      // 二级菜单点击绑定事件
      $('.layui-nav .layui-nav-item .list').off('click').click(function () {
        var val = $(this).attr('data-id')
        $('.J_content_child').html(template('index/Integrated_M/Integrated_M' + val))
      })
      // 二级菜单子项绑定事件
      $('.layui-nav .layui-nav-item').find('.chid-list').off('click').click(function () {
        var val = $(this).attr('data-id')
        $('.J_content_child').html(template('index/Integrated_M/Integrated_M' + val))
      })
      // 初始化默认点击第一个元素
      $('.layui-nav .layui-nav-item .list')[0].click()
		}
	}
	return {
		init: function () {
			_method.init()
		}
	}
})()
