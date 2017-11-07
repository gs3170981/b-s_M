var index = (function () {
  var _method = {
    // 数据集
    data: '',
    // 初始化
    init: function () {
      _method.ajax()
    },
    // 数据获取
    ajax: function () {
      _method.data = {
        title: '景区数据统计分析平台',
        menu: [{
          title: '首页',
          href: '#/'
        }, {
          title: '综合管理',
          href: '#/Integrated_M'
        }, {
          title: '维护管理',
          href: '#/Maintenance_M'
        }, {
          title: '服务支撑',
          href: '#/ServiceSupport'
        }, {
          title: '运营分析',
          href: '#/Operation_A'
        }, {
          title: '工单管理',
          href: '#/Order_M'
        }, {
          title: '系统管理',
          href: '#/System_M'
        }]
      }
      _method.handle()
    },
    // 数据处理
    handle: function () {
      _method.render()
    },
    // 数据渲染
    render: function () {
      if ($('.J_content')[0]) {
        $('.J_content').html(template('index/index/index'))
      } else {
        $('body').html(template('index/index', _method.data))
      }
      _method.bind()
    },
    // 事件绑定
    bind: function () {
      $('.layui-nav .layui-nav-item').off('click').click(function () {
        $('.layui-nav .layui-nav-item').removeClass('layui-this')
        $(this).addClass('layui-this')
      })
      /*刷新路由时并执行添加活动的标志*/
      var path = '#' + window.Router.path
      $('a[href="' + path + '"]').parent().addClass('layui-this')
    }
  }
  return {
    init: function () {
      _method.init()
    }
  }
})()