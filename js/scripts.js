//SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive")
        sidebarOpen = false;
    }
}

//----------- CHARTS ----------------------
// BAR CHART
var barChartOptions = {
    colors: ['#0000ff', '#f5b74f', '#adff2f'],
    series: [{
    name: 'Total TC in a Sprint',
    type: 'column',
    data: [143, 235, 209, 269, 298, 221]
  }, {
    name: 'Total Automated TC',
    type: 'column',
    data: [99, 138, 188, 229, 266, 191]
  }, {
    name: 'Automation Index %',
    type: 'line',
    data: [69, 59, 90, 85, 89, 86]
  }],
    chart: {
    height: 350,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [4, 4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "35%"
    }
  },
  xaxis: {
    categories: ['Jan-23', 'Feb-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23'],
  },
  yaxis: [
    {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
        color: '#0000ff'
      },
      labels: {
        style: {
          colors: '#0000ff',
        }
      },
      title: {
        text: "Total TC in a Sprint",
        style: {
          color: '#0000ff',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Income',
      opposite: false,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
        color: '#f5b74f'
      },
      labels: {
        style: {
          colors: '#f5b74f',
        }
      },
      title: {
        text: "Total Automated TC",
        style: {
          color: '#f5b74f',
        }
      },
    },
    {
      seriesName: 'Revenue',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#adff2f'
      },
      labels: {
        style: {
          colors: '#adff2f',
        },
      },
      title: {
        text: "Automation Index %",
        style: {
          color: '#adff2f',
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();

  // STACKED COLUMN CHART
  var areaChartOptions = {
    series: [{
    name: 'ExecutedTCs - Manual',
    data: [263, 152, 76, 135, 132, 76]
  }, {
    name: 'Executed TCs - Automation',
    data: [606, 337, 258, 385, 292, 161]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: '20px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    categories: ['Jan-23', 'Feb-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23']
  },
  legend: {
    position: 'top',
    offsetY: 0
  },
  fill: {
    opacity: 1
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();