// resources/js/Components/Dashboard/PerformanceChart.jsx
import { useEffect, useRef } from 'react';

export default function PerformanceChart() {
    const chartRef = useRef(null);
    
    const scores = [75, 80, 85, 90, 88, 92, 95];

    useEffect(() => {
        // Animasi chart bisa ditambahkan di sini jika diperlukan
    }, []);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Perkembangan Nilai</h3>
            <div className="h-48 flex items-end space-x-2" ref={chartRef}>
                {scores.map((score, index) => {
                    const height = (score / 100) * 120;
                    return (
                        <div
                            key={index}
                            className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all duration-500"
                            style={{ 
                                height: `${height}px`,
                                animationDelay: `${index * 0.1}s`
                            }}
                            title={`Minggu ${index + 1}: ${score}`}
                        ></div>
                    );
                })}
            </div>
            <div className="mt-4 flex justify-between text-sm text-neutral-600">
                <span>Minggu 1</span>
                <span>Minggu 4</span>
            </div>
        </div>
    );
}