// Gráfico de Volume de Solicitações
const ctx1 = document.getElementById('requestVolumeChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Aug-17', 'Sep-17', 'Oct-17', 'Nov-17', 'Dec-17', 'Jan-18', 'Feb-18', 'Mar-18'],
    datasets: [
      {
        label: 'Revenue',
        data: [30, 40, 50, 35, 45, 60, 70, 80],
        borderColor: '#3e95cd',
        fill: false
      },
      {
        label: 'Answered Call',
        data: [20, 35, 40, 30, 50, 55, 65, 75],
        borderColor: '#8e5ea2',
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Request Volume Vs. Service Level'
    }
  }
});

// Gráfico de Receita e Custos de Suporte
const ctx2 = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
    datasets: [
      {
        label: 'Revenue',
        data: [40, 50, 60, 70, 80, 90],
        backgroundColor: '#3e95cd'
      },
      {
        label: '% of Support Costs',
        data: [10, 20, 15, 25, 10, 15],
        type: 'line',
        borderColor: '#8e5ea2',
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Revenue and % of Support Costs to Revenue'
    }
  }
});

// Gráfico de Satisfação do Cliente
const ctx3 = document.getElementById('satisfactionChart').getContext('2d');
new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very Unsatisfied'],
    datasets: [{
      label: 'Customer Satisfaction',
      data: [25, 35, 20, 15, 5],
      backgroundColor: ['#3cba9f', '#8e5ea2', '#e8c3b9', '#c45850', '#3e95cd']
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Customer Satisfaction'
    }
  }
});
