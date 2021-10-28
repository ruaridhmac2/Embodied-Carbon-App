import './App.css';
import {Chart} from "react-google-charts";
import DemoApp from './DemoApp'



const Charts = ({data}) => {
  return (
    <div className = 'chart-test'style={{ display: 'flex', maxWidth: 1500 }}>
  <Chart
    width={400}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={data}
    options={{
      title: 'test-chart',
      chartArea: { width: '30%' },
      hAxis: {
        title: 'letter',
        minValue: 0,
      },
      vAxis: {
        title: 'number',
      },
    }}
    legendToggle
  />
  </div>
  )
}

function App() {
  const data = [['let', 'num'], ['A', 1], ['B', 2], ['c', 3]]
  return (
    <div className="App">
      <header className="App-header">
        <h1> dashboard </h1>
      </header>
      <Charts data = {data}/>
      <DemoApp></DemoApp>
    </div>
  );
}

export default App;
