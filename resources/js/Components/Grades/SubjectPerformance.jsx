// resources/js/Components/Grades/SubjectPerformance.jsx
import { useState } from 'react';

export default function SubjectPerformance() {
    const [performance] = useState([
        { subject: 'Matematika', score: 89.5, classAverage: 82.3, rank: 3, trend: 'up' },
        { subject: 'Fisika', score: 84.5, classAverage: 79.1, rank: 8, trend: 'up' },
        { subject: 'Kimia', score: 56.3, classAverage: 73.8, rank: 25, trend: 'down' },
        { subject: 'Biologi', score: 92.0, classAverage: 85.2, rank: 2, trend: 'up' },
        { subject: 'Bahasa Inggris', score: 61.8, classAverage: 77.4, rank: 18, trend: 'stable' }
    ]);

    const [selectedSubject, setSelectedSubject] = useState(null);

    const getPerformanceColor = (score, average) => {
        const difference = score - average;
        if (difference >= 10) return 'text-green-600';
        if (difference >= 5) return 'text-green-500';
        if (difference >= 0) return 'text-green-400';
        if (difference >= -5) return 'text-orange-500';
        return 'text-red-600';
    };

    const getPerformanceIcon = (score, average) => {
        const difference = score - average;
        if (difference >= 5) return <i className="fas fa-arrow-up text-green-500"></i>;
        if (difference >= 0) return <i className="fas fa-check text-green-400"></i>;
        if (difference >= -5) return <i className="fas fa-exclamation text-orange-500"></i>;
        return <i className="fas fa-arrow-down text-red-500"></i>;
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <i className="fas fa-arrow-up text-green-500"></i>;
        if (trend === 'down') return <i className="fas fa-arrow-down text-red-500"></i>;
        return <i className="fas fa-minus text-gray-500"></i>;
    };

    const calculateOverallPerformance = () => {
        const totalDifference = performance.reduce((sum, p) => {
            return sum + (p.score - p.classAverage);
        }, 0);
        return (totalDifference / performance.length).toFixed(1);
    };

    const overallPerformance = calculateOverallPerformance();

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Performa vs Rata-rata Kelas</h3>

            {/* Overall Performance */}
            <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm text-neutral-600">Performansi Keseluruhan</div>
                        <div className={`text-2xl font-bold ${parseFloat(overallPerformance) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {overallPerformance >= 0 ? '+' : ''}{overallPerformance}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-neutral-600">Dibanding Rata-rata Kelas</div>
                        <div className="text-lg font-medium text-neutral-900">
                            {parseFloat(overallPerformance) >= 0 ? 'Di Atas' : 'Di Bawah'} Rata-rata
                        </div>
                    </div>
                </div>
            </div>

            {/* Performance List */}
            <div className="space-y-4">
                {performance.map((item) => {
                    const difference = (item.score - item.classAverage).toFixed(1);
                    const percentageDifference = ((difference / item.classAverage) * 100).toFixed(1);

                    return (
                        <div
                            key={item.subject}
                            className={`p-4 border rounded-xl cursor-pointer hover:bg-neutral-50 ${selectedSubject === item.subject ? 'border-primary bg-primary/5' : 'border-neutral-200'}`}
                            onClick={() => setSelectedSubject(item.subject === selectedSubject ? null : item.subject)}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fas fa-book text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-neutral-900">{item.subject}</h4>
                                        <div className="text-xs text-neutral-500">
                                            Peringkat #{item.rank} • {getTrendIcon(item.trend)}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-bold text-neutral-900">{item.score}</div>
                                    <div className={`text-sm ${getPerformanceColor(item.score, item.classAverage)}`}>
                                        {getPerformanceIcon(item.score, item.classAverage)}
                                        <span className="ml-1">{difference >= 0 ? '+' : ''}{difference}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Bar */}
                            <div className="mt-3">
                                <div className="flex justify-between text-xs text-neutral-600 mb-1">
                                    <span>Nilai Anda</span>
                                    <span>Rata-rata Kelas: {item.classAverage}</span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div className="relative h-2">
                                        {/* Class Average Line */}
                                        <div
                                            className="absolute top-0 w-0.5 h-2 bg-neutral-700"
                                            style={{ left: `${(item.classAverage / 100) * 100}%` }}
                                        ></div>
                                        {/* Your Score */}
                                        <div
                                            className={`absolute top-0 h-2 rounded-full ${item.score >= item.classAverage ? 'bg-green-500' : 'bg-red-500'}`}
                                            style={{
                                                width: `${(item.score / 100) * 100}%`,
                                                maxWidth: '100%'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                    <span>{percentageDifference >= 0 ? '+' : ''}{percentageDifference}%</span>
                                    <span>{difference >= 0 ? 'Di atas' : 'Di bawah'} rata-rata</span>
                                </div>
                            </div>

                            {/* Detailed Comparison (on click) */}
                            {selectedSubject === item.subject && (
                                <div className="mt-4 pt-4 border-t border-neutral-200">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-3 bg-green-50 rounded-lg">
                                            <div className="text-sm text-neutral-600">Nilai Anda</div>
                                            <div className="text-2xl font-bold text-green-700">{item.score}</div>
                                        </div>
                                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                                            <div className="text-sm text-neutral-600">Rata-rata Kelas</div>
                                            <div className="text-2xl font-bold text-blue-700">{item.classAverage}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className={`text-lg font-medium ${item.score >= item.classAverage ? 'text-green-600' : 'text-red-600'}`}>
                                            {item.score >= item.classAverage ? '🎉 Performa Baik!' : '📈 Perlu Peningkatan'}
                                        </div>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            {item.score >= item.classAverage
                                                ? `Anda ${difference} poin di atas rata-rata kelas`
                                                : `Anda ${Math.abs(difference)} poin di bawah rata-rata kelas`
                                            }
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Performance Summary */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-3">Ringkasan Performa</h4>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">Mata Pelajaran Unggulan</span>
                        <span className="font-medium text-green-600">Biologi (+6.8)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">Perlu Perhatian</span>
                        <span className="font-medium text-red-600">Kimia (-17.5)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">Total di Atas Rata-rata</span>
                        <span className="font-medium text-green-600">3 dari 5 mapel</span>
                    </div>
                </div>
            </div>
        </div>
    );
}