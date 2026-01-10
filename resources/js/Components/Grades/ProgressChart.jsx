// resources/js/Components/Grades/ProgressChart.jsx
import { useState, useEffect } from 'react';

export default function ProgressChart() {
    const [timeRange, setTimeRange] = useState('semester'); // 'week', 'month', 'semester'
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Generate sample data based on time range
        const generateData = () => {
            let data = [];
            let labels = [];

            switch (timeRange) {
                case 'week':
                    labels = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
                    data = [82, 84, 85, 83, 86, 85, 87];
                    break;
                case 'month':
                    labels = ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'];
                    data = [80, 82, 85, 87];
                    break;
                case 'semester':
                    labels = ['UH1', 'UH2', 'UTS', 'UH3', 'UH4', 'UAS'];
                    data = [78, 82, 85, 84, 86, 89];
                    break;
            }

            return { labels, data };
        };

        const { labels, data } = generateData();
        const chartPoints = labels.map((label, index) => ({
            label,
            value: data[index],
            average: data[index] - 5 + Math.random() * 10 // Random average around value
        }));

        setChartData(chartPoints);
    }, [timeRange]);

    const maxValue = Math.max(...chartData.map(d => Math.max(d.value, d.average)));
    const minValue = Math.min(...chartData.map(d => Math.min(d.value, d.average)));

    const calculateTrend = () => {
        if (chartData.length < 2) return 0;
        const first = chartData[0].value;
        const last = chartData[chartData.length - 1].value;
        return ((last - first) / first * 100).toFixed(1);
    };

    const trend = calculateTrend();
    const isPositiveTrend = parseFloat(trend) >= 0;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Progress Nilai</h3>
                <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1">
                    {['week', 'month', 'semester'].map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-3 py-1 rounded-md text-sm capitalize ${timeRange === range
                                ? 'bg-white shadow'
                                : 'hover:bg-neutral-200'
                                }`}
                        >
                            {range === 'week' ? 'Minggu' : range === 'month' ? 'Bulan' : 'Semester'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Trend Summary */}
            <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm text-neutral-600">Tren {timeRange} ini</div>
                        <div className={`text-2xl font-bold ${isPositiveTrend ? 'text-green-600' : 'text-red-600'}`}>
                            {isPositiveTrend ? '+' : ''}{trend}%
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-neutral-600">Perubahan</div>
                        <div className="text-lg font-medium text-neutral-900">
                            {isPositiveTrend ? 'Meningkat' : 'Menurun'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="relative h-64">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 25, 50, 75, 100].map((percent, index) => (
                        <div key={index} className="relative">
                            <div className="absolute left-0 right-0 h-px bg-neutral-200"></div>
                            <div className="absolute left-0 text-xs text-neutral-500 -translate-y-1/2">
                                {Math.round(minValue + (percent / 100) * (maxValue - minValue))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chart Area */}
                <div className="absolute inset-0 pl-8 pr-4 pt-4 pb-8">
                    <div className="relative h-full">
                        {/* Data Points */}
                        <svg className="absolute inset-0 w-full h-full">
                            {/* Your Scores Line */}
                            <polyline
                                fill="none"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                points={chartData.map((point, index) => {
                                    const x = (index / (chartData.length - 1)) * 100;
                                    const y = 100 - ((point.value - minValue) / (maxValue - minValue)) * 100;
                                    return `${x}%,${y}%`;
                                }).join(' ')}
                            />

                            {/* Average Line */}
                            <polyline
                                fill="none"
                                stroke="#9CA3AF"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                points={chartData.map((point, index) => {
                                    const x = (index / (chartData.length - 1)) * 100;
                                    const y = 100 - ((point.average - minValue) / (maxValue - minValue)) * 100;
                                    return `${x}%,${y}%`;
                                }).join(' ')}
                            />

                            {/* Data Points */}
                            {chartData.map((point, index) => {
                                const x = (index / (chartData.length - 1)) * 100;
                                const y = 100 - ((point.value - minValue) / (maxValue - minValue)) * 100;

                                return (
                                    <g key={index}>
                                        <circle
                                            cx={`${x}%`}
                                            cy={`${y}%`}
                                            r="6"
                                            fill="#3B82F6"
                                            className="cursor-pointer hover:r-8 transition-all"
                                        />
                                        <text
                                            x={`${x}%`}
                                            y={`${y - 15}%`}
                                            textAnchor="middle"
                                            className="text-xs font-medium fill-neutral-900"
                                        >
                                            {point.value}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>
                </div>
            </div>

            {/* X-axis Labels */}
            <div className="flex justify-between mt-2 px-8">
                {chartData.map((point, index) => (
                    <div key={index} className="text-center">
                        <div className="text-xs text-neutral-600">{point.label}</div>
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                        <div className="w-4 h-0.5 bg-blue-500 mr-2"></div>
                        <span className="text-sm text-neutral-600">Nilai Anda</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-0.5 bg-neutral-400 mr-2" style={{ strokeDasharray: '5,5' }}></div>
                        <span className="text-sm text-neutral-600">Rata-rata Kelas</span>
                    </div>
                </div>
            </div>

            {/* Insights */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-3">Insights</h4>
                <div className="space-y-2">
                    <div className="flex items-center text-sm">
                        <i className={`fas fa-${isPositiveTrend ? 'arrow-up text-green-500' : 'arrow-down text-red-500'} mr-2`}></i>
                        <span className="text-neutral-700">
                            Nilai Anda {isPositiveTrend ? 'meningkat' : 'menurun'} {Math.abs(parseFloat(trend))}% {timeRange} ini
                        </span>
                    </div>
                    <div className="flex items-center text-sm">
                        <i className="fas fa-chart-line text-blue-500 mr-2"></i>
                        <span className="text-neutral-700">
                            Peningkatan tertinggi: +{Math.max(...chartData.map(d => d.value)) - Math.min(...chartData.map(d => d.value))} poin
                        </span>
                    </div>
                    <div className="flex items-center text-sm">
                        <i className="fas fa-bullseye text-purple-500 mr-2"></i>
                        <span className="text-neutral-700">
                            Target berikutnya: {Math.max(...chartData.map(d => d.value)) + 2} poin
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}