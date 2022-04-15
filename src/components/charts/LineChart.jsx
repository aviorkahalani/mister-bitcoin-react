import { Component } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export class LineChart extends Component {
  state = {
    data: {
      labels: this.props.data.values.map((v, idx) => idx),
      datasets: [],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: this.props.data.name,
        },
      },
    },
  }

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        datasets: [
          ...prevState.data.datasets,
          {
            label: this.props.data.name,
            data: this.props.data.values.map((value) => value.y),
            borderColor: this._randomColor(),
            backgroundColor: this._randomColor(),
          },
        ],
      },
    }))
  }

  componentWillUnmount() {
    this.setState((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        datasets: [],
      },
    }))
  }

  _randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16)
  }

  render() {
    const { options, data } = this.state

    return (
      <div>
        <Line options={options} data={data} />
      </div>
    )
  }
}
