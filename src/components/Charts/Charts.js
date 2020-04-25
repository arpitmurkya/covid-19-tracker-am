import React from 'react';
import { connect } from 'react-redux';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../store/actions/actions';

// CSS
import styles from './Charts.module.css';

class Charts extends React.Component {
    componentDidMount() {
        this.props.fetchDailyData();
    }

    render() {
        const dailyData = this.props.dailyData;

        const lineChart = (dailyData && dailyData[0]) ?
            (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: 'blue',
                            fill: true
                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true
                        }]
                    }}
                />
            ) :
            null;

        const country = this.props.country;
        const data = this.props.data;
        const barChart = (data && data.confirmed) ?
            (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: {
                            display: true,
                            text: `Current state is ${country}`
                        }
                    }}
                />
            )
            :
            null;

        return (
            <div className={styles.container}>
                {country ? barChart : lineChart}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dailyData: state.fetchedDailyData
});

const mapDispatchToProps = {
    fetchDailyData
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts);