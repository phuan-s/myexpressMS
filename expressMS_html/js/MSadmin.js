// 定义所有面板的配置对象数组
var data = [{
    id: 'panel1',   // 面板编号
    colWidth: '4',  // 栅格尺寸
    url: ''         // 设定面板远程内容更新地址
}, ...]

// 使用jquery方法获取 2d context 对象
var ctx = $("#myChart").get(0).getContext("2d");
// 或者使用 document.getElementById 获取 2d context 对象
// var ctx = document.getElementById("myChart").getContext("2d");

// 使用$.zui.Chart构造Chart实例
var myNewChart = new $.zui.Chart(ctx);

// 创建指定Canvas的Chart实例
var myChart = $("#myChart").chart();

var data = [{
    value: 150,
    color: "blue", // 使用颜色名称
    label: "蓝队"
}, {
    value: 250,
    color:"#F7464A", // 自定义颜色
    // highlight: "#FF5A5E", // 自定义高亮颜色
    label: "红队"
}, {
    value: 50,
    color: 'green',
    label: "绿队"
}, {
    // 不指定color值，使用随机颜色
    // 
    value: 100,
    label: "随机颜色队"
}];

// 图表配置项，可以留空来使用默认的配置
var options = {
    scaleShowLabels: true, // 展示标签
};

// 创建饼图
var myPieChart = $("#myPieChart").pieChart(data, options);

// 创建环形饼图
var myDoughnutChart = $("#myDoughnutChart").doughnutChart(data, {segmentShowStroke: false});


// 初始化
$('#myDashboard').dashboard({data: data});

$('#myDashboard').dashboard{
    afterPanelRemoved: function(id) {
        console.log('编号为', id, '的面板被移除。');
    }
}

$('#myDashboard').dashboard{
    afterOrdered: function(newOrders) {
        console.log('当前面板被重新排序，新的顺序为', newOrders);
    }
}

$('#myDashboard').dashboard{
    onResize: function(e) {
        console.log('当前面板栅格大小被更改为', e.grid);
    }
}

function add(){
	$('#myModal').modal({
	    keyboard : false,
	    show     : true;.
		moveable : true
	})
}
$('#dashboard').dashboard({draggable: true});

